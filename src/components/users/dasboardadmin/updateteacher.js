import React,{useState} from 'react';
import logo from '../../../images/City Plus.png'
import login from '../../../images/login.png'
import menu from '../../../images/menu-outline.svg';
import close from '../../../images/close-outline.svg';
import '../../../css/tailwindcss.css'; 
import {useHistory} from "react-router-dom";
function UpdateTeacher(){

  const auth=sessionStorage.getItem("username")
  const token=sessionStorage.getItem("token")
  const fname=sessionStorage.getItem("first_name")
  const lname=sessionStorage.getItem("last_name")
  let history=useHistory();
    const[drop,setDrop]=useState(false);
    const[dropdown,setDropmenu]=useState(0);


    function logout(){
      sessionStorage.removeItem("username");
      
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
              <a className="flex items-center py-2 px-8 block  text-gray-100 border-r-4 border-gray-100" href="/Dashboard-Home">
                <span className="text-white text-2xl"><ion-icon  name="home-outline"></ion-icon> </span>
        
                  <span className="mx-4 font-medium">Home</span>
              </a>
        
              <a className="flex items-center  py-3 px-8 block bg-gray-700 text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/registartion-student">
                <ion-icon className="text-2xl" name="people-outline"></ion-icon>
        
                  <span className="mx-4 font-medium">Register</span>
              </a>
              {/* <a className="flex items-center py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Dashboard-addteacher">
                <ion-icon className="text-2xl" name="list-outline"></ion-icon>
        
        
                  <span className="mx-4 font-medium">Religion Services</span>
              </a> */}
              <a className="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'report'%}">
                <ion-icon className="text-2xl" name="list-outline"></ion-icon>
        
        
                  <span className="mx-4 font-medium">Report</span>
              </a>
        
              <a className="flex items-center py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'codes'%}">
                <ion-icon className="text-2xl" name="search-outline"></ion-icon>
        
                  <span className="mx-4 font-medium">Codes</span>
              </a>
              <a className="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Dashboard-addteacher">
                <ion-icon className="text-2xl" name="person-outline"></ion-icon>
                <span className="mx-4 font-medium">Add Teacher</span>
            </a>

            {/* <a className="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'allchristian' %}">
              <ion-icon className="text-2xl" name="people-outline"></ion-icon>
      
                <span className="mx-4 font-medium">List of Member</span>
            </a>

            <a className="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'booked-list/get'%}">
              <ion-icon className="text-2xl" name="person-outline"></ion-icon>
              <span className="mx-4 font-medium">Booked List</span>
          </a> */}
        
            <a className="flex items-center  py-2 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Temperature-page">
              <ion-icon className="text-2xl" name="person-add-outline"></ion-icon>
        
              <span className="mx-4 font-medium">Temperature</span>
          </a>

          <a className="flex items-center py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Dashboard-updateteacher">
            <ion-icon className="text-2xl" name="person-add-outline"></ion-icon>
      
            <span className="mx-4 font-medium">Update Teacher</span>
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

            <img src={login} className="w-24 h-24 rounded-full mt-4 "/>
          
        
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
              </a>
         */}
              <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'report'%}">
                <ion-icon className="text-2xl" name="list-outline"></ion-icon>
        
        
                  <span className="mx-4 font-medium">Report</span>
              </a>
        
              <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'codes'%}">
                <ion-icon className="text-2xl" name="search-outline"></ion-icon>
        
                  <span className="mx-4 font-medium">Codes</span>
              </a>
              <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Dashboard-addteacher">
                <ion-icon className="text-2xl" name="person-outline"></ion-icon>
                <span className="mx-4 font-medium">Add Teacher</span>
            </a>
        
            {/* <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'booked-list/get'%}">

              <ion-icon className="text-2xl" name="document-text-outline"></ion-icon>
              <span className="mx-4 font-medium">Booked List</span>
          </a> */}


            <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Temperature-page">
              <ion-icon className="text-2xl" name="person-add-outline"></ion-icon>
        
              <span className="mx-4 font-medium">Temperature</span>

          </a>

          <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Dashboard-updateteacher">
            
            <ion-icon className="text-2xl" name="create-outline"></ion-icon>
            <span className="mx-4 font-medium">Update Teacher</span>
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
    <div className="w-none md:w-32 lg:w-32"></div>
    <div className="w-full md:w-full lg:w-full ">


        {/* start form section */}
        <div className="w-full max-w-xlg ">
        <label className="block text-gray-800 text-xl  text-center font-bold  py-2" for="username">
         Update Registed Teacher
      </label>
  <form className=" shadow-sm rounded px-8 pt-6 pb-8 mb-4 bg-gray-100">



    <div className="md:flex lg:flex  gap-2 mb-4">
        <div className="w-2/2 md:w-1/2 lg:w-1/2">
      <label className="block text-gray-700 text-sm font-semibold mb-2" for="username">
        First name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
      </div>
      <div className=" md:w-1/2 lg:w-1/2">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Last name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/>
      </div>
    
    </div>

    <div className="md:flex lg:flex  gap-2 mb-4">
        <div className="w-2/2 md:w-1/2 lg:w-1/2">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" />
      </div>
      <div className=" md:w-1/2 lg:w-1/2">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
    Telephone Number
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/>
      </div>
    
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Facility
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text"/>

    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Year
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text"/>

    </div>




    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Update
      </button>
 
    </div>
  </form>
  
  <div className="table">
  <table id="example" class="display" >
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Telephone</th>
                <th>Email</th>
                <th>Facility</th>
                <th>Year</th>
                <th>Option</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tiger</td>
                <td>Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>
                  <a href="#" className="bg-red-500 hover:bg-red-700 text-white mr-1 font-bold py-2 px-4 rounded">Delete</a>
                  <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</a>
                </td>
            </tr>
        </tbody>
    </table>



      
  </div>


</div>

        {/* endform section */}







    </div>
    <div className="w-none  md:w-32 lg:w-32"> </div>
</div>
       


{/* endbody */}
          </div >    
          <div className="text-center">
                        Copyright , Allright reserved - <a  className="hover:text-blue-800 underline cursor-pointer ">Ida technology Ltd</a>
                        </div>

      </div>
      </div>  
          </div>
       
    )
}
export default UpdateTeacher;