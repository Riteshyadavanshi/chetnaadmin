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
      console.log(err)
         throw err
     }
}
export const getPetData=async(uid:string)=>{
    return await prisma.pi_record.findUnique({
      where:{
         uid
      }
    })
}