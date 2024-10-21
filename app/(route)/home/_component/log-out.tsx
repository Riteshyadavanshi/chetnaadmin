"use client"

import { logOut } from '@/action/auth'
import { signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import React from 'react'

export const  LogOutBtn = () => {
  return (
     <>
      <Button onClick={async()=> await logOut()} variant={"outline"}><LogOut/></Button>
      
     </>
  )
}
