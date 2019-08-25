import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import HomePage from './views/Home';
import LoginPage from './views/Login';
import './assets/css/app.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className='app_body'>

          <BrowserRouter>
            <Switch>
              <Route component={ LoginPage } exact path={ '/login' } />
              <Route component={ HomePage } exact path={ '/' } />
              <Redirect from='*' to='/404' />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
