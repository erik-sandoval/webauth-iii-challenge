import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    token: [],
    message: []
  };

  login = (e, state) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/auth/login', state)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data.token)
        this.setState({
          token: res.data.token,
          message: res.data.message
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          message: err.response.data
        });
      });
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={e => this.login(e, this.state)}>
          Username:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
