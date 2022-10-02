import React, { useState } from 'react';
import axios from 'axios';
import { resources } from '../../config/config';

const LoginForm = (props) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    loginErrors: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((user) => {
      return {
        ...user,
        [name]: value,
      };
    });
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    const { email, password } = userData;

    const { url } = resources;

    axios
      .post(
        `${url}/sessions`,
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log('response from LOGIN', response.data);
        if (response.data.status === 'created') {
          props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log('login error', error);
      });
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='mt-5'>
        <input
          className='p-3 m-3'
          type='email'
          name='email'
          placeholder='Email'
          value={userData.email}
          onChange={handleChange}
          required
        />

        <input
          className='p-3 m-3'
          type='password'
          name='password'
          placeholder='Password'
          value={userData.password}
          onChange={handleChange}
          required
        />

        <button type='submit' className='bg-gray-100 p-3 rounded-md'>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
