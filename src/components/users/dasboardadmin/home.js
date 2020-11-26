import React,{useState} from 'react';
import logo from '../../../images/City Plus.png'
import login from '../../../images/login.png'
import menu from '../../../images/menu-outline.svg';
import close from '../../../images/close-outline.svg';
import '../../../css/tailwindcss.css'; 
import { FaUserFriends } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaChalkboardTeacher} from 'react-icons/fa';
import { FaChurch } from 'react-icons/fa';
import {  FaSchool } from 'react-icons/fa';
import {useHistory

} from "react-router-dom";



function Home(){
    const[drop,setDrop]=useState(false);
    const[dropdown,setDropmenu]=useState(0);
    const user=sessionStorage.getItem("username");
    

    let history=useHistory();

    function logout(){
      sessionStorage.removeItem("username");
      history.push("/login")
      }










      if(!user){
          history.push("/login");
      }


const handleclicked=()=>{




   if(dropdown===0){
       setDrop(true);
       setDropmenu(1);
   }
   else{
       setDrop(false);
       setDropmenu(0);
   }
} 

    return(
      
        <div>




<div className="flex shadow-lg fixed-top md:fixed-none bg-white">

    
    <div className="w-1/2"> 
    
      <img src={logo} className="h-24 md:h-12 w-32 justify-center ml-2 md:ml-12"/>      </div>



    <div className="w-1/2 block md:hidden py-3">



      <button type="button" className="float-right btn-group  " role="group" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > 

        <span className="group flex"><img src={login} className="w-12 h-12 rounded-full  "/><span className="px-1 py-2"> 
        {drop?<a className="float-right" onClick={handleclicked}><img src={close} className="w-8 " /></a>:<a className="float-right" onClick={handleclicked}><img src={menu} className="w-8" /></a>}
        
        </span></span>
        
    
      </button>



   </div>











  </div>










  {drop? <div className="modal-content mt-24  shadow-lg h-full absolute block md:hidden">

            <nav className="mt-2">
              <a className="flex items-center py-2 px-8 block  text-gray-100 border-r-4 border-gray-100" href="{% url 'dashboard'%}">
                <span className="text-white text-2xl"><ion-icon  name="home-outline"></ion-icon> </span>
        
                  <span className="mx-4 font-medium">Home</span>
              </a>
        
              <a className="flex items-center  py-3 px-8 block bg-gray-700 text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/registartion-student">
                <ion-icon className="text-2xl" name="people-outline"></ion-icon>
        
                  <span className="mx-4 font-medium">Register</span>
              </a>
              <a className="flex items-center py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Dashboard-addteacher">
                <ion-icon className="text-2xl" name="list-outline"></ion-icon>
        
        
                  <span className="mx-4 font-medium">Religion Services</span>
              </a>
              <a className="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'report'%}">
                <ion-icon className="text-2xl" name="list-outline"></ion-icon>
        
        
                  <span className="mx-4 font-medium">Report</span>
              </a>
        
              <a className="flex items-center py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'codes'%}">
                <ion-icon className="text-2xl" name="search-outline"></ion-icon>
        
                  <span className="mx-4 font-medium">Codes</span>
              </a>
              <a className="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'work'%}">
                <ion-icon className="text-2xl" name="person-outline"></ion-icon>
                <span className="mx-4 font-medium">Users</span>
            </a>

            <a className="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'allchristian' %}">
              <ion-icon className="text-2xl" name="people-outline"></ion-icon>
      
                <span className="mx-4 font-medium">List of Member</span>
            </a>

            <a className="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'booked-list/get'%}">
              <ion-icon className="text-2xl" name="person-outline"></ion-icon>
              <span className="mx-4 font-medium">Booked List</span>
          </a>
        
            <a className="flex items-center  py-2 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'adduser'%}">
              <ion-icon className="text-2xl" name="person-add-outline"></ion-icon>
        
              <span className="mx-4 font-medium">Add User</span>
          </a>

          <a className="flex items-center py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'editpro'%}">
            <ion-icon className="text-2xl" name="person-add-outline"></ion-icon>
      
            <span className="mx-4 font-medium">Edit User</span>
        </a>

      
        
          <a className="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100"  href="/logout" >
         
              <ion-icon className="text-2xl text-white" name="log-out-outline"></ion-icon>
        
            <span className="mx-4 pb-4 font-medium">Logout</span>
        </a>
          </nav>
       </div>:<div></div>}




























  <div className="grid grid-cols-5 h-full pt-12 ">
        <div className="w-full  bg-gray-800  sm:mt-0 hidden md:block h-auto">
        <div className="flex items-center justify-center ">

<a href="/upload"><img src={login} className="w-24 h-24 rounded-full mt-4 "/></a>


</div>

<nav className="mt-2 ">
    <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Dashboard-Home">
      <span className="text-white text-2xl"><ion-icon  name="home-outline"></ion-icon> </span>

        <span className="mx-4 font-medium">Home</span>
    </a>

    <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/registartion-student">
      <ion-icon className="text-2xl" name="people-outline"></ion-icon>

        <span className="mx-4 font-medium">Register</span>
    </a>
    {/* <a className="flex items-center py-2 px-8 block bg-gray-700 text-gray-100 border-r-4 border-gray-100" href="/Dashboard-addteacher">
      <ion-icon className="text-2xl" name="people-outline"></ion-icon>

        <span className="mx-4 font-medium">Add Teacher</span>
    </a>
    <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'allchristian' %}">
      <ion-icon className="text-2xl" name="people-outline"></ion-icon>

        <span className="mx-4 font-medium">List of Member</span>
    </a> */}

    <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/students">
      <ion-icon className="text-2xl" name="list-outline"></ion-icon>


        <span className="mx-4 font-medium">Report</span>
    </a>

    {/* <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'codes'%}">
      <ion-icon className="text-2xl" name="search-outline"></ion-icon>

        <span className="mx-4 font-medium">Codes</span>
    </a> */}
    <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Dashboard-addteacher">
      <ion-icon className="text-2xl" name="person-outline"></ion-icon>
      <span className="mx-4 font-medium">Add Teacher</span>
  </a>

  <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Temperature-page">

    <ion-icon className="text-2xl" name="document-text-outline"></ion-icon>
    <span className="mx-4 font-medium">Temperature</span>
</a>


  {/* <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Dashboard-updateteacher">
    <ion-icon className="text-2xl" name="person-add-outline"></ion-icon>

    <span className="mx-4 font-medium">Update Teacher</span>

</a> */}

<a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/attendance-page">
  
  <ion-icon className="text-2xl" name="create-outline"></ion-icon>
  <span className="mx-4 font-medium">Attendance</span>
</a>



<a className="flex items-center  mt-2 mb-6 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100"  onClick={logout} >

    <ion-icon className="text-2xl text-white" name="log-out-outline"></ion-icon>

  <span className="mx-4 font-medium ">Logout</span>
</a>
</nav>
        
        </div>
  
















        <div className=" col-span-6 md:col-span-4 w-full mt-16 md:mt-4 justify-center">
          <div className="w-full">
  {/* Side Body */}
<div className="flex w-full">
    <div className="p-2 w-full md:w-full lg:w-full ">
      <div className="w-full">
        <h3>Dashboard</h3>
      </div>
      <div className="flex flex-warp">
        <div className="w-full md:w-1/4 bg-blue-400 shadow-lg p-2 rounded-lg m-1 flex flex-warp">
          <div className="w-full  bg-gray-100 bg-opacity-25 pl-4  md:w-1/2">
            <div className="">
              
              <i className="text-6xl text-blue-100 content-center"><FaChalkboardTeacher className="text-red-100"/></i>
            </div>  
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col ">
              <div className=" "> <snap className="text-xl text-yellow-400   float-right mt-2">Teachers</snap><snap className="text-3xl text-yellow-400 font-bold float-left ml-1">54</snap></div>
              <div className=" "><a href="#" className=" text-blue-100 text-sm hover:no-underline float-right ml-1 flex">View All <FaEye className="ml-1"/></a></div>

            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/4 bg-blue-400 shadow-lg p-2 rounded-lg m-1 flex flex-warp">
          <div className="w-full  bg-gray-100 bg-opacity-25 pl-4  md:w-1/2">
            <div className="">
              
              <i className="text-6xl text-blue-100 content-center"><FaUserFriends className="text-red-100"/></i>
            </div>  
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col ">
              <div className=" "> <snap className="text-xl text-yellow-400   float-right mt-2">Users</snap><snap className="text-3xl text-yellow-400 font-bold float-left ml-1">54</snap></div>
              <div className=" "><a href="#" className=" text-blue-100 text-sm hover:no-underline float-right ml-1 flex">View All <FaEye className="ml-1"/></a></div>

            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 bg-blue-400 shadow-lg p-2 rounded-lg m-1 flex flex-warp">
          <div className="w-full  bg-gray-100 bg-opacity-25 pl-4  md:w-1/2">
            <div className="">
              
              <i className="text-6xl text-blue-100 content-center"><FaSchool className="text-red-100"/></i>
            </div>  
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col ">
              <div className=" "> <snap className="text-xl text-yellow-400   float-right mt-2">School</snap><snap className="text-3xl text-yellow-400 font-bold float-left ml-1">54</snap></div>
              <div className=" "><a href="#" className=" text-blue-100 text-sm hover:no-underline float-right ml-1 flex">View All <FaEye className="ml-1"/></a></div>

            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 bg-blue-400 shadow-lg p-2 rounded-lg m-1 flex flex-warp">
          <div className="w-full  bg-gray-100 bg-opacity-25 pl-4  md:w-1/2">
            <div className="">
              
              <i className="text-6xl text-blue-100 content-center"><FaChurch className="text-red-100"/></i>
            </div>  
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col ">
              <div className=" "> <snap className="text-xl text-yellow-400   float-right mt-2">Church</snap><snap className="text-3xl text-yellow-400 font-bold float-left ml-1">54</snap></div>
              <div className=" "><a href="#" className=" text-blue-100 text-sm hover:no-underline float-right ml-1 flex">View All <FaEye className="ml-1"/></a></div>

            </div>
          </div>
        </div>

      </div>
    </div>
</div>
       


{/* endbody */}
          </div >    
          {/* <div className="text-center">
             Copyright , Allright reserved - <a  className="hover:text-blue-800 underline cursor-pointer ">Ida technology Ltd</a>
          </div> */}

      </div>
      </div>  
          </div>
       
    )
}
export default Home;