import React from 'react'
import { Link } from 'react-router-dom'

const NavigationNoAuth = () => (
  <ul className="right">
    <li>
      <Link to="/login">Login</Link>
    </li>
    <li>
      <Link to="/register">Register</Link>
    </li>
  </ul>
)

const NavigationWithAuth = () => {}

const Navigation = () => (
  <div className="navbar-fixed z-depth-5">
    <nav className="blue-grey darken-4">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React GraphQL
        </Link>
        <NavigationNoAuth />
      </div>
    </nav>
  </div>
)

export default Navigation
