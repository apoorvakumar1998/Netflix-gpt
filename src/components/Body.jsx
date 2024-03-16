import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, [])

  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <Login />
    },
    {
      path: 'browse',
      element: <Browse />
    }
  ])

  return (
    <div>
      <RouterProvider router={appRouter}>
        <Outlet></Outlet>
      </RouterProvider>
    </div>
  )
}

export default Body