import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-primary flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to the Moon Marketplace
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
		  <medium className="text-white"><span id="account">Current Address:   </span></medium>
            <medium className="text-white"><span id="account">{this.props.account}</span></medium>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
