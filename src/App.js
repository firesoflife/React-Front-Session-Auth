import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav';

import Home from './pages/public/Home';
import Dashboard from './pages/private/Dashboard';
import RegistrationLayout from './pages/public/RegistrationLayout';
import LoginLayout from './pages/public/LoginLayout';

const App = () => {
  const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN');
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((response) => {
        console.log('resp from server', response);
        if (response.data.logged_in && loggedInStatus === 'NOT_LOGGED_IN') {
          setLoggedInStatus('LOGGED_IN');
          setUserData(response.data.user);
        } else if (
          !response.data.logged_in &
          (loggedInStatus === 'LOGGED_IN')
        ) {
          setLoggedInStatus('NOT_LOGGED_IN');
          setUserData({});
        }
      })
      .catch((error) => {
        console.log('check login error', error);
      });
  }, []);

  const handleLogout = () => {
    setLoggedInStatus('NOT_LOGGED_IN');
    setUserData({});
  };

  const handleLogin = (data) => {
    setLoggedInStatus('LOGGED_IN');
    setUserData(data.user);
  };

  return (
    <div className='flex flex-col bg-gray-900 h-screen'>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route
            exact
            path={'/'}
            render={(props) => (
              <Home
                {...props}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                loggedInStatus={loggedInStatus}
              />
            )}
          />
          <Route
            exact
            path={'/dashboard'}
            render={(props) => (
              <Dashboard
                {...props}
                loggedInStatus={loggedInStatus}
                handleLogout={handleLogin}
              />
            )}
          />
          <Route
            exact
            path={'/signup'}
            render={(props) => (
              <RegistrationLayout
                {...props}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                loggedInStatus={loggedInStatus}
              />
            )}
          />
          <Route
            exact
            path={'/login'}
            render={(props) => (
              <LoginLayout
                {...props}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                loggedInStatus={loggedInStatus}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
