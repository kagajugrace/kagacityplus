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
const Students = () => {
  const[user,setUser]=useState("");
  const [students,setStudents] = useState(''); 
 
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
    <div>
      <div className="container flex gap-4 P-4 shadow-lg bg-gray-400 rounded-lg border border-2">
      <div className="w-1/6 bg-gray-500  shadow-lg p-2 ">
      <div> 
    
    <img src={logo} class="h-24 md:h-12 w-32 mb-2 justify-center ml-2 md:ml-12"/>
    </div>
    <div>
    <button type="button"> 
<img src={login} className="w-20" /></button>
    </div>
    {/* icons */}
    <div  className="">
    <a href="/Dashboard-home"><button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaHome/></span><span className="text-sm text-black">Home</span></button></a>
    <a href="/registartion-student"><button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaAddressBook/></span><span className="text-sm text-black">register</span></button></a>
    <a href="/Dashboard-addteacher"><button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaBook/></span><span className="text-sm text-black">users</span></button></a>
    <a href="/Dashboard-home"><button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaHome/></span><span className="text-sm text-black">Religious Services</span></button></a>
    <a href="/Dashboard-home"><button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaAddressBook/></span><span className="text-sm text-black">Codes</span></button></a>
    <a href="/temperature-page"><button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaBook/></span><span className="text-sm text-black">Temperature</span></button></a>
    <a href="/students"><button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaHome/></span><span className="text-sm text-black">Reports</span></button></a>
    <a href="/Dashboard-home"><button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaAddressBook/></span><span className="text-sm text-black">list of member</span></button></a>
    <a href="/Dashboard-addteacher"><button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaBook/></span><span className="text-sm text-black">edit user</span></button></a>
    </div>
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
              Generate daily report
              </a>
            </button>
          {/* ) */}
           {/* }  */}
           {/* <StudentsComponent Students={Students} className="text-center" /> */}
      </div>
      </div>
    <div className="w-2/6 py-10">
      <div className="py-4 bg-gray-500 shadow-lg rounded-lg">
       <h2 className="text-xl font-semibold  text-center text-blue">Latest Report</h2>
       <br/>
       <br/>
       <button className="btn bg-blue-500 p-2  text-center rounded-lg text-white text-sm"><a href="/students">Registration report</a></button>
       <br/>
       <br/>
       <button className="btn bg-blue-500 p-2 rounded-lg text-center text-white text-sm"><a>Temperature record</a></button>
       <br/>
       <br/>
       <button className="btn bg-blue-500 p-2 rounded-lg text-center text-white text-sm"><a>Attendance report</a></button>
       <br/>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Students;