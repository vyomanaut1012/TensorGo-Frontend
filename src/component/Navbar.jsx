import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar () {
    const navigate = useNavigate();
    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:4444/login/sucess", { withCredentials: true });
    
            console.log("response",response)
        } catch (error) {
          navigate("/login");
        }
    }
    useEffect(() => {
        getUser()
      }, [])
      const [data, setData] = useState(null);
      useEffect(() => {
          const fetchData = async () => {
              try {
                  const response = await axios("http://localhost:4444/userapi", { withCredentials: true })
                  setData(response.data);
              } catch (error) {
                  console.log(error);
              }
          };
          fetchData();
      }, []);
    const logout = ()=>{
        window.open("http://localhost:4444/logout","_self");
    }
    console.log("data",data);
    return(
        <div className="shadow sticky top-0">
        { data && 
        (<nav x-data="{ isOpen: false }" class=" bg-white shadow sticky top-0 ">
        <div class="container px-6 py-4 mx-auto">
            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex items-center justify-between">
                    <a href="#">
                        <h1 className=" text-xl font-semibold">TensorGo</h1>
                    </a>
    
                    <div class="flex lg:hidden">
                        <button type="button" class="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 " aria-label="toggle menu">
                            <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                    
                            <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
    
                <div class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
                    <div class="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                        <a href="/" class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 ">Send E-Mail</a>
                        <a href="/history" class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 ">Browser History</a>
                        <button class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 " onClick={logout}>Logout</button>
                        <a href="/login" class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 ">Login</a>
                    </div>
    
                    <div class="flex items-center mt-4 lg:mt-0">
                        <button class="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block  hover:text-gray-700  focus:text-gray-700  focus:outline-none" aria-label="show notifications">
                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
    
                        <button type="button" class="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                            <div class="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                <img src={data[0].image} class="object-cover w-full h-full" alt="avatar"/>
                            </div>
    
                            <h3 class="mx-2 text-gray-700 lg:hidden">Khatab wedaa</h3>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>)
     }
     </div>
    )
}