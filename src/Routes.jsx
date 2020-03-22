import React from 'react';
import AppBar from './components/AppBar';
import { Router, Route } from 'react-router-dom';
import { Switch } from '@material-ui/core';

const Routes = () => (
  <Router>
    <AppBar />
    <Switch>
      <Route path="/branding">
        {/* <Branding /> */}
      </Route>
      <Route path="/adcampaigns">
        {/* <AdvertisementCampaigns /> */}
      </Route>
      <Route path="/apps">
        {/* <Apps /> */}
      </Route>
      <Route path="/contact">
        {/* <Contact /> */}
      </Route>
    </Switch>
  </Router>
);

export default Routes;
