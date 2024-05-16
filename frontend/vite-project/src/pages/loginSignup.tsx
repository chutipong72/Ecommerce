import React, { useState } from 'react';

const loginSignup = () => {
  const [state, setState] = useState('Login');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    address: '',
    phone_number: '',
  });

  const changeHandler = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log('Login Function Executed', formData);
    let responseData: { success?: boolean; token?: string; errors?: string } =
      {};

    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData && responseData.success) {
      if (responseData.token) {
        localStorage.setItem('auth-token', responseData.token);
      }
      window.location.replace('/');
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    console.log('Sign Up Function Executed', formData);
    let responseData: { success?: boolean; token?: string; errors?: string } =
      {};

    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData && responseData.success) {
      if (responseData.token) {
        localStorage.setItem('auth-token', responseData.token);
      }
      window.location.replace('/');
    } else {
      alert(responseData.errors);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (state === 'Login') {
      login();
    } else {
      signup();
    }
  };

  return (
    <form
      className="w-full h-[100vh] bg-pink-200 pt-[80px]"
      onSubmit={handleSubmit}
    >
      <div className="w-[630px] h-[720px] bg-white m-auto py-[40px] px-[60px]">
        <h1 className="my-[20px] mx-0 text-[30px]">{state}</h1>
        <div className="flex flex-col gap-[29px] mt-[30px]">
          {state === 'Sign Up' ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              className="h-[48px] w-full pl-[20px] border border-gray-300 outline-none text-gray-500 text-[18px]"
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            className="h-[48px] w-full pl-[20px] border border-gray-300 outline-none text-gray-500 text-[18px]"
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            className="h-[48px] w-full pl-[20px] border border-gray-300 outline-none text-gray-500 text-[18px]"
            type="password"
            placeholder="Password"
          />
          {state === 'Sign Up' ? (
            <input
              name="address"
              value={formData.address}
              onChange={changeHandler}
              className="h-[48px] w-full pl-[20px] border border-gray-300 outline-none text-gray-500 text-[18px]"
              type="text"
              placeholder="Address"
            />
          ) : (
            <></>
          )}
          {state === 'Sign Up' ? (
            <input
              name="phone_number"
              value={formData.phone_number}
              onChange={changeHandler}
              className="h-[48px] w-full pl-[20px] border border-gray-300 outline-none text-gray-500 text-[18px]"
              type="text"
              placeholder="Phone Number"
            />
          ) : (
            <></>
          )}
        </div>
        <button
          type="submit"
          className="w-full h-[72px] text-white bg-red-500 mt-[30px] border-none text-[24px] font-medium cursor-pointer"
        >
          Continue
        </button>
        {state === 'Sign Up' ? (
          <p className="mt-[20px] text-gray-500 font-medium text-[18px]">
            Already have an account?{' '}
            <span
              onClick={() => {
                setState('Login');
              }}
              className="text-red-700 font-semibold"
            >
              Login Here
            </span>
          </p>
        ) : (
          <p className="mt-[20px] text-gray-500 font-medium text-[18px]">
            New member?{' '}
            <span
              onClick={() => {
                setState('Sign Up');
              }}
              className="text-red-700 font-semibold"
            >
              Register Here
            </span>
          </p>
        )}
        {state === 'Sign Up' ? (
          <div>
            <input type="checkbox" name="" id="" required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </form>
  );
};

export default loginSignup;
