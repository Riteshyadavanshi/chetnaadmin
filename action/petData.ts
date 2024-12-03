"use server"
import {prisma} from "@/lib/db"
import { updateSchema } from "@/lib/schema/update-schema"
import * as z from "zod" 

export const updateData=async(data:z.infer<typeof updateSchema>,uid:string)=>{
     try{
          const validateSchema=updateSchema.parse(data)
          if(!validateSchema){
            throw new Error("invalid data")
          }
          await prisma.pi_record.update({
             where:{
                uid
             },
             data
          })
     }catch(err){
     
         throw new Error("something went wrong")
     }
}
export const getPersonData=async(uid:string)=>{
    return await prisma.pi_record.findUnique({
      where:{
         uid
      }
    })
}