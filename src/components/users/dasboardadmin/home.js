import React,{useState} from 'react';
import logo from '../../../images/City Plus.png'
import login from '../../../images/login.png'
import menu from '../../../images/menu-outline.svg';
import close from '../../../images/close-outline.svg';
import {useHistory} from "react-router-dom";

function HomeAdmin(){
    const[drop,setDrop]=useState(false);
    const[dropdown,setDropmenu]=useState(0);
    const user=sessionStorage.getItem("username")

    let history=useHistory();

    function logout(){
      sessionStorage.clear();
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




<div class="flex shadow-lg fixed-top md:fixed-none bg-white">

    
    <div class="w-1/2"> 
    
      <img src={logo} class="h-24 md:h-12 w-32 justify-center ml-2 md:ml-12"/>      </div>



    <div class="w-1/2 block md:hidden py-3">



    <button type="button" class="float-right btn-group  " role="group" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > 

      <span class="group flex"><a href="/upload"> <img src={login} class="w-12 h-12 rounded-full  "/></a><span className="px-1 py-2"> 
        {drop?<a className="float-right" onClick={handleclicked}><img src={close} className="w-8 " /></a>:<a className="float-right" onClick={handleclicked}><img src={menu} className="w-8" /></a>}
        
        </span></span>
        
    
      </button>



   </div>











  </div>










  {drop? <div class="modal-content mt-24  shadow-lg h-full absolute block md:hidden">

            <nav class="mt-2">
              <a class="flex items-center py-2 px-8 block bg-gray-700 text-gray-100 border-r-4 border-gray-100" href="/Dashboard-Home">
                <span class="text-white text-2xl"><ion-icon  name="home-outline"></ion-icon> </span>
        
                  <span class="mx-4 font-medium">Home</span>
              </a>
        
              <a class="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/registartion-student">
                <ion-icon class="text-2xl" name="people-outline"></ion-icon>
        
                  <span class="mx-4 font-medium">Register</span>
              </a>
              {/* <a class="flex items-center py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'addservice'%}">
                <ion-icon class="text-2xl" name="list-outline"></ion-icon>
        
        
                  <span class="mx-4 font-medium">Religion Services</span>
              </a> */}
              <a class="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'report'%}">
              </a>
              <a class="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/students">
                <ion-icon class="text-2xl" name="list-outline"></ion-icon>
        
        
                  <span class="mx-4 font-medium">Report</span>
              </a>
        
              {/* <a class="flex items-center py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'codes'%}">
                <ion-icon class="text-2xl" name="search-outline"></ion-icon>
        
                  <span class="mx-4 font-medium">Codes</span>
              </a> */}
              <a class="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Dashboard-addteacher">
                <ion-icon class="text-2xl" name="person-outline"></ion-icon>
                <span class="mx-4 font-medium">Add Teacher</span>
            </a>

            {/* <a class="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'allchristian' %}">
              <ion-icon class="text-2xl" name="people-outline"></ion-icon>
      
                <span class="mx-4 font-medium">List of Member</span>
            </a> */}

            <a class="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Temperature-page">
              <ion-icon class="text-2xl" name="person-outline"></ion-icon>
              <span class="mx-4 font-medium">Temperature</span>
          </a>
        
            {/* <a class="flex items-center  py-2 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Dashboard-updateteacher">
              <ion-icon class="text-2xl" name="person-add-outline"></ion-icon>
        
              <span class="mx-4 font-medium">Update Teacher</span>
          </a> */}

          <a class="flex items-center py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/attendance-page">
            <ion-icon class="text-2xl" name="person-add-outline"></ion-icon>
      
            <span class="mx-4 font-medium">Attendance</span>
        </a>

      
        
          <a class="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" onClick={logout} >
         
              <ion-icon class="text-2xl text-white" name="log-out-outline"></ion-icon>
        
            <span class="mx-4 pb-4 font-medium">Logout</span>
        </a>
          </nav>
       </div>:<div></div>}




























  <div class="grid grid-cols-5 h-full pt-12 ">
        <div class="w-full  bg-gray-800  sm:mt-0 hidden md:block overflow-y-scroll h-screen">
          <div class="flex items-center justify-center ">

          <a href="/upload"><img src={login} class="w-24 h-24 rounded-full mt-4 "/></a>
          
        
          </div>
        
          <nav class="mt-2 ">
              <a class="flex items-center py-2 px-8 block bg-gray-700 text-gray-100 border-r-4 border-gray-100" href="/Dashboard-Home">
              
                <span class="text-white text-2xl"><ion-icon  name="home-outline"></ion-icon> </span>
        
                  <span class="mx-4 font-medium">Home</span>
              </a>
        
              <a class="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/registartion-student">
                <ion-icon class="text-2xl" name="people-outline"></ion-icon>
        
                  <span class="mx-4 font-medium">Register</span>
              </a>
              {/* <a class="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'addservice' %}">
                <ion-icon class="text-2xl" name="people-outline"></ion-icon>
        
                  <span class="mx-4 font-medium">Religion Services</span>
              </a> */}
              {/* <a class="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'allchristian' %}">
                <ion-icon class="text-2xl" name="people-outline"></ion-icon>
        
                  <span class="mx-4 font-medium">List of Member</span>
              </a> */}
        
              <a class="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/students">
                <ion-icon class="text-2xl" name="list-outline"></ion-icon>
        
        
                  <span class="mx-4 font-medium">Report</span>
              </a>
        
              {/* <a class="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'codes'%}">
                <ion-icon class="text-2xl" name="search-outline"></ion-icon>
        
                  <span class="mx-4 font-medium">Codes</span>
              </a> */}
              <a class="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Dashboard-addteacher">
                <ion-icon class="text-2xl" name="person-outline"></ion-icon>
                <span class="mx-4 font-medium">Add Teacher</span>
            </a>
        
            <a class="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Temperature-page">

              <ion-icon class="text-2xl" name="document-text-outline"></ion-icon>
              <span class="mx-4 font-medium">Temperature</span>
          </a>


            {/* <a class="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Dashboard-updateteacher">
              <ion-icon class="text-2xl" name="person-add-outline"></ion-icon>
        
              <span class="mx-4 font-medium">Update Teacher</span>

          </a> */}

          <a class="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/attendance-page">
            
            <ion-icon class="text-2xl" name="create-outline"></ion-icon>
            <span class="mx-4 font-medium">Attendance</span>
        </a>



          <a class="flex items-center  mt-2 mb-6 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" onClick={logout} >
         
              <ion-icon class="text-2xl text-white" name="log-out-outline"></ion-icon>
        
            <span class="mx-4 font-medium ">Logout</span>
        </a>
          </nav>
        
        </div>
  















  {/* Side Body */}
        <div class=" col-span-4 w-full mt-20 justify-center">
          <div class=" mt-12">
            <div class="grid grid-cols-3 gap-1 w-full ">
              <div class="bg-blue-300 text-white w-full rounded-sm font-medium text-center font-sans
              text-xl
              shadow-lg
              ">Members : 12</div>
              <div class="bg-red-700 w-full  rounded-sm font-medium text-center    font-semibold
              text-xl
              text-white
              shadow-lg
              ">
                Measures :2
              </div>
              <div class="bg-green-400 w-full  rounded-sm font-medium text-center
              font-sans
              text-xl
              text-white
              shadow-lg
              ">
                Workers : 2
              </div>
            </div>
          </div>    
{/* endbody */}



       <center>footer</center> 
      </div>
      </div>  
          </div>
       
    )
}
export default HomeAdmin;