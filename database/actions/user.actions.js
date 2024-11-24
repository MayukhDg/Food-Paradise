'use server'

import { connectToDatabase } from "../connection"
import User from "../models/user.model"

export async function createUser(user) {
    try {
      await connectToDatabase()
  
      const newUser = await User.create(user)
      return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
      handleError(error)
    }
  }