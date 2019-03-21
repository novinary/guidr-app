//This header component is not a page but just renders the nav links
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
      <h1>Guidr App</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/addTrip" activeClassName="is-active">Add Trip</NavLink>
      <NavLink to="/editTrip" activeClassName="is-active">Edit Trip</NavLink>
    </header>
  )

export default Header