import React,{useState} from 'react';
import logo from '../../../images/City Plus.png'
import login from '../../../images/login.png'
import menu from '../../../images/menu-outline.svg';
import close from '../../../images/close-outline.svg';
import '../../../css/tailwindcss.css'; 
import {useHistory} from "react-router-dom";
function Upload(){
  const auth=sessionStorage.getItem("username")
    const[drop,setDrop]=useState(false);
    const[dropdown,setDropmenu]=useState(0);
    let history=useHistory();

    function logout(){
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("token");
      history.push("/login")
      }
  
  
    if(!auth){
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
      
       <>




<div className="flex shadow-lg fixed-top md:fixed-none bg-white">

    
    <div className="w-1/2"> 
    
      <img src={logo} className="h-24 md:h-12 w-32 justify-center ml-2 md:ml-12"/>      </div>



    <div className="w-1/2 block md:hidden py-3">



    <button type="button" className="float-right btn-group  " role="group" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > 

        <span className="group flex"><a href="/upload"><img src={login} className="w-12 h-12 rounded-full  "/></a><span className="px-1 py-2"> 
        {drop?<a className="float-right" onClick={handleclicked}><img src={close} className="w-8 " /></a>:<a className="float-right" onClick={handleclicked}><img src={menu} className="w-8" /></a>}
        
        </span></span>
        
    
      </button>



   </div>











  </div>










  {drop? <div className="modal-content mt-24  shadow-lg h-full absolute block md:hidden">

            <nav className="mt-2">
              <a className="flex items-center py-2 px-8 block bg-gray-700 text-gray-100 border-r-4 border-gray-100" href="/Dashboard-Home">
                <span className="text-white text-2xl"><ion-icon  name="home-outline"></ion-icon> </span>
        
                  <span className="mx-4 font-medium">Home</span>
              </a>
        
              <a className="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/registartion-student">
                <ion-icon className="text-2xl" name="people-outline"></ion-icon>
        
                  <span className="mx-4 font-medium">Register</span>
              </a>
              {/* <a className="flex items-center py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'addservice'%}">
                <ion-icon className="text-2xl" name="list-outline"></ion-icon>
        
        
                  <span className="mx-4 font-medium">Religion Services</span>
              </a> */}
              <a className="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/students">
                <ion-icon className="text-2xl" name="list-outline"></ion-icon>
        
        
                  <span className="mx-4 font-medium">Report</span>
              </a>
        
              {/* <a className="flex items-center py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'codes'%}">
                <ion-icon className="text-2xl" name="search-outline"></ion-icon>
        
                  <span className="mx-4 font-medium">Codes</span>
              </a> */}
              <a className="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Dashboard-addteacher">
                <ion-icon className="text-2xl" name="person-outline"></ion-icon>
                <span className="mx-4 font-medium">Add Teacher</span>
            </a>

            {/* <a className="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'allchristian' %}">
              <ion-icon className="text-2xl" name="people-outline"></ion-icon>
      
                <span className="mx-4 font-medium">List of Member</span>
            </a> */}

            {/* <a className="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'booked-list/get'%}">
              <ion-icon className="text-2xl" name="person-outline"></ion-icon>
              <span className="mx-4 font-medium">Booked List</span>
          </a> */}
        
            <a className="flex items-center  py-2 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Temperature-page">
              <ion-icon className="text-2xl" name="person-add-outline"></ion-icon>
        
              <span className="mx-4 font-medium">Temperature</span>
          </a>

          <a className="flex items-center py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/attendance-page">
            <ion-icon className="text-2xl" name="person-add-outline"></ion-icon>
      
            <span className="mx-4 font-medium">Attendance</span>
        </a>

      
        
          <a className="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100"  onClick={logout} >
         
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
              <a className="flex items-center py-2 px-8 block bg-gray-700 text-gray-100 border-r-4 border-gray-100" href="/Dashboard-Home">
                <span className="text-white text-2xl"><ion-icon  name="home-outline"></ion-icon> </span>
        
                  <span className="mx-4 font-medium">Home</span>
              </a>
        
              <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/registartion-student">
                <ion-icon className="text-2xl" name="people-outline"></ion-icon>
        
                  <span className="mx-4 font-medium">Register</span>
              </a>
              {/* <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'addservice' %}">
                <ion-icon className="text-2xl" name="people-outline"></ion-icon>
        
                  <span className="mx-4 font-medium">Religion Services</span>
              </a> */}
              {/* <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'allchristian' %}">
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


            {/* <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'adduser'%}">
              <ion-icon className="text-2xl" name="person-add-outline"></ion-icon>
        
              <span className="mx-4 font-medium">Add User</span>

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
  



          </div>
          </>
       
    )
}
export default Upload;