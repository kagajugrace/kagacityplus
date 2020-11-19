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
      const response = await axios.get("http://localhost:3000/registartion-student");
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
      <div className="w-1/6 bg-gray-500  shadow-lg p-2">
      <div > 
    
    <img src={logo} class="h-24 md:h-12 w-32 justify-center ml-2 md:ml-12"/>
    </div>
    <div>
    <button type="button"> 
<img src={login} className="w-20" /><span>Admin-report-site</span></button>
    </div>
    {/* icons */}
    <div  className="">
    <button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaHome/></span><span className="text-sm">Home</span></button>
    <button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaAddressBook/></span><span className="text-sm">register</span></button>
    <button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaBook/></span><span className="text-sm">users</span></button>
    <button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaHome/></span><span className="text-sm">Religious Services</span></button>
    <button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaAddressBook/></span><span className="text-sm">Codes</span></button>
    <button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaBook/></span><span className="text-sm">Temperature</span></button>
    <button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaHome/></span><span className="text-sm">Reports</span></button>
    <button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaAddressBook/></span><span className="text-sm">list of member</span></button>
    <button className="flex gap-2 py-2"><span className="text-blue-500 text-xl"><FaBook/></span><span className="text-sm">edit user</span></button>
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
              className="butn btn btn-primary "
             onClick={() => Pdfreport(reportStudents)}>
              Generate daily report
            </button>
          {/* ) */}
           {/* }  */}
           <StudentsComponent Students={Students} className="text-center" />
      </div>
      </div>
    <div className="w-2/6"></div>
    </div>
    </div>
  );
};

export default Students;