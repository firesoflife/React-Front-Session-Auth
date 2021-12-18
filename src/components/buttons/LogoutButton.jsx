import React from 'react';

const LogoutButton = (props) => {
  return (
    <button
      onClick={() => props.handleLogoutClick()}
      className='text-green-400 bg-transparent border-2 border-green-400 w-28 p-3 rounded-md block'
    >
      Logout
    </button>
  );
};
export default LogoutButton;
