// import React, { Fragment } from 'react';
// import LogInOutButton from './buttons/LogInOutButton';

// const Nav = (props) => {
//   if (props.loggedInStatus === 'NOT_LOGGED_IN') {
//     return (
//       <div className='flex px-16 items-center justify-between h-1/6'>
//         <h1 className='text-white text-4xl'>NeighbourAid</h1>
//         <ul className='text-white flex space-x-20'>
//           <li>Test1</li>
//           <li> Login </li>
//         </ul>
//       </div>
//     );
//   } else if (props.loggedInStatus === 'LOGGED_IN') {
//     return (
//       <div className='flex px-16 items-center justify-between h-1/6'>
//         <h1 className='text-white text-4xl'>NeighbourAid</h1>
//         <ul className='text-white flex space-x-20'>
//           <li>Test1</li>
//           <li> Logout </li>
//         </ul>
//       </div>
//     );
//   }
// };

// export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';
// import LogoutButton from './buttons/LogoutButton';

const Nav = (props) => {
  return (
    <div className='flex px-16 items-center justify-between h-1/6'>
      <h1 className='text-white text-4xl'>NeighbourAid</h1>
      <ul className='text-white flex space-x-20'>
        <li>
          <Link to={'/signup'}>Sign Up</Link>
        </li>
        <li>
          <Link to='/'>Login</Link>
        </li>
        <li>{/* <LogoutButton handleLogout={props.handleLogout} /> */}</li>
      </ul>
    </div>
  );
};

export default Nav;
