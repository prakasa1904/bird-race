import run from './run';
import bundle from './bundle';

/**
 * Compiles the project from source files into a distributable
 * format and copies it to the output (build) folder.
 */
async function build() {
  return run(bundle);
}

export default build;
