import mongoose from "mongoose";
import { user } from "../models/user";
export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect("mongodb+srv://Hammad:<db_password>@cluster0.oyywzci.mongodb.net/")
        console.log('db connected')
        console.log(connection)

        //    const uuser =  new user (
        //     { name:"hammad", 
        //         email:"hammad@gmail.com",
        //         password:"12345"
        //     } )
        //     await uuser.save()
        //     console.log("work is done")

    } catch (error) {
        console.log("connecting fail")
        console.log(error)
    }
}