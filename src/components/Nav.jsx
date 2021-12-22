import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './buttons/LogoutButton';

const Nav = (props) => {
  if (props.loggedInStatus === 'NOT_LOGGED_IN') {
    return (
      <div className='flex px-16 items-center justify-between h-1/6'>
        <Link to='/'>
          <h1 className='text-white text-4xl'>NeighbourAid</h1>
        </Link>

        <ul className='text-white flex space-x-20'>
          <li>
            <Link to={'/signup'}>
              <button className='text-green-400 bg-transparent border-2 border-green-400 w-28 p-3 rounded-md block'>
                Sign up
              </button>
            </Link>
          </li>
          <li>
            <Link to='/login'>
              <button className='text-green-400 bg-transparent border-2 border-green-400 w-28 p-3 rounded-md block'>
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className='flex px-16 items-center justify-between h-1/6'>
        <Link to='/'>
          <h1 className='text-white text-4xl'>NeighbourAid</h1>
        </Link>

        <ul className='text-white flex space-x-20'></ul>
        <ul>
          <li>
            <LogoutButton
              handleLogout={props.handleLogout}
              handleLogoutClick={props.handleLogoutClick}
            />
          </li>
        </ul>
      </div>
    );
  }

  // return (
  //   <div className='flex px-16 items-center justify-between h-1/6'>
  //     <Link to='/'>
  //       <h1 className='text-white text-4xl'>NeighbourAid</h1>
  //     </Link>

  //     <ul className='text-white flex space-x-20'>
  //       <li>
  //         <Link to={'/signup'}>
  //           <button className='text-green-400 bg-transparent border-2 border-green-400 w-28 p-3 rounded-md block'>
  //             Sign up
  //           </button>
  //         </Link>
  //       </li>
  //       <li>
  //         <Link to='/login'>
  //           <button className='text-green-400 bg-transparent border-2 border-green-400 w-28 p-3 rounded-md block'>
  //             Login
  //           </button>
  //         </Link>
  //       </li>
  //     </ul>
  //     <ul>
  //       <li>
  //         <LogoutButton
  //           handleLogout={props.handleLogout}
  //           handleLogoutClick={props.handleLogoutClick}
  //         />
  //       </li>
  //     </ul>
  //   </div>
  // )
};

export default Nav;
