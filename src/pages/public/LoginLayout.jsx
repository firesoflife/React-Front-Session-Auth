import React from 'react';
import Login from '../../components/auth/Login';

const LoginLayout = (props) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='justify-center text-white text-3xl text-center'>
        Layout for Login -- {props.loggedInStatus}
      </h2>

      <Login
        handleSuccessfulAuth={props.handleSuccessfulAuth}
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
      />
    </div>
  );
};

export default LoginLayout;
