import React from 'react'
 interface AuthLayoutProps{
     children:React.ReactElement
 }
const  AuthLayout = ({children}:AuthLayoutProps) => {
  return (
      <div className='h-screen flex justify-center items-center'>
        {children}
      </div>
  )
}

export default  AuthLayout