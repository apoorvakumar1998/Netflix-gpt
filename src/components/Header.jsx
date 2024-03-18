/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { LOGO_URL, USER_LOGO } from '../utils/constants';
import { toggleGptSearch } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate('/browse');
      } else {
        navigate('/');
        dispatch(removeUser());
      }
      return () => unsubscribe();
    });
  }, [])


  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      navigate('/error');
    });
  }
  return (
    <div className='absolute w-screen bg-gradient-to-b from-black px-4 py-2 z-10 flex justify-between'>
      <img className='w-40' alt="logo" src={LOGO_URL} />
      {
        userData && (
          <div className='flex gap-4 items-center'>
            <button
              onClick={handleGptSearchClick}
              className="bg-violet-600 hover:bg-violet-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50"
            >{!showGptSearch ? 'GPT Search' : 'Browse'}</button>
            <img alt="user logo" className='w-12 h-12' src={USER_LOGO} />
            <button
              onClick={handleSignOut}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
            >Sign Out</button>
          </div>
        )
      }
    </div>
  )
}

export default Header;