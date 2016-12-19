import React      from 'react';
import { Link }   from 'react-router'
import { connect } from 'react-redux';

class Welcome extends React.Component {

  render() {
    return (
      <div className="text-md-center">
        <h1 className="display-3 mt-2">Welcome!</h1>
        <p className="lead">This is a framework for creating a React app deployed using Heroku!</p>
      </div>
    );
  }
}

export default Welcome;
