
import { dishes } from '@/constants/dishes';
import DishCard from '@/components/DishCard';

const page = () => {
  
  
 return (
    <section className='min-h-screen bg-slate-950'>
     <div className='flex gap-5 p-7 flex-wrap' >
     { dishes.map((dish, i)=>(
      <DishCard key={i} id={dish.id} description={dish.description} price={dish.price} name={dish.name}/>
     )) }
     </div>
    </section>
  )
}

export default page