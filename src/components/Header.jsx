import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { LOGO_URL, USER_LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);

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
            <img alt="user logo" className='w-12 h-12' src={USER_LOGO} />
            <div className='text-white font-bold cursor-pointer' onClick={handleSignOut}>signout</div>
          </div>
        )
      }
    </div>
  )
}

export default Header;