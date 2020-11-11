import React,{useEffect,useState} from 'react';
import '../../css/tailwindcss.css';
// import Navbar from './Navbar';
import axios from 'axios';
import bench from '../../images/pexels-ken-tomita-389818.jpg'
import {useHistory} from "react-router-dom";
import Nav from './Navbar';
import loadr from '../../images/load.gif';


function Login(){
    const[username, setUsername]=useState("");
    const[password, setPassword]=useState("");
    const[loading, setLoading]=useState(true);
    const[message, setMessage]=useState("");
    const[loader,setLoader]=useState(false);
    let history=useHistory();


    const handleLogin=(e)=>{

     
        e.preventDefault();
        const data={
            "username": username,
            "password": password
            
        }
       
        setTimeout(function(){
            
            setLoader(false);
        },3000)

        //lets send data to endpoint
        axios.post(" http://127.0.0.1:8000/user-login/",data)

        
        .then((res)=>{
            localStorage.setItem('token',res.data.token);
            localStorage.setItem('username',res.data.username);
            localStorage.setItem('first_name',res.data.first_name);
            localStorage.setItem('id',res.data.id);
            localStorage.setItem('last_name',res.data.last_name);
         

       
            setLoader(true);
            setTimeout(function(){
                history.push('/Dashboard-Home');
            },2500)
   
          console.log(res.data)
            
        })
        .catch((err)=>{
            console.log(err);
            setMessage("Login failed please check your Password");
            setLoading(false);
            setLoader(true);
        })
    }
    return(
        <>
       
       
        {/* <Navbar/> */}
        {loader?<img src={loadr} className="justify-self-center"/> :<div>
        <Nav/>
<div className="container">
    <div className="row">
        <div className="col-sm-6 hidden md:block ">
        <img src={bench}  className="mt-16 pt-8"/>   

        </div>
        <div className="col-sm-6 pt-8">
        <div className=" w-full mt-12 ">
                <div className=" rounded-lg">
                    <h3 className="text-2xl text-center mb-8 font-bold text-gray-600  ">Login</h3>
                </div>

               {loading?<div></div>:
     
    <div     className="bg-red-200 px-6 py-2  mx-2 my-4 rounded-md text-lg flex mx-auto w-5/6 xl:w-5/6 "
          >
      <svg viewBox="0 0 24 24"  className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
           >
        <path
              fill="currentColor"
              d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
              ></path>
      </svg>
      <span className="text-red-800"> {message} </span>
    </div>
}
                    <form onSubmit={handleLogin} className="w-full md:w-5/6">
                    <label><p className="text-gray-600 mb-2">Username</p></label>
                    <input type="text"  name="username" value={username} onChange={event=>setUsername(event.target.value)} placeholder="" 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"/>
                    <label><p className="text-gray-600 mb-2 mt-2">Password</p></label>
                    <input type="password"  name="password" value={password} onChange={event=>setPassword(event.target.value)} placeholder="" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"/>
                    <button name="" type="submit" className="w-full bg-blue-500 rounded-lg py-2 px-4 mt-4 text-white font-bold hover:bg-blue-700">Login</button>
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

</div>}
        </>
    )
}

export default Login;
