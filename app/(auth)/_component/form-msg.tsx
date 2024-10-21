import { cn } from "@/lib/utils"

import {type VariantProps, cva } from "class-variance-authority"
import {ShieldAlertIcon} from "lucide-react"
import {CheckCircle} from 'lucide-react'


const MsgProps=cva( "flex gap-x-3 items-center w-full   rounded-md   p-3",{
    variants:{
        variant:{
           success:"bg-green-100 text-black",
           error:"bg-red-500/15 text-red-500"
        },
        defaultVariants:{
            variant:"success"
        }
    }
})
export interface Message extends VariantProps<typeof MsgProps>{
            
              message:string
              
}
export const FormMsg=({variant, message}:Message)=>{

    return (
        <>
          
           <div className={cn(MsgProps({variant}))}>
          { variant=="error"?<ShieldAlertIcon className="h-5 w-5"/>:<CheckCircle className="h-5 w-5"/>}
            <p >{message}</p>
           </div>
        </>
    )
}