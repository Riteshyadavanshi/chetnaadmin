import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from './ui/dialog'

interface CustomeDialogProps{
     header:string,
     children:React.ReactElement,
     trigger:React.ReactElement,
}
export const CustomeDialog = ({trigger,header,children}:CustomeDialogProps) => {
  return (
       <Dialog>
            <DialogTrigger >
                 {trigger}
            </DialogTrigger>
            
          <DialogContent>
            <DialogHeader className='text-indigo-900 font-bold text-xl'>
                {header}
            </DialogHeader>
                 {
                    children
                 }
          </DialogContent>
       </Dialog>
  )
}
