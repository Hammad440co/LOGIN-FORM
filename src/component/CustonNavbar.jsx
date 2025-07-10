"use client"
import Link from "next/link";
import React from "react";
;

const CustomNavbar = () =>(
    <div className="flex  justify-between items-center bg-amber-400 py-3  px-2">


        <div>WorkManger</div>
        <div>
            <ul className="flex  items-center space-x-4">
               <li><Link href='/'>Home</Link></li>
                <li><Link href="/add-task">add task</Link></li>
                  <li><Link href="/show-task">Show task</Link></li>

            </ul>
        </div>
        <div>
            <ul className="flex  items-center space-x-4">
                <li><a href="#">SignUp</a></li>
                <li><a href="#"></a>Login</li>
            </ul>
        </div>


    </div>
)
export default CustomNavbar