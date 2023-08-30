import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div>
    <nav className={`navbar navbar-expand-lg py-0 navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to={'/about'}>About</Link>
        </li>
      </ul>
    </div>
      <div className={`form-check form-switch text-${props.mode==='info'?'dark':'info'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
</div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes = {title : PropTypes.string.isRequired}

Navbar.defaultProps = {
  title: "Set Title here"
}