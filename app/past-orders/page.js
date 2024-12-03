import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import { fetchUser } from '@/database/actions/user.actions';
import { getOrdersByUser } from '@/database/actions/order.action';
import OrderCard from '@/components/OrderCard';


const page = async() => {
   
  const clerkUser = await currentUser();
   const dbUser = await fetchUser(clerkUser?.id)
   const userOrders = await getOrdersByUser(dbUser[0]._id)

   if(!userOrders.length){
    return (
      <div>
        No Orders Yet
      </div>
    )
   }
   
   return (
    <div>
    {  userOrders?.map((item)=>(
      <OrderCard key={item._id} userOrder={item} />
    ))}
    </div>
  )
}

export default page