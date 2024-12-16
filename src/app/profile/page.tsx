"use client";
import axios from "axios";
import Link from "next/link";
import React,{useState} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
import { GET } from "../api/users/logout/route";
export default function ProfilePage(){
    const router = useRouter()
    const [data,setData] = React.useState("nothing")
    const logout = async () =>{
    try {
        await axios.get("/api/users/logout")
        toast.success("Logout successful")
        router.push("/login")
    } catch (error:any) {
        console.log(error.message)
        toast.error(error.message)
    }
    }
    const getUserDetails = async () => {
        const res = await axios.get("/api/users/me")
        console.log(res.data)
        setData(res.data.data._id)
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr/>
            <p>Profile page</p>
            <h2 className="p-3 rounded bg-green-500 ">{data == 'nothing'?"Nothing":<Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <hr/>
            <button
            onClick={logout}
            className="bg-red-500 mt-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >Logout</button>
            <button
            onClick={getUserDetails}
            className="bg-green-800 mt-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >Get User Details</button>
        </div>

    )
}