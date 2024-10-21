"use client"
import { Loader2 } from 'lucide-react'
import { Button } from './ui/button'
 
import { useFormStatus } from 'react-dom'

interface SubmitBtnProps{ 
    label:string
    
}
export const  ActionSubmitBtn:React.FC<SubmitBtnProps> = ({label  }) => {
  const {pending}=useFormStatus()
  return (
      <Button type='submit' disabled={pending} className='w-full '>
           {pending&&<Loader2 className='h-4 w-4 animate-spin mr-2'/>}{label}
      </Button>
  )
}
export const  SubmitBtn:React.FC<SubmitBtnProps&{pending:boolean}> = ({label ,pending }) => {
  
  return (
      <Button type='submit' disabled={pending} className='w-full '>
           {pending&&<Loader2 className='h-4 w-4 mr-2 animate-spin'/>}{label} 
      </Button>
  )
}
