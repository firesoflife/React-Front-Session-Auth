import React, { useState } from 'react';
import axios from 'axios';

const LogoutButton = (props) => {
  const [loggedInStatus, setLoggedInStatus] = useState('');

  const handleLogoutClick = () => {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then((response) => {
        // setLoggedInStatus('NOT_LOGGED_IN');
      })
      .catch((error) => {
        console.log('logout error', error);
      });
  };

  return (
    <button
      onClick={() => handleLogoutClick()}
      className='bg-gray-100 p-3 rounded-md block'
    >
      Logout
    </button>
  );
};
export default LogoutButton;
