"use server"

import Stripe from 'stripe';
import { redirect } from 'next/navigation';
import { connectToDatabase } from '../connection';
import Order from '../models/order.model';
import { fetchUser } from './user.actions';

export const checkoutOrder = async (order) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  
    const price = Number(order.price) * 100;
  
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'inr',
              unit_amount: price,
              product_data: {
                name: "An order"
              }
            },
            quantity: 1
          },
        ],
        metadata: {
          buyerId: order.buyerId,
        },
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
        cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
      });
  
      redirect(session.url)
    } catch (error) {
      throw error;
    }
  }
  
  export const createOrder = async (order) => {
    try {
      await connectToDatabase();
      const user = await fetchUser(order.buyerId)
      
      const newOrder = await Order.create({
        ...order,
        buyer: user[0]._id,
      });
  
      return JSON.parse(JSON.stringify(newOrder));
    } catch (error) {
      handleError(error);
    }
  }