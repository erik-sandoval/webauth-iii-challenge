import React from 'react';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = e => {
    console.log(e.target.value);

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>

        <form>
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
        </form>
      </div>
    );
  }
}

export default Login;
