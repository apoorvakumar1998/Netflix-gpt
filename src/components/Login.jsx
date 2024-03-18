import React, { useRef } from 'react';
import Header from './Header';
import { useState } from 'react';
import validateLoginForm from '../utils/validateLoginForm';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const submitForm = (event) => {
    const msg = validateLoginForm(email.current.value, password.current.value)
    setErrorMsg(msg);
    if (msg) {
      event.preventDefault();
      return;
    };
    if (!isSignIn) {
      //Sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name.current.value
          }).then(() => {
            const { displayName } = auth.currentUser;
            dispatch(addUser({ displayName, ...auth.currentUser }));
          }).catch((error) => {
            setErrorMsg(`${error.code} ${error.message}`);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(`${errorCode} ${errorMessage}`);
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(`${errorCode} ${errorMessage}`);
        });
    }

  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="absolute">
        <img alt="background" src={BG_URL} />
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <form onSubmit={(e) => e.preventDefault()} className='absolute w-[450px] my-24 p-20 m-4 flex justify-center flex-col gap-4 rounded-lg bg-[rgba(0,0,0,0.75)]'>
          <div className='text-white font-semibold text-3xl mb-4'>{isSignIn ? 'Sign In' : 'Sign Up'}</div>
          {
            !isSignIn && (
              <input ref={name} type='text' className='p-3 rounded-lg w-full bg-zinc-600' placeholder='Name'></input>
            )
          }
          <input ref={email} type='text' className='p-3 rounded-lg w-full bg-zinc-600' placeholder='Email'></input>
          <input ref={password} type='password' className='p-3 rounded-lg w-full bg-zinc-600' placeholder='Password'></input>
          <p className='text-red-500 font-bold text-lg'>{errorMsg}</p>
          <button onClick={submitForm} className='p-3 rounded-lg border border-black bg-red-600 w-full mt-4 text-white'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
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
