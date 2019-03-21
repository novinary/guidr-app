import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GuidrAppDash from "../components/Dashboard/GuidrAppDash";
import AddTrip from "../components/Dashboard/AddTrip";
import EditTrip from "../components/Dashboard/EditTrip";
import Header from "../components/Header";
import { LoginPage } from "../components/Dashboard/LoginPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={GuidrAppDash} />
        <Route path="/addTrip" component={AddTrip} />
        <Route path="/editTrip/:id" component={EditTrip} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
