import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
export default function History() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios("http://localhost:4444/mailapi", { withCredentials: true })
                // const result = await response.json();
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    console.log("data", data);
    return (
        <div>
            <Navbar className=" sticky top-0 "/>
            {
                data && (
                    data.map((item) => {
                        return (
                                <div class="max-w-2xl px-8 py-4 bg-white border border-gray-200  shadow-md font-sans z-10 ">
                                    <div class="flex items-center justify-between mt-4">
                                        <div class="flex items-center justify-between">
                                            <span class="text-sm font-light text-gray-600">Date</span>
                                        </div>
                                        <div class="flex items-center">
                                            <a class="font-semibold text-gray-600 cursor-pointer">To : {item.mail}</a>
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <div>
                                            <span class=" font-semibold text-gray-600  hover:underline" >Subject : </span>
                                            <span className=" font-semibold text-gray-600"> {item.subject}</span>
                                        </div>
                                        <p class="mt-2 text-gray-600"><span class=" font-semibold text-gray-600  hover:underline" >Message : </span> {item.message}</p>
                                    </div>
                                </div>
                        )
                    })
                )
            }
        </div>
    )
}