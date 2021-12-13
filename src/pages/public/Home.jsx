import React, { Component } from 'react';
import axios from 'axios';

import LoginLayout from './LoginLayout';
import RegistrationLayout from './RegistrationLayout';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push('/dashboard');
  }

  handleLogoutClick() {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then((response) => {
        this.props.handleLogout();
      })
      .catch((error) => {
        console.log('logout error', error);
      });
  }

  render() {
    return (
      <div className='flex flex-col justify-center h-full align-middle'>
        <h1 className='text-white text-6xl'>Home</h1>
        <h2 className='text-white text-4xl'>
          {' '}
          Status: {this.props.loggedInStatus}
        </h2>
        <button
          onClick={() => this.handleLogoutClick()}
          className='bg-gray-100 p-3 rounded-md block'
        >
          Logout
        </button>
        <RegistrationLayout handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <LoginLayout handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}
