import {  NextResponse } from 'next/server';
import { Task } from '@/models/tasks';
import { connectDb } from "@/helper/db";
import { Neonderthaw } from 'next/font/google';

connectDb()
export async function POST(request) {

    const { title, content, userid, } = await request.json()

    try {
        const task = new Task({
            title, content, userid,
        })
        const createdtask = await task.save()
return NextResponse.json(createdtask,{
    status:201
})

    } catch (error) {
        return NextResponse.json({ message: 'Failde to create Task', 
            success:false,status:200
        })

    }
}


export async function GET(request) { 
    try {    
        const tasks = await Task.find()
        return NextResponse.json(tasks)
        
    } catch (error) {
return forerror('error araha hya',404,false)
        
    }

}