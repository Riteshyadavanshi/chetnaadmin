"use server"

import {prisma} from "@/lib/db"
import { revalidatePath } from "next/cache"
import * as nodemailer from "nodemailer"
import { MailOptions } from "nodemailer/lib/json-transport"
 

export const updateStatus=async(status:string,id:string,trackingId:string)=>{
    try{
      
    const  {user,...order}= await prisma.order.update({
        where:{
          id
        },data:{
           deliveryStatus:status,
            isPaid:true
        },
        include:{
            user:true
        }
     })
     const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
     const option:MailOptions={
          from:process.env.EMAIL,
          to:user.email,
          subject:"Delivery Status",
           html:`<!DOCTYPE html>
           <html lang="en">
           <head>
               <meta charset="UTF-8">
               <meta name="viewport" content="width=device-width, initial-scale=1.0">
               <title>Delivery Status</title>
               <style>
                   body {
                       font-family: Arial, sans-serif;
                       background-color: #f0f8ff; /* AliceBlue */
                       color: #333333;
                       margin: 0;
                       padding: 0;
                   }
                   .container {
                       width: 100%;
                       max-width: 600px;
                       margin: 0 auto;
                       background-color: #ffffff;
                       border-radius: 10px;
                       box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                       overflow: hidden;
                   }
                   .header {
                       background-color: #0073e6; /* Blue */
                       color: #ffffff;
                       padding: 20px;
                       text-align: center;
                   }
                   .content {
                       padding: 20px;
                   }
                   .content h1 {
                       color: #0073e6; /* Blue */
                   }
                   .content p {
                       line-height: 1.6;
                   }
                   .footer {
                       background-color: #f0f8ff; /* AliceBlue */
                       color: #333333;
                       padding: 10px;
                       text-align: center;
                   }
                   .button {
                       display: inline-block;
                       padding: 10px 20px;
                       margin-top: 20px;
                       font-size: 16px;
                       color:  #ffffff;
                       background-color: #0073e6; /* Blue */
                       border-radius: 5px;
                       text-decoration: none;
                   }
                   .button:hover {
                       background-color: #005bb5; /* Darker Blue */
                   }
               </style>
           </head>
           <body>
               <div class="container">
                   <div class="header">
                       <h1>ProjectChetna</h1>
                   </div>
                   <div class="content">
                       <h1>Delivery Status Update</h1>
                       <p>Dear  ${order.fullName},</p>
                       <p>We are pleased to inform you that your order has been ${status} 😊 .</p>
                       
                       <p><strong> Tracking Id:</strong>  ${trackingId}</p>
                       <p>Tracking url :<a href="https://search.app/YdiHRdFnnDoQ5JPi8">https://search.app/YdiHRdFnnDoQ5JPi8</a>
                       <p>Thank you for shopping with  ProjectChetna. If you have any questions or need further assistance, please feel free to contact us.</p>
                       <a href="https://projectchetna.in/order/${id}" class="button">track your order</a>
                   </div>
                   <div class="footer">
                       <p>&copy; 2024 projectchetna.in. All rights reserved.</p>
                   </div>
               </div>
           </body>
           </html>
           `
      
     }
     await transport.sendMail(option)
     revalidatePath("/orders")
    }catch(err){
        throw err
    }
}


export const getOrders=async()=>{
    revalidatePath("/orders")
    return await prisma.order.findMany({
        where:{
              isPaid:true
        },
    orderBy:{
        createdAt:"desc"
    }
})
}
 