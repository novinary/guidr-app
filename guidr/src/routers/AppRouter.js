import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

const DashboardPage = () => <div>This is from my dashboard component</div>;

const FilterTripType = () => <div>This is from my FilterTripType component</div>;

const AddFormPage = () => <div>This is from my add trip component</div>;

const EditFormPage = () => <div>This is from my edit expense component</div>;

const Header = () => (
  <header>
    <h1>Guidr App</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/tripType" activeClassName="is-active">Filter Trip Type</NavLink>
    <NavLink to="/addForm" activeClassName="is-active">Add Form Page</NavLink>
    <NavLink to="/EditForm" activeClassName="is-active">Edit Form Page</NavLink>
  </header>
)
  
  const AppRouter = () => (
    <BrowserRouter>
      <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/tripType" component={FilterTripType} />
        <Route path="/addForm" component={AddFormPage} />
        <Route path="/EditForm" component={EditFormPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
 
  export default AppRouter;