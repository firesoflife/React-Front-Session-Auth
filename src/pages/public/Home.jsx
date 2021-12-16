import React, { Component } from 'react';
import axios from 'axios';

import LoginLayout from './LoginLayout';
import RegistrationLayout from './RegistrationLayout';
import LogoutButton from '../../components/buttons/LogoutButton';

const Home = (props) => {
  // constructor(props) {
  //   super(props);

  //   this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  //   this.handleLogoutClick = this.handleLogoutClick.bind(this);
  // }

  const { loggedInStatus } = props.loggedInStatus;

  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
    props.history.push('/dashboard');
  };

  const handleLogoutClick = () => {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then((response) => {
        props.handleLogout();
      })
      .catch((error) => {
        console.log('logout error', error);
      });
  };

  return (
    <div className='flex flex-col justify-center h-full align-middle'>
      <h1 className='text-white text-6xl'>Home</h1>
      <h2 className='text-white text-4xl'>Status: {props.loggedInStatus}</h2>
      {/* <LogoutButton
          handleLogoutClick={this.handleLogoutClick}
          handleLogout={this.props.handleLogout}
        /> */}
      <button
        onClick={() => handleLogoutClick()}
        className='bg-gray-100 p-3 rounded-md block'
      >
        Logout
      </button>
      {/* <RegistrationLayout handleSuccessfulAuth={handleSuccessfulAuth} /> */}
      <LoginLayout handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
};

export default Home;
