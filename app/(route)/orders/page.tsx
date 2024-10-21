 
import React from 'react'
 
import { priceFormater } from '@/lib/utils';
import { DataTable } from '@/components/ui/data-table';
import { orderColumns } from './_component/order-column';
import {format} from "date-fns"
import { type Order } from '@prisma/client';
import { getOrders } from '@/action/order';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
 
 
 
 
 
 
  const Order = async() => {
    const isUserLog=await auth()
   if(!isUserLog){
       redirect("/")
   }
     const orders=await getOrders()
     const formatedData=orders.map((order)=> {
      return {
          id:order.id,
          userId:order.userId,
          landmark:order.landmark,
          city:order.city,
          fullName:order.fullName,
          pinCode:order.pinCode,
          mobileNumber:order.mobileNumber,
          deliveryStatus:order.deliveryStatus,
          amount:priceFormater.format(order.amount),
          quantity:order.quantity,
          isPaid:order.isPaid,
          createdAt:format(order.createdAt,"MMMM dd ,yyyy")
      }
  })
  const filter=["fullName","landmark","pinCode","isPaid","amount","quantity","mobileNumber","deliveryStatus"]
  return (
     <div>
       <div className=' flex justify-center'>
        <h1 className='text-3xl '>Orders<span className='text-indigo-900 font-extrabold'>({orders.length})</span></h1>
       </div>
       <div className='w-full'>
         
       <DataTable  filterBy={filter}  columns={orderColumns} data={formatedData}/>
     </div>
     </div>
  )
}
export default Order