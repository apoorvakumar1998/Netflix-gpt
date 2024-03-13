import React from 'react';
import Header from './Header';
import { useState } from 'react';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);


  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="absolute">
        <img alt="background" src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <form className='absolute w-[450px] my-24 p-20 m-4 flex justify-center flex-col gap-4 rounded-lg bg-[rgba(0,0,0,0.75)]'>
          <div className='text-white font-semibold text-3xl mb-4'>{isSignIn ? 'Sign In' : 'Sign Up'}</div>
          {
            !isSignIn && (
              <input type='text' className='p-3 rounded-lg w-full bg-zinc-600' placeholder='Name'></input>
            )
          }
          <input type='text' className='p-3 rounded-lg w-full bg-zinc-600' placeholder='Email'></input>
          <input type='password' className='p-3 rounded-lg w-full bg-zinc-600' placeholder='Password'></input>
          <button className='p-3 rounded-lg border border-black bg-red-600 w-full mt-4 text-white'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
          <div className='mt-14'>
            <div className='mr-2 text-gray-300 inline-block'>{isSignIn ? 'New to Netflix?' : 'Already have an account?'}</div>
            <div className='text-white inline-block cursor-pointer' onClick={toggleSignIn}>{isSignIn ? 'Sign up now' : 'Sign In now'}</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
