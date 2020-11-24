import React,{useState,useEffect} from 'react';
import '../../css/tailwindcss.css';
// import Navbar from './Navbar';
import axios from 'axios';
import undraw from '../../images/undraw.png'
import Nav from './Navbar';

// TODO:{Gisele} Login nd signup ->database, second authentication using email. //login based on pricing // tomorrow evening 
// TODO:{Frolibert} /admin -->import csv / payment integration/reporting

function Signup(){
    const[category,setcategory]=useState("");


    const[firstname,setfirstname]=useState("");
    const[schoolname,setSchoolname]=useState("");
    const[telephonenumber,setTelephonenumber]=useState("");
    const[email,setEmail]=useState("");

    const[password,setPassword]=useState("");
    const[confirmpassword,setConfirmPassword]=useState("");

    const[loading,setLoading]=useState(false);
    const[load,setLoad]=useState(false);

    const[message,setMessage]=useState("");
    const[messager,setMessager]=useState("");

    const[typef,settypef]=useState("");

   
    
    // console.log(allcat.indexOf("Primary"))
   





    const handleForm =(e)=>{
      setLoading(true);
      e.preventDefault();

        if (confirmpassword!=password){
          setMessager("please enter match password");
          setMessage("")
          
        }else{
          setLoad(true);
        const data={
            "username":schoolname,
            "email":email,
            "last_name":telephonenumber,
            "password":password,
            "first_name":firstname,
            "school":{
              "typeof":typef,
              "category":category
            }
        }
      
     
        axios.post("http://127.0.0.1:8000/account-create/",data)
        .then((res)=>{
            console.log(res.data)
            setLoading(false)
            setMessage("Account created successful!")
            setMessager("")
            setSchoolname("")
            setEmail("")
            setTelephonenumber("")
            setPassword("")
            setfirstname("")
            settypef("")
            setcategory("")
            setConfirmPassword("")
          

        }
        
        
      )
        .catch((err)=>{
         console.log(err)
         setLoading(false)
         setMessager('work')
         setMessage('not')
         setConfirmPassword("")
         setPassword("")
        }
        
        
        ) }  
    }
    return(
        <>
 
        <Nav/>

        <div className=" flex flex-wrap bg-gray-200 pt-12">
        <div  className="w-full md:w-1/6 "></div>
            <div className="w-full md:w-2/6 App-signup pt-20 ">

                <p className="mt-2 text-center text-3xl font-bold text-gray-700"><u>Welcome To Create Account</u></p>
                <div className="p-12  flex justify-center items-center">
                  <img  src={undraw} alt="" />
                  </div>

                </div>


            <div className="w-full md:w-3/6">
            <div className="flex flex-wrap ">

                <div className="w-full   rounded-lg py-4">
                

                <center><hr className="w-64 text green-600"/></center>

                <form onSubmit={handleForm} encType="multipart/form-data" className="p-4 w-full md:w-5/6">

                {loading?
     <div     className="bg-red-200 px-6 py-2  mx-2 my-4 rounded-md text-lg flex mx-auto w-5/6 xl:w-5/6 "
           >
       <svg viewBox="0 0 24 24"  className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
            >
         <path
               fill="currentColor"
               d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
               ></path>
       </svg>
       <span className="text-red-800"> {messager} </span>
     </div>:<div></div>}


     {load?
     <div     className="bg-green-200 px-6 py-2  mx-2 my-4 rounded-md text-lg flex mx-auto w-5/6 xl:w-5/6 "
           >
       <svg viewBox="0 0 24 24"  className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
            >
         <path
               fill="currentColor"
               d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
               ></path>
       </svg>
       <span className="text-green-800"> {message} </span>
     </div>:<div></div>}



                <div class="w-full mb-0 md:mb-0">
      <label class="block Lowercase tracking-wide text-gray-900 text-xm mb-0" for="grid-state">
        Choose Category
      </label>

      <div class="relative">
        <select name="firstname" value={typef} onChange={event=>settypef(event.target.value)} class="block appearance-none w-full  border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option value=""></option>
          <option value="Private">Private</option>
          <option value="Public">Public</option>

        </select>

        <label class="block Lowercase tracking-wide text-gray-900 text-xm mb-0" for="grid-state">
        Choose Category
      </label>
      <select name="firstname" value={category} onChange={event=>setcategory(event.target.value)} class="block appearance-none w-full  border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option value=""></option>
          <option>High School</option>

        </select>

      <div class="relative">
      <label class="block Lowercase tracking-wide text-gray-900 text-xm mb-0" for="grid-state">
        Choose Category
      </label>


        <select name="firstname" value={firstname} onChange={event=>setfirstname(event.target.value)} class="block appearance-none w-full  border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option value=""></option>
          <option>WDA</option>
          <option>REB</option>
          <option>University</option>

        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    </div>

                    <label>School Name</label>
                    <input type="text"name="schoolname"value={schoolname} onChange={event=>setSchoolname(event.target.value)} placeholder="Enter your School name" className="w-full rounded-lg border py-2 px-3 "/>
                    <label>Telephone number</label>
                    <input type="text"name="schoolname"value={telephonenumber} onChange={event=>setTelephonenumber(event.target.value)} placeholder="Enter your telephone number" className="w-full rounded-lg border py-2 px-3 "/>
                    <label>Email</label>
                    <input type="text"name="email"value={email} onChange={event=>setEmail(event.target.value)} placeholder="Enter your Email" className="w-full rounded-lg border py-2 px-3"/>
                    <label>Password</label>
                    <input type="password"name="password"value={password} onChange={event=>setPassword(event.target.value)} placeholder="Enter your Password" className="w-full rounded-lg border py-2 px-3"/>
                    <label>Confirm Password</label>
                    <input type="password"name="confirmpassword"value={confirmpassword} onChange={event=>setConfirmPassword(event.target.value)} placeholder="Confirm Password" className="w-full rounded-lg border py-2 px-3"/>
                    <button name="" type="submit"  className="w-full bg-blue-500 rounded-lg py-3 px-4 mt-4 text-white font-bold">
                    {loading?<span>Please wait...</span>:<span>Create Account</span>}</button>
                    <p class="inline-block align-baseline font-bold text-sm text-black-500 hover:text-blue-800 mt-4">
        You have an Account?</p><a href="#" class="whitespace-no-wrap text-blue leading-6 font-bold text-blue-500 hover:text-blue-900 focus:outline-none focus:text-blue-900 ml-6">
          Sign in</a>

                    </form>

                </div>


                </div>
                </div>

                <div  className="w-full md:w-1/6 "></div>
                </div>


        </>
    )
}
export default Signup; 