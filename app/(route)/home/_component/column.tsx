import { ColumnDef } from "@tanstack/react-table";

type PersonColumn = {
  Name: string | null,
  Age: number | null,
  Gender: string | null,
  GoogleLocation: string | null,
  cityname: string | null,
  Address: string | null,
  disabilityType: string | null,
  Pincode: number | null,
  Mobileno: number | null,
  Addharnumber: number | null,
  nearestPolice: string | null,
  FamilyName: string | null,
  Relation: string | null,
  Emergencynum: number | null,
  Familyaddress: string | null,
  Emailid: string | null,
  Bloodgroup: string | null,
  Diabetic: string | null,
  Medicineallergic: string | null,
  Medicalhistory: string | null,
  isUpdated: boolean | null,
  userId: string | null,
  createdAt: Date | null
};

 

export const PersonColumn: ColumnDef<PersonColumn>[] = [
  {
    header: "Name",
    accessorKey: "Name",
  },
  {
    header: "Age",
    accessorKey: "Age",
  },
  {
    header: "Gender",
    accessorKey: "Gender",
  },
  {
    header: "Google Location",
    accessorKey: "GoogleLocation",
  },
  {
    header: "City Name",
    accessorKey: "cityname",
  },
  {
    header: "Address",
    accessorKey: "Address",
  },
  {
    header: "Disability Type",
    accessorKey: "disabilityType",
  },
  {
    header: "Pincode",
    accessorKey: "Pincode",
  },
  {
    header: "Mobile Number",
    accessorKey: "Mobileno",
  },
  {
    header: "Aadhar Number",
    accessorKey: "Addharnumber",
  },
  {
    header: "Nearest Police Station",
    accessorKey: "nearestPolice",
  },
  {
    header: "Family Name",
    accessorKey: "FamilyName",
  },
  {
    header: "Relation",
    accessorKey: "Relation",
  },
  {
    header: "Emergency Number",
    accessorKey: "Emergencynum",
  },
  {
    header: "Family Address",
    accessorKey: "Familyaddress",
  },
  {
    header: "Email ID",
    accessorKey: "Emailid",
  },
  {
    header: "Blood Group",
    accessorKey: "Bloodgroup",
  },
  {
    header: "Diabetic",
    accessorKey: "Diabetic",
  },
  {
    header: "Medicine Allergic",
    accessorKey: "Medicineallergic",
  },
  {
    header: "Medical History",
    accessorKey: "Medicalhistory",
  },
  {
    header: "Is Updated",
    accessorKey: "isUpdated",
  },
  {
    header: "User ID",
    accessorKey: "userId",
  },
  {
    header: "Created At",
    accessorKey: "createdAt",
  },
];

