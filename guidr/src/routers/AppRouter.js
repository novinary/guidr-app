import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import GuidrAppDash from '../components/Dashboard/GuidrAppDash'
import FilterTripType from '../components/Dashboard/FilterTripType'
import AddTrip from '../components/Profile/AddTrip'
import AdventureFeed from '../components/Profile/AdventureFeed'
import EditTrip from '../components/Profile/EditTrip'

const Header = () => (
  <header>
    <h1>Guidr App</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/tripType" activeClassName="is-active">Filter Trip Type</NavLink>
    <NavLink to="/addTrip" activeClassName="is-active">Add Trip</NavLink>
    <NavLink to="/editTrip" activeClassName="is-active">Edit Trip</NavLink>
    <NavLink to="/viewFeed" activeClassName="is-active">Adventure Feed</NavLink>
  </header>
)

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={GuidrAppDash} exact={true} />
        <Route path="/tripType" component={FilterTripType} />
        <Route path="/addTrip" component={AddTrip} />
        <Route path="/editTrip" component={EditTrip} />
        <Route path="/viewFeed" component={AdventureFeed} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;