//This header component is not a page but just renders the nav links
import React from 'react'
import { NavLink } from 'react-router-dom'

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

export default Header