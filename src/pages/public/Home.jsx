import React from 'react';

const Home = (props) => {
  return (
    <div className='flex flex-col justify-center h-full align-middle'>
      <h1 className='text-white text-6xl'>Home</h1>
      <h2 className='text-white text-4xl'>Status: {props.loggedInStatus}</h2>
    </div>
  );
};

export default Home;
