import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  state = {
    username: '',
    password: '',
    message: []
  };

  handleChange = e => {
    console.log(e.target.value);

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  register = (e, state) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/auth/register', state)
      .then(res => {
        console.log(res.data);
        this.setState({
          message: res.data
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          message: err.response.data
        });
      });
  };

  SuccMessage = () => {
    return <div>{this.state.message.message}</div>;
  };

  ErrMessage = () => {
    return (
      <div>
        <p>Error: {this.state.message.errno}</p>
        <p>Code: {this.state.message.code}</p>
      </div>
    );
  };

  Message = () => {
    const message = this.state.message;
    if (message.errno) {
      return <this.ErrMessage />;
    }
    if (message.message) {
      return <this.SuccMessage />;
    } else {
      return null;
    }
  };

  render() {
    console.log(this.state.message.message);
    return (
      <div>
        <h1>Sign Up Now!</h1>

        <form onSubmit={e => this.register(e, this.state)}>
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
          <button>submit</button>
        </form>

        <this.Message />
      </div>
    );
  }
}

export default Register;
