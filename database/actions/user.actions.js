'use server'

import { connectToDatabase } from "../connection"
import User from "../models/user.model"

export async function createUser(user) {
    try {
      await connectToDatabase()
  
      const newUser = await User.create(user)
      await newUser.save()
      return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
      handleError(error)
    }
  }


  export async function deleteUser(clerkId) {
    try {
      await connectToDatabase()
      const deletedUser = await User.findByIdAndDelete(userToDelete._id)
      return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
    } catch (error) {
      handleError(error)
    }
  }

export async function fetchUser(userId) {
  try {
    await connectToDatabase();
    const user = await User.find({clerkId:userId})
    return JSON.parse(JSON.stringify(user))
  } catch (error) {
    console.log(error)
  }
}