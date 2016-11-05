import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">Home</Link>
        <Link to="/about" className="navbar-brand">About</Link>
        <Link to="/project" className="navbar-brand">Projects</Link>
        <Link to="/contact" className="navbar-brand" style = {{float:"right"}}>Contact</Link>
      </nav>
    );
  }
}

export default Header;
