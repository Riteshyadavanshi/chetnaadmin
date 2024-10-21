import * as z from "zod";

 


 
export const updateSchema = z.object({
  Name: z.string().min(1, {
    message: "Name is  required",
  }),
  Age: z.coerce.number().int().positive(),
  Gender: z.string().min(1, {
    message: "Gender is  required",
  }),
  GoogleLocation: z.string(),
  cityname: z.string(),
  Address: z.string(),
  disabilityType: z.string().optional(),
  Pincode: z.coerce.number().positive(),
  Mobileno: z.coerce.number().positive(),
  Addharnumber: z.coerce.number().positive(),
  nearestPolice: z.string(),

  FamilyName: z.string().min(1, {
    message: "Familyname is  required",
  }),
  
  Relation: z.string().min(1, {
    message: "Relation is  required",
  }),
  Emergencynum: z.coerce.number().int().positive(),
  Familyaddress: z.string().min(1, {
    message: "family Address is  required",
  }),
  Emailid: z
    .string()
    .min(1, {
      message: "email id is  required",
    })
    .email(),
    Bloodgroup: z.string().min(1, {
    message: "Bloodgroup is  required",
  }),
  Diabetic: z.string(),
  Medicineallergic: z.string(),
  Medicalhistory: z.string(),
   
});