import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Users extends React.Component {
  state = {
    users: [],
    message: []
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    const token = localStorage.getItem('token');
    const options = {
      headers: {
        authorization: token
      }
    };
    axios
      .get('http://localhost:5000/api/users', options)
      .then(res => {
        this.setState({
          users: res.data
        });
      })
      .catch(err => {
        console.log(err.response);
        this.setState({
          message: err.response.data.message
        });
      });
  };

  Message = () => {
    if (this.state.message === 'please log in') {
      return <Link to="/login">Login</Link>;
    } else {
      return null;
    }
  };

  UserList = () => {
    if (!localStorage.getItem('token')) {
      return (
        <div>
          <h2>please login</h2>
          <Link to="/login">Login</Link>
        </div>
      );
    }
    if (this.state.users < 1) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          {this.state.users.map(user => (
            <div key={user.id}>
              <h1>{user.username}</h1>
            </div>
          ))}
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h2>Our Users</h2>

        <this.UserList />

        {this.state.message}
        <br />
        <this.Message />
      </div>
    );
  }
}

export default Users;
