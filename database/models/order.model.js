import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema({
    createdAt: {
      type: Date,
      default: Date.now,
    },
    stripeId: {
      type: String,
      required: true,
      unique: true,
    },
    totalAmount: {
      type: String,
    },
    
    buyer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  })
  
  const Order = mongoose.models.Order || model('Order', OrderSchema)
  
  export default Order