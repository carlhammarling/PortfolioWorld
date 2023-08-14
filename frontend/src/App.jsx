import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout/RootLayout'
import Home from './Pages/Home/Home'

const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App