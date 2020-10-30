import React,{useEffect,useState} from 'react';
import '../../css/tailwindcss.css';
// import Navbar from './Navbar';
import axios from 'axios';
import bench from '../../images/pexels-ken-tomita-389818.jpg'
import {useHistory} from "react-router-dom";
import Nav from './Navbar';


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
        <Nav/>
        {/* <Navbar/> */}

<div className="container">
    <div className="row">
        <div className="col-sm-6 hidden md:block ">
        <img src={bench}  className="mt-16"/>   

        </div>
        <div className="col-sm-6">
        <div className=" w-full mt-12 ">
                <div className=" rounded-lg">
                    <h3 className="text-2xl text-center mb-8 font-bold text-gray-600 ">Login</h3>
                </div>
                <div className="text-blue-500 w-full px-4 text-center  rounded-md">{message}</div>
                    <form onSubmit={handleLogin} className="w-full md:w-5/6 ">
                    <label><p className="text-gray-600 mb-2">Username</p></label>
                    <input type="text"  name="username" value={username} onChange={event=>setUsername(event.target.value)} placeholder="" 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"/>
                    <label><p className="text-gray-600 mb-2 mt-2">Password</p></label>
                    <input type="password"  name="password" value={password} onChange={event=>setPassword(event.target.value)} placeholder="" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"/>
                    <button name="" type="submit" className="w-full bg-blue-500 rounded-lg py-2 px-4 mt-4 text-white font-bold hover:bg-blue-700">{loading?<span>please wait...</span>:<span> Login</span>}</button>
                </form>

<div className="container">
    <div className="row">
        <div className="col-sm-6 mt-4">
  
       <span className="text-gray-600 font-semibold">Forgot</span>
       <a href="signup"  className="text-blue-500 font-semibold hover:text-blue-700 ml-2">Password?</a>


        </div>
        <div className="col-sm-6 mt-4 md:mt-0">
        <a href="signup"  className="text-blue-500 font-semibold hover:text-blue-700 ">Create An Account</a>

        </div>
    </div>
</div>








            </div>

        </div>
    </div>
</div>

    
        </>
    )
}

export default Login;
