const debug = require('debug')('cluster');
const appRootDir = require('app-root-dir');
const cluster = require('cluster');
const os = require('os');

const dir = process.env.DIR;
const env = process.env.NODE_ENV;

if (!dir) {
  debug('Define DIR env.');
  process.exit(1);
}

const loadApp = env === 'development' ? `/${dir}/build/server/index.js` : `/server/index.js`;

const config = {
  exec: `${appRootDir.get()}${loadApp}`,
  workers: os.cpus().length || 1,
  pidfile: `${process.cwd()}/pid.${dir}`,
  title: `lite-master-${dir}`,
  workerTitle: `lite-worker-${dir}`,
};

process.stdin.resume();
process.title = config.title;

// #region Helper
const startAWorker = () => {
  const worker = cluster.fork();

  worker.on('message', _message => {
    if (worker.state !== 'none') {
      // TODO: Add logger to check message from worker process PID
    }
  });
};

const shutdownWorkers = () => {
  Object.values(cluster.workers).forEach(worker => {
    setTimeout(() => {
      worker.kill();
    }, 1000);
  });

  process.exit();
};

const reloadWorkers = () => {
  Object.values(cluster.workers).forEach(worker => {
    setTimeout(() => {
      worker.kill();
    }, 1000);
  });
};

// #endregion

/**
 *
 * Main process create here
 *
 */

if (cluster.isMaster) {
  debug(`Master ${process.pid} is running`);

  cluster.setupMaster({
    exec: config.exec,
    args: process.argv.slice(2),
    silent: config.silent,
  });

  for (let i = 0; i < os.cpus().length; i += 1) {
    startAWorker();
  }

  cluster.on('online', worker => {
    // TODO: Adding logger forking process
    debug(`Worker ${worker.process.pid} has spawned and running`);
  });

  cluster.on('listening', (_worker, _address) => {
    // TODO: Adding logger cluster listen event
  });

  cluster.on('exit', (worker, code, signal) => {
    // TODO: Adding logger cluster on exit
    debug(`Worker ${worker.process.pid} died with code: ${code} and signal: ${signal}`);
    debug('Starting a new worker...');
    startAWorker();
  });

  /**
   * Tell the master to reload the configuration of his workers.
   * In our cluster, this will mean a rolling restart of each worker one-by-one.
   */
  process.on('SIGUSR2', () => {
    // TODO: Adding logger signal SIGUSR2 sent
    debug('Reloading workers...');
    reloadWorkers();
  });

  /**
   * Kill the running process, with various degrees of severity.
   * In our application we will treat these all as meaning “kill the master and all of his workers”
   */
  process.on('SIGINT', () => {
    // TODO: Adding logger signal SIGINT sent
    debug('master get sigint');
    shutdownWorkers();
  });
  process.on('SIGTERM', () => {
    // TODO: Adding logger signal SIGTERM sent
    debug('master get sigterm');
    shutdownWorkers();
  });
  process.on('SIGHUP', () => {
    // TODO: Adding logger signal SIGHUP sent
    shutdownWorkers();
  });
  process.on('exit', (_worker, _code, _signal) => {
    // TODO: Adding logger worker exited
    shutdownWorkers();
  });
}
