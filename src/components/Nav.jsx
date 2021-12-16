import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './buttons/LogoutButton';

const Nav = (props) => {
  return (
    <div className='flex px-16 items-center justify-between h-1/6'>
      <Link to='/'>
        <h1 className='text-white text-4xl'>NeighbourAid</h1>
      </Link>

      <ul className='text-white flex space-x-20'>
        <li>
          <Link to={'/signup'}>Sign Up</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <LogoutButton handleLogout={props.handleLogout} />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
