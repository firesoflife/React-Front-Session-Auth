import React from 'react';
import Login from '../../components/auth/Login';

const LoginLayout = (props) => {
  return (
    <div className='flex justify-center'>
      <h2>Layout for Login</h2>
      <Login
        handleSuccessfulAuth={props.handleSuccessfulAuth}
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
      />
    </div>
  );
};

export default LoginLayout;
