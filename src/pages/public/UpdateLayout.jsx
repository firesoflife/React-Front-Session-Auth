import React from 'react';
import UpdateUser from '../../components/UpdateUser';

const UpdateLayout = (props) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='justify-center text-white text-3xl text-center'>
        Layout for Update -- {props.loggedInStatus}
      </h2>

      <UpdateUser
        handleSuccessfulAuth={props.handleSuccessfulAuth}
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
        userData={props.userData}
      />
    </div>
  );
};

export default UpdateLayout;
