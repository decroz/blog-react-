import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    let { isAuthenticate } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand"  to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-Link m-2" to="/"  > <span className="sr-only">(current)</span>Home </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-Link m-2" to="/Dashboard" >Dashboard</Link>
      </li>
      <li className="nav-item active">
        {
          isAuthenticate
          ?<Link className="nav-Link m-2" to="/Login" onClick={this.props.Logout}>Logout</Link>
          :<Link className="nav-Link m-2" to="/Login" >Login</Link>
        }
      </li>
    </ul>
    
  </div>
</nav>
      </div>
    )
  }
}
