import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GuidrAppDash from '../components/Dashboard/GuidrAppDash'
import AddTrip from '../components/Dashboard/AddTrip'
import EditTrip from '../components/Dashboard/EditTrip'
import Header from '../components/Header'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={GuidrAppDash} exact={true} />
        <Route path="/addTrip" component={AddTrip} />
        <Route path="/editTrip/:id" component={EditTrip} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;