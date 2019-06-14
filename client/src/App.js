import React from 'react';
import { Route, Link } from 'react-router-dom';

import Login from './auth/Login';
import Register from './auth/Register';
import './App.css';
import Users from './users/Users';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Users</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
        <Route exact path="/" component={Users} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
