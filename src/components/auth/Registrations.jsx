import React, { useState } from 'react';
import axios from 'axios';
import { resources } from '../../config/config';

const Registrations = ({ handleSuccessfulAuth }) => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    registrationErrors: '',
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
    const { username, email, password, password_confirmation } = userData;

    const { url } = resources;

    axios
      .post(
        `${url}/registrations`,
        {
          user: {
            username: username,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((resp) => {
        if (resp.data.status === 'created') {
          console.log(resp.data);
          handleSuccessfulAuth(resp.data);
        }
      })
      .catch((error) => {
        console.log('registration error', error);
      });
    e.preventDefault();
  };

  return (
    <div className='outer my-8'>
      <div className='form p-10 border-4 border-yellow-300 rounded-3xl  shadow-inner'>
        <h3 className='max-w-md text-center text-sm text-white'>
          Please note that you'll be required to fill out your profile before
          requesting help
        </h3>
        <form onSubmit={handleSubmit} className='mt-5 flex flex-col'>
          <input
            className='p-3 m-3'
            type='username'
            name='username'
            placeholder='Username'
            value={userData.username}
            onChange={handleChange}
          />
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

          <input
            className='p-3 m-3'
            type='password'
            name='password_confirmation'
            placeholder='Password confirmation'
            value={userData.password_confirmation}
            onChange={handleChange}
            required
          />

          <button
            type='submit'
            className='bg-gray-100 p-3 rounded-md max-w-min m-auto mt-3'
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registrations;
