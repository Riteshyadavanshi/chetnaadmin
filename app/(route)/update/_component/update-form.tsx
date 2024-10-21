"use client"




import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { pi_record } from '@prisma/client';
 
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

 
 
 
 

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { updateSchema } from "@/lib/schema/update-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"
import { useTransition } from "react";
import { updateData } from "@/action/petData";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
interface UpdateFormProps{
     petData:pi_record|null,
     uid:string
}
export const  UpdateForm = ({petData,uid}:UpdateFormProps) => {
    const defaultValues=petData||{}
    const [pending,startTransition]=useTransition()
    const form=useForm<z.infer<typeof updateSchema>>({
         resolver:zodResolver(updateSchema),
         defaultValues
    })
    const handleForm=(data:z.infer<typeof updateSchema>)=>{
      try{
        console.log(data)
        startTransition(()=>{
             updateData(data,uid)
                             .then(data=>toast.success('updated successfully'))
                             .catch(data=>toast.success('something went wrong'))
        })
        
          
    }catch(err){
            toast.error("something went wrong")
    }
  }
 
  return (
    <Form {...form}>
    <form
      onSubmit={form.handleSubmit(handleForm)}
      className="min-w-[350px] lg:min-w-[600px]"
    >
      <div className="w-full shadow-md p-2 space-y-2">
        <div className="flex justify-center">
          <h1 className="text-indigo-900 text-3xl font-bold">
            Pet Details
          </h1>
        </div>
        <div>
      {/* <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                
                 <ImageUpload setUrl={field.onChange}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
      </div>
      <div className="grid lg:grid-cols-2 w-full gap-2 ">
              <FormField 
                control={form.control}
                name="Name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Name *"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter You Age</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Age *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="others">Others</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="GoogleLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter Google Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Google Location *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Address *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Pincode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter Your Pincode</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Pincode *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cityname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name of City *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Mobileno"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter Your Mobile Number</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Mobile Number *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Addharnumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter You Adhaar Number</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Adhaar Card Number *"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nearestPolice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nearest Police Station</FormLabel>
                    <FormControl>
                      <Input
                        
                        placeholder="Your Nearest Police Station *"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <FormField
                control={form.control}
                name="vaccinationDate"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="vaccination date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
            </div>

            <div className="flex justify-center">
              <h1 className="text-indigo-900 text-3xl   font-bold">
                Family Information
              </h1>
            </div>
            <div className="grid lg:grid-cols-2 w-full gap-2 ">
              <FormField
                control={form.control}
                name="FamilyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Family person name </FormLabel>
                    <FormControl>
                      <Input placeholder="Name of the Family Person *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Relation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Relation with Person</FormLabel>

                    <FormControl>
                      <Input placeholder="Relation with Family Person *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Emergencynum"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Emergency Number </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Emergency number *"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Familyaddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Family Address </FormLabel>
                    <FormControl>
                      <Input placeholder="Family Address *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Emailid"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address </FormLabel>
                    <FormControl>
                      <Input placeholder="Email Id *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-center">
              <h1 className="text-indigo-900 text-3xl   font-bold">
                Medical Information
              </h1>
            </div>
            <div className="grid lg:grid-cols-2 w-full gap-2 ">
              <FormField
                control={form.control}
                name="Medicineallergic"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Medicine Allergic" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="yes">yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Diabetic"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Diabetic" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="yes">yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Bloodgroup"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Bloodgroup" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Medicalhistory"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="medical History"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="disabilityType"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="disability type"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               
               
            </div>

        
          <Button
            
            disabled={pending}
            className="flex justify-center items-center bg-indigo-900  w-full  "
            >
              {pending&& <LoaderCircle className="w-4 h-4 animate-spin mr-1"/>}update 
          </Button>
    
      </div>
    </form>
  </Form>
  )
}
