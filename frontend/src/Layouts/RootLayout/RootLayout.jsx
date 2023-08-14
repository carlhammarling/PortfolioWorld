import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='siteFlex'>
        <Outlet />
    </div>
  )
}

export default RootLayout