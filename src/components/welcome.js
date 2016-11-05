import React      from 'react';
import { Link }   from 'react-router'
import { connect } from 'react-redux';

class Welcome extends React.Component {


  render() {
    return (
      <div className="text-md-center">
        <h1 className="display-3 m-t-2">Welcome!</h1>
        <p className="lead">Here is a framework for creating a React/Heroku App!.</p>
      </div>
    );
  }
}

export default Welcome;
