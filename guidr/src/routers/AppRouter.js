import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GuidrAppDash from '../components/Dashboard/GuidrAppDash'
import FilterTripType from '../components/Dashboard/FilterTripType'
import AddTrip from '../components/Dashboard/AddTrip'
import AdventureFeed from '../components/Dashboard/AdventureFeed'
import EditTrip from '../components/Dashboard/EditTrip'
import Header from '../components/Header'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={GuidrAppDash} exact={true} />
        <Route path="/tripType" component={FilterTripType} />
        <Route path="/addTrip" component={AddTrip} />
        <Route path="/editTrip/:id" component={EditTrip} />
        <Route path="/viewFeed" component={AdventureFeed} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;