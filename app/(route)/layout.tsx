import React, { FC } from 'react'
import { Header } from './home/_component/header'
 interface HomeLayoutProps{
     children:React.ReactElement
 }
const  HomeLayout:FC<HomeLayoutProps> = ({children}) => {
  return (
     <div  >
        <Header/>
        <div className='p-2 mt-16 '>{children}</div>
     </div>
  )
}

export default  HomeLayout