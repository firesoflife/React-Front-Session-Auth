import React from 'react';
import UpdateUser from '../../components/UpdateUser';

const UpdateLayout = ({
  handleSuccessfulAuth,
  loggedInStatus,
  handleLogin,
  handleLogout,
  userData,
}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='justify-center text-white text-3xl text-center'>
        Layout for Update -- {loggedInStatus}
      </h2>

      <UpdateUser
        handleSuccessfulAuth={handleSuccessfulAuth}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        userData={userData}
      />
    </div>
  );
};

export default UpdateLayout;
