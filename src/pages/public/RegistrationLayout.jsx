import React from 'react';
import Registration from '../../components/auth/Registrations';

const RegistrationLayout = ({
  handleSuccessfulAuth,
  handleLogout,
  handleLogin,
}) => {
  return (
    <div className='	self-center flex flex-col max-w-sm'>
      <h1 className='text-white text-4xl text-center '>
        Sign up to get help or help out today!
      </h1>
      <Registration
        handleSuccessfulAuth={handleSuccessfulAuth}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    </div>
  );
};

export default RegistrationLayout;
