import React from 'react';
import Login from '../../components/auth/Login';

const LoginLayout = ({
  handleSuccessfulAuth,
  handleLogin,
  handleLogout,
  loggedInStatus,
}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='justify-center text-white text-3xl text-center'>
        Layout for Login -- {loggedInStatus}
      </h2>

      <Login
        handleSuccessfulAuth={handleSuccessfulAuth}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    </div>
  );
};

export default LoginLayout;
