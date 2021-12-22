import React from 'react';
import axios from 'axios';

import LogoutButton from '../../components/buttons/LogoutButton';

const Home = (props) => {
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
    </div>
  );
};

export default Home;
