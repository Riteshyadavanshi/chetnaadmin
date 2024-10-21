import {prisma} from "@/lib/db"
import { NextResponse } from "next/server"

export const GET=async()=>{
     try{const order=await prisma.order.findMany({
         orderBy:{
            createdAt:"desc"
         }
     })
     return NextResponse.json(order)
    }catch(err){
        throw new Error("dsf")
    }
}