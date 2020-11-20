import React, { useEffect, useState } from "react";
import Pdfreport from "../dasboardadmin/Pdfreport";
import '../../../css/tailwindcss.css';
import axios from 'axios';
import StudentsComponent from '../dasboardadmin/Map';
import logo from '../../../images/City Plus.png';
import '../../../App.css';
import login from '../../../images/login.png';
import { FaHome} from 'react-icons/fa';
import{FaAddressBook} from 'react-icons/fa';
import{FaBook} from 'react-icons/fa';
import {useHistory} from "react-router-dom";
const Students = () => {
  const auth=sessionStorage.getItem("username")
  const[user,setUser]=useState("");
  const [students,setStudents] = useState(''); 
  let history=useHistory();

  function logout(){
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
    history.push("/login")
    }


  if(!auth){
    history.push("/login");
}
 
  const getAllStudents = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/student-creation/");
      setStudents(response.data.students);
    } 
    catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {
    
    getAllStudents();
  }, []);

 const reportStudents = getAllStudents();
  
  return (
    <div className="bg-gray-400">
      <div className="container flex  P-4  bg-gray-400 rounded-lg">
      <div className="one w-1/6 bg-gray-500  shadow-lg p-2 ">
      <div> 
    <img src={logo} class="h-24 md:h-12 w-32 mb-2 justify-center ml-2 md:ml-12"/>
    </div>
    <div>
    <button type="button"> 
    <a href="/upload"><img src={login} className="w-20" /></a></button> 
    </div>
    {/* icons */}
    <div  className="">
    <a href="/Dashboard-home"><button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaHome/></span><span className="text-sm text-black">Home</span></button></a>
    <a href="/registartion-student"><button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaAddressBook/></span><span className="text-sm text-black">register</span></button></a>
    <a href="/students"><button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaBook/></span><span className="text-sm text-black">Report</span></button></a>
    {/* <a href="/Dashboard-home"><button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaHome/></span><span className="text-sm text-black">Religious Services</span></button></a> */}
    <a href="/Dashboard-addteacher"><button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaAddressBook/></span><span className="text-sm text-black">Add Teacher</span></button></a>
    <a href="/temperature-page"><button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaBook/></span><span className="text-sm text-black">Temperature</span></button></a>
    {/* <a href="/students"><button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaHome/></span><span className="text-sm text-black">Reports</span></button></a>
    <a href="/Dashboard-home"><button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaAddressBook/></span><span className="text-sm text-black">list of member</span></button></a> */}
    <a onClick={logout}><button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaBook/></span><span className="text-sm text-black">Logout</span></button></a>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      </div>
  
      {/* end of nav side */}

      {/* body */}
      <div className="w-3/6">
        <h2 className="text-center">Welcome To Admin Report Site</h2>
      <div className="repot  mb-4 bg-gray-500 rounded-lg shadow-lg px-4">
        
           {/* {user.user.role === "user" ? (
            <> </>
          ) : (  */}
            <button
              className="butn btn btn-info"
            //  onClick={() => Pdfreport(reportStudents)}
            >
              <a href="/map" className="text-white text-sm">
              Generate Weekly report
              </a>
            </button>
          {/* ) */}
           {/* }  */}
           {/* <StudentsComponent Students={Students} className="text-center" /> */}
      </div>
      </div>
    <div className="w-2/6">
      <div className="py-4 bg-gray-500 shadow-lg rounded-lg">
       <h2 className="text-xl font-semibold  text-center text-blue text-bold">Latest Report</h2>
       <br/>
       <br/>
       <button className="btn bg-blue-500 p-2  text-center  rounded-lg  text-sm"><a className="text-white text-bold" href="/students">Registration report</a></button>
       <br/>
       <br/>
       <button className="btn bg-blue-500 p-2 rounded-lg text-center  text-sm"><a className="text-white text-bold" href="/temprpt">Temperature record</a></button>
       <br/>
       <br/>
       <button className="btn bg-blue-500 p-2 rounded-lg text-center  text-sm"><a className="text-white text-bold"  href="/attendancerpt">Attendance report</a></button>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
      </div>
    </div>
    <br/>
    </div>
    <br/>
    <br/>
    <br/>
    </div>
  );
};

export default Students;