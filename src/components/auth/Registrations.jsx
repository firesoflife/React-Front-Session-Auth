import React, { useState } from 'react';
import axios from 'axios';

const Registrations = (props) => {
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

    axios
      .post(
        'http://localhost:3001/registrations',
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
          props.handleSuccessfulAuth(resp.data);
        }
      })
      .catch((error) => {
        console.log('registration error', error);
      });
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='mt-5'>
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

        <button type='submit' className='bg-gray-100 p-3 rounded-md'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Registrations;
