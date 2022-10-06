import { render } from '@testing-library/react';
import { Navigate } from 'react-router-dom';

function Protected({ loggedInStatus, children }) {
  console.log('THE LOGIN STATUS IS', loggedInStatus);

  if (loggedInStatus === 'LOGGED_IN') {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
}

export default Protected;
