import Link from 'next/link'
import React from 'react'
import { LogOutBtn } from './log-out'

export const Header = () => {
  return (
    <div className='w-full fixed z-10  flex space-x-4  justify-between items-center shadow-md p-3 top-0 bg-white'>
          <div>
            <Link href={"/home"} className='text-2xl font-bold tracking-tighter'>Ridlan AI</Link>
           </div>
             <div className='space-x-2'>
                <Link href={"/orders"} className='underline text-indigo-600 font-bold'>Orders</Link>
                <Link href={"/update"} className='underline text-indigo-600 font-bold'>Update</Link>
             </div>
             <div >
              <LogOutBtn/>
             </div>
    </div>
  )
}
