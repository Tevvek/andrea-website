import React from 'react';

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
