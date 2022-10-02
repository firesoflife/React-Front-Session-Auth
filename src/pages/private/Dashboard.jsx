import React, { useState, useEffect } from 'react';

const Dashboard = (props) => {
  const user = props.userData;

  if (props.loggedInStatus === 'NOT_LOGGED_IN') {
    props.history.push('/login');
  }

  return (
    <div>
      <div>
        <h1 className='text-white text-6xl'>Dashboard</h1>
        <h2 className='text-white text-4xl'>{props.loggedInStatus}</h2>
        <h3 className='text-white text-2xl'>welcome here: {user.username}</h3>
        <h3 className='text-white text-2xl'>welcome here: {user.email}</h3>
      </div>
    </div>
  );
};

export default Dashboard;
