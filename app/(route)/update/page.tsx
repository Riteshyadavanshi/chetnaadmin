"use client"

import { Input } from "@/components/ui/input"
import { Button} from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"

 
 
  
const  UpdateDog = () => {
  const [uid,setUid]=useState("")
    const router=useRouter()
    const onSearch=()=>{
       if(!uid)return
       router.push(`/update/${uid}`)
    }
     
  return (
      <div className="  flex justify-center   mt-4">
        <div className=" space-y-2 w-full shadow-md p-4">
              <h1 className="flex justify-center text-xl font-semibold text-indigo-900">Search pet</h1>
            <Input placeholder='enter uid' value={uid} onChange={(e)=>setUid(e.target.value)}/>
            <div className="w-full flex justify-end">
            <Button onClick={onSearch} className="bg-indigo-900">Search</Button>
       </div> 
       </div>
        
      </div>
  )
}

export default  UpdateDog