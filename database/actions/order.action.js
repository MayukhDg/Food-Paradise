"use server"

import Stripe from 'stripe';
import { redirect } from 'next/navigation';
import { connectToDatabase } from '../connection';
import Order from '../models/order.model';

export const checkoutOrder = async (order) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  
    const price = Number(order.price) * 100;
  
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'usd',
              unit_amount: price,
            },
            quantity: 1
          },
        ],
        metadata: {
          buyerId: order.buyerId,
        },
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/profile`,
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
      
      const newOrder = await Order.create({
        ...order,
        buyer: order.buyerId,
      });
  
      return JSON.parse(JSON.stringify(newOrder));
    } catch (error) {
      handleError(error);
    }
  }