"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cellAction";

export type orderColumn = {
  id: string;
  quantity: number;
  userId: string;
  amount: string;
  landmark: string;
  pinCode: string;
  city: string;
  mobileNumber: string;
  fullName  :string
  isPaid: boolean;
  deliveryStatus: string;
  createdAt: string;
  updatedAt?: string;
};

export const orderColumns: ColumnDef<orderColumn>[] = [
  {
    id: "actions",
    header: "Delivery Status",
    cell: ({ row }) => {
      return (
        <>
          <CellAction order={row.original} />
        </>
      );
    },
  },
  {
    header: "status",
    accessorKey: "deliveryStatus",
  },
  {
    header: "Quantiy",
    accessorKey: "quantity",
  },
  {
    header: "Total Amount",
    accessorKey: "amount",
  },
  
    {
      header:"Full Name",
      accessorKey:"fullName"
    }
  ,
  {
    header:"Subscription Plan",
    accessorKey:"subscriptionPlan"
  },
  {
    header: "Addressline",
    accessorKey: "landmark",
  },
  {
    header: "City",
    accessorKey: "city",
  },
  {
    header: "PinCode",
    accessorKey: "pinCode",
  },
  {
    header: "Mobile Number",
    accessorKey: "mobileNumber",
  },
  {
    header: "Payment Status",
    accessorKey: "isPaid",
  },
  {
    header: "User Id",
    accessorKey: "userId",
  },
  {
    header: "Created Date",
    accessorKey: "createdAt",
  }, 
];
