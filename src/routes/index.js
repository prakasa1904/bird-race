import React from 'react';
import { object } from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Layout from '@components/Layout';

/**
 * List of routes
 */
import { HomeComponent } from '@routes/Home';
import { ProfileComponent } from '@routes/Profile';
import { LombaDetailComponent } from '@routes/LombaDetail';
import { LogoutComponent } from '@routes/Logout';

const Routes = ({ history, location, match }) => (
  <Layout history={history} location={location} match={match}>
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route exact path="/saya" component={ProfileComponent} />
      <Route exact path="/lomba/cari" component={HomeComponent} />
      <Route exact path="/lomba/tambah" component={HomeComponent} />
      <Route exact path="/lomba/ubah" component={HomeComponent} />
      <Route path="/lomba/detail/*" component={LombaDetailComponent} />
      <Route exact path="/keluar" component={LogoutComponent} />
      <Route component={HomeComponent} />
    </Switch>
  </Layout>
);

Routes.propTypes = {
  history: object.isRequired,
  location: object.isRequired,
  match: object.isRequired,
};

const RootRoutes = () => <Route component={Routes} />;

export default RootRoutes;
