import { prisma } from "@/lib/db";
import { UpdateForm } from "../_component/update-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const UpdateDog = async ({ params }: { params: { uid: string } }) => {
  const isUserLog = await auth();
  if (!isUserLog) {
    redirect("/");
  }
  const petData = await prisma.pi_record.findUnique({
    where: {
      uid: params.uid,
    },
  });
  
  if (!petData) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl text-red-500 font-bold">Uid not found </h1>
      </div>
    );
  }

  
  return (
    <>
      <div className="flex justify-center p-4 ">
        <UpdateForm petData={petData} uid={params.uid} />
      </div>
    </>
  );
};

export default UpdateDog;
