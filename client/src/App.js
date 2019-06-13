import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Login</Link>
        <Link to="/login">Register</Link>
        <Link to="/register">Users</Link>
      </nav>

      <Route exact path="/" />
    </div>
  );
}

export default App;
