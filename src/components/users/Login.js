import React,{useEffect,useState} from 'react';
import '../../css/tailwindcss.css';
// import Navbar from './Navbar';
import axios from 'axios';
import bench from '../../images/login.png'
import {useHistory} from "react-router-dom";



function Login(){
    const[username, setUsername]=useState("");
    const[password, setPassword]=useState("");
    const[loading, setLoading]=useState(false);
    const[message, setMessage]=useState("");
    let history=useHistory();


    const handleLogin=(e)=>{
        setLoading(true);
        e.preventDefault();
        const data={
            "username": username,
            "password": password
            
        }
        //lets send data to endpoint
        axios.post("http://127.0.0.1:8000/user-login/",data)
        .then((res)=>{
            console.log(res.data)
            setLoading(false)
            setMessage("Login successful")
            // history.push('/')
        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
            setMessage("Login failed")
        })
    }
    return(
        <>
        {/* <Navbar/> */}
        <div className="row bg-gray-200">
            <div className="col-md-6">
                <div className="container">
            <p className="mt-12 text-center text-3xl font-bold text-gray-700">Login To Account</p>
            <div className="p-12 px-4 flex justify-center items-center"><img className="md:w-56 " src={bench} alt=""/></div>
            </div>
            </div>
            
            <div className="col-md-6">
        <div className="bg-gray-200">
            {/* <div className="w-full w-1/5">

            </div> */}
            <div className="w-full  flex flex-wrap  mt-12 ">
                <div className=" rounded-lg">
                <div className="container ">
                <div className="text-blue-500 w-full px-4 ml-16 rounded-lg">{message}</div>
                    <form onSubmit={handleLogin} className="p-12 w-5/6 ">
                    <label><p className="text-gray-600 mb-2">Username</p></label>
                    <input type="text"  name="username" value={username} onChange={event=>setUsername(event.target.value)} placeholder=""className="w-full border py-2 px-3 rounded-lg"></input>
                    <label><p className="text-gray-600 mb-2 mt-2">Password</p></label>
                    <input type="password"  name="password" value={password} onChange={event=>setPassword(event.target.value)} placeholder=""className="w-full border py-2 px-3 rounded-lg"></input>
                    <button name="" type="submit" className="w-full bg-blue-500 rounded-lg py-3 px-4 mt-4 text-white font-bold hover:bg-blue-700">{loading?<span>please wait...</span>:<span> Login</span>}</button>
                </form>
                </div>
                <div className="px-4  ml-16">
                    <p className=""><span className="text-gray-600 font-bold">Forgot</span> <a className="text-blue-500 hover:text-blue-700" href="username-password">Username/Password?</a></p>
                </div>
                <div className="px-4  ml-8">
                    <a href="signup"><h3 className="text-blue-500 mt-8 font-bold hover:text-blue-700 "><u>Create An Account</u></h3></a>
                </div>
                
                </div>
            </div>
            {/* <div className="w-full w-1/5">

            </div> */}

        </div>
        </div>
        </div>
    
        </>
    )
}

export default Login;
