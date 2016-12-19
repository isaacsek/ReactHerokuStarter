import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise';

import App from './components/app';
import Welcome from './components/welcome';

//const createStoreWithMiddleware = applyMiddleware(reduxThunk, promise)(createStore);
//const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
      </Route>
    </Router>
  , document.querySelector('.container'));
