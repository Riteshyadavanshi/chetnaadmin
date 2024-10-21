import { DataTable } from '@/components/ui/data-table'
 
import { PersonColumn } from './_component/column'
import {prisma} from "@/lib/db"
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
 

const  Home = async() => {
   const isUserLog=await auth()
   if(!isUserLog){
       redirect("/")
   }
 const data=await prisma.pi_record.findMany({
    orderBy:{
      createdAt:"desc"
    }
 })
  const filterBy=["uid","mobileNo","Name","GoogleLocation"]
  return (  
     <>
      <div className='w-full flex justify-center'>
         <h1 className='text-3xl text-indigo-900 font-semibold'>Admin Dashboard</h1>
      </div>
      <div className='flex '>
          <h1 className='text-xl text-indigo-900 font-semibold'>Total Data (<span className='text-blue-700'>{data.length}</span>)</h1>
      </div>
    
     <DataTable  filterBy={filterBy} columns={PersonColumn} data={data}/>
    </>
  )
}

export default Home