"use client";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

import React, { useEffect, useState, useTransition } from "react";
import { orderColumn } from "./order-column";
import { updateStatus } from "@/action/order";
import { toast } from "sonner";
import { CustomeDialog } from "@/components/CustomeDialog";
import { EllipsisVertical, LoaderCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
interface CellActionProps {
  order: orderColumn;
}
export const CellAction = ({ order }: CellActionProps) => {
  const [pending, startTransition] = useTransition();
 
  const [data,setData]=useState({
       trackingId:"",
       deliverStatus:order.deliveryStatus
  })
  const handleSubmit = ( ) => {
     
    try {
       
      startTransition(() => {
        updateStatus(data.deliverStatus, order.id,data.trackingId)
          .then((data) => toast.success("updated successfully"))
          .catch((err) => toast.error("something went wrong"));
      });
    } catch (err) {
      toast.error("something went wrong");
    }
  };
  
  return (
    <CustomeDialog header="Delivery Status" trigger={<EllipsisVertical />}>
      <form onSubmit={handleSubmit}>
      <div className="space-y-2">

        <Input placeholder="enter tracking id" type="text" value={data.trackingId} onChange={(e)=>setData({...data,trackingId:e.target.value})} required />
        <Select value={data.deliverStatus} disabled={pending} onValueChange={(value)=>setData({...data,deliverStatus:value})}>
          <SelectTrigger>
            <SelectValue placeholder="delivery status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Order placed">Order placed</SelectItem>
            <SelectItem value="Shipped">Shipped </SelectItem>
            <SelectItem value="Deliverd">Deliverd</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex justify-end">
          
          <Button type="submit" disabled={pending||!order.isPaid}>
        {pending&&<LoaderCircle className="w-4 h-4 animate-spin mr-2"/>}  Submit
        </Button>
        </div>
      </div>
        
      </form>
    </CustomeDialog>
  );
};
