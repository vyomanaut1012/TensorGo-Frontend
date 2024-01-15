import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar";
export default function MailBox() {
    const [userdata, setUserdata] = useState({});
    const navigate = useNavigate();
    console.log("userdata", userdata);

    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:4444/login/sucess", { withCredentials: true });
            setUserdata(response.data.user);
        } catch (error) {
            console.log("error", error);
            navigate("/login");
        }
    }
    useEffect(() => {
        getUser()
    }, [])

    const [mail, setMail] = useState(null);
    const [message, setMessage] = useState(null);
    const [subject, setSubject] = useState(null);
    

    const sendMailHandler = async () =>{
        await axios.post("http://localhost:4444/mail", {
             mail : mail,
             subject : subject,
             message : message
        },{
            withCredentials: true,
        });
        navigate("/");
    }
    return (
        
        <div>
            <Navbar/>
            <div className="w-full px-8 py-10 overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50 mx-auto ">
                <h1 className="text-lg font-medium text-gray-700 text-center">Send Your Mail</h1>

                <form className="mt-6">

                    <div className="flex-1">
                        <label className="block mb-2 text-sm text-gray-600 ">Email address</label>
                        <input type="email" placeholder="Enter your mail-id" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => { setMail(e.target.value) }} />
                    </div>
                    <div className="flex-1  mt-6">
                        <label className="block mb-2 text-sm text-gray-600 ">Subject</label>
                        <input type="text" placeholder="Enter your subject" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => { setSubject(e.target.value) }} />
                    </div>

                    <div className="w-full mt-6">
                        <label className="block mb-2 text-sm text-gray-600">Message</label>
                        <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"
                            onChange={(e) => { setMessage(e.target.value) }}></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                            onClick={sendMailHandler}
                    >
                        send your mail
                    </button>
                </form>
            </div>
        </div>
    )
}