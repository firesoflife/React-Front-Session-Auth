import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { resources } from '../config/config';

// const navigate = useNavigate();

const UpdateUser = ({ user, handleSuccessfulAuth, userData, history }) => {
  const [updateUserData, setUpdateUserData] = useState({
    email: '',
    password: '',
    loginErrors: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateUserData((user) => {
      return {
        ...user,
        [name]: value,
      };
    });
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    const { email, password } = updateUserData;

    const id = user.id;

    const { url } = resources;

    axios
      .put(
        `${url}/update/${id}`,
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          handleSuccessfulAuth(response.data);
        } else {
          history.push('/login');
          // navigate('/login');
        }
      })
      .catch((error) => {
        console.log('login error', error);
      });
    e.preventDefault();
  };

  console.log(userData);

  return (
    <div>
      <h2 className='text-white text-4xl'>
        You are editing the details for: {userData.email}
      </h2>
      <form onSubmit={handleSubmit} className='mt-5'>
        <input
          className='p-3 m-3'
          type='email'
          name='email'
          placeholder='Email'
          value={updateUserData.email}
          onChange={handleChange}
          required
        />

        <input
          className='p-3 m-3'
          type='password'
          name='password'
          placeholder='Password'
          value={updateUserData.password}
          onChange={handleChange}
          required
        />

        <button type='submit' className='bg-gray-100 p-3 rounded-md'>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
