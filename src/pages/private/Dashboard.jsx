import React from 'react';

const Dashboard = (props) => {
  return (
    <div>
      <div>
        <h1 className='text-white text-6xl'>Dashboard</h1>
        <h2 className='text-white text-4xl'>{props.loggedInStatus}</h2>
      </div>
    </div>
  );
};

export default Dashboard;
