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
      type: mongoose.Schema.Types.ObjectId,
      required:true,
    },
  })
  
  const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema)
  
  export default Order