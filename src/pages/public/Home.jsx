import React from 'react';
import axios from 'axios';

import LogoutButton from '../../components/buttons/LogoutButton';

const Home = (props) => {
  // const { loggedInStatus } = props.loggedInStatus;

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
    </div>
  );
};

export default Home;
