import React from 'react'
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const Body = () => {
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
    <RouterProvider router={appRouter}>
      <Outlet></Outlet>
    </RouterProvider>
  )
}

export default Body