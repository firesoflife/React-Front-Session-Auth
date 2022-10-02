import React, { useState, useEffect, Fragment } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav';

import Home from './pages/public/Home';
import Dashboard from './pages/private/Dashboard';
import RegistrationLayout from './pages/public/RegistrationLayout';
import LoginLayout from './pages/public/LoginLayout';
import UpdateLayout from './pages/public/UpdateLayout';

const App = () => {
  const navigate = useNavigate();
  const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN');
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:3000/logged_in', { withCredentials: true })
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
  }, [loggedInStatus]);

  const handleLogout = () => {
    setLoggedInStatus('NOT_LOGGED_IN');
    setUserData({});
    navigate('/');
  };

  const handleLogin = (data) => {
    setLoggedInStatus('LOGGED_IN');
    setUserData(data.user);
  };

  const handleSuccessfulAuth = (data) => {
    handleLogin(data);
    navigate('/dashboard');
  };

  const handleLogoutClick = () => {
    axios
      .delete('http://localhost:3000/logout', { withCredentials: true })
      .then((response) => {
        handleLogout();
      })
      .catch((error) => {
        console.log('logout error', error);
      });
  };

  return (
    <div className=' flex flex-col bg-gray-900 h-full'>
      <Fragment>
        <Nav
          handleLogoutClick={handleLogoutClick}
          loggedInStatus={loggedInStatus}
        />
        <Routes>
          <Route
            exact
            path={'/'}
            element={
              <Home
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                loggedInStatus={loggedInStatus}
                handleSuccessfulAuth={handleSuccessfulAuth}
              />
            }
          />
          <Route
            exact
            path={'/dashboard'}
            element={
              <Dashboard
                loggedInStatus={loggedInStatus}
                handleLogout={handleLogin}
                userData={userData}
              />
            }
          />
          <Route
            exact
            path={'/signup'}
            element={
              <RegistrationLayout
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                loggedInStatus={loggedInStatus}
                handleSuccessfulAuth={handleSuccessfulAuth}
              />
            }
          />
          <Route
            exact
            path={'/login'}
            element={
              <LoginLayout
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                loggedInStatus={loggedInStatus}
                handleSuccessfulAuth={handleSuccessfulAuth}
              />
            }
          />
          <Route
            exact
            element={'/update/:id'}
            render={
              <UpdateLayout
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                loggedInStatus={loggedInStatus}
                handleSuccessfulAuth={handleSuccessfulAuth}
                userData={userData}
              />
            }
          />
        </Routes>
      </Fragment>
    </div>
  );
};

export default App;
