import React from 'react';
import Registration from '../../components/auth/Registrations';

const RegistrationLayout = (props) => {
  return (
    <div>
      <h1>Registration Layout</h1>
      <Registration
        handleSuccessfulAuth={props.handleSuccessfulAuth}
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
      />
    </div>
  );
};

export default RegistrationLayout;
