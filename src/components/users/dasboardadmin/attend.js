import React,{useState,useEffect} from 'react';
import logo from '../../../images/City Plus.png'
import login from '../../../images/login.png'
import menu from '../../../images/menu-outline.svg';
import close from '../../../images/close-outline.svg';
import '../../../css/tailwindcss.css'; 
import {Button} from 'react-bootstrap'
import {Modal}  from 'react-bootstrap'
import {useHistory} from "react-router-dom";
import axios from 'axios';

function Attend(){
  const auth=sessionStorage.getItem("username")
    const[drop,setDrop]=useState(false);
    const[dropdown,setDropmenu]=useState(0);
    const [show, setShow] = useState(false);
    let history=useHistory();
    const [temp,setTemp]=useState("")
    const code=sessionStorage.getItem("usercode")

    function logout(){
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("token");
      history.push("/login")
      }
  
  
    if(!auth){
      history.push("/login");
  }

const[msg,setMsg]=useState("");
const [loading,setLoading]=useState(false)
const [attend,setAttend]=useState("");
const [dateattend,setDateattend]=useState("");
const [classrom,setClassrom]=useState("");



const handle=(e)=>{
  // setloading(true);
  e.preventDefault();
  const data={
    "studentcode":code,
    "status":attend,
    "dateattend":dateattend,
    "classroom":classrom,
    "school": auth,
   }
 
  axios.post("http://localhost:8000/student-attendance/",data)
  .then((res)=>{
    sessionStorage.removeItem("usercode");
    setTemp("")
    setLoading(false)
    setMsg("has been submited Sucessful")
    
    console.log(res.data)
    setTimeout(function(){

      history.push('/attendance-page');
  },2000)
          
      })
  .catch((err)=>{
    console.log(err)
    setLoading(false)
    setMsg("has been failed")
      })
}


const [data2, setData2] = useState([]);useEffect( ()=>{
  // async await
 const response = axios.get('http://127.0.0.1:8000/faculitycreation/')
//  print(response);
 .then(res=>{
   setData2(res.data);
   console.log(res)
 })
 .catch((err)=>{
   console.log(err)
 })
},[]
);









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
              
                    <a className="flex items-center py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{/class-page">
                      <ion-icon className="text-2xl" name="search-outline"></ion-icon>
              
                        <span className="mx-4 font-medium">Add Class</span>
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
                </a>
               */}
                  <a className="flex items-center  py-2 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Temperature-page">
                    <ion-icon className="text-2xl" name="person-add-outline"></ion-icon>
              
                    <span className="mx-4 font-medium">Temperature</span>
                </a>
      
                <a className="flex items-center py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/attendance-page">
                  <ion-icon className="text-2xl" name="person-add-outline"></ion-icon>
            
                  <span className="mx-4 font-medium">Attendance</span>
              </a>
      
            
              
                <a className="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100"  onClick={logout}>
               
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
              </a>
              <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'allchristian' %}">
                <ion-icon className="text-2xl" name="people-outline"></ion-icon>
        
                  <span className="mx-4 font-medium">List of Member</span>
              </a> */}
        
              <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/students">
                <ion-icon className="text-2xl" name="list-outline"></ion-icon>
        
        
                  <span className="mx-4 font-medium">Report</span>
              </a>
        
              <a className="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/class-page">
                <ion-icon className="text-2xl" name="search-outline"></ion-icon>
        
                  <span className="mx-4 font-medium">Add Class</span>
              </a>
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
    <div className="w-none md:w-32 lg:w-32"></div>
    <div className="w-full md:w-full lg:w-full ">


        {/* start form section */}
        <div className="w-full max-w-xlg ">
        <label className="block text-gray-800 text-xl underline text-center font-bold  py-2" for="username">
      Input Daily Temperature
      </label>



      


















  <form onSubmit={handle} className=" shadow-sm rounded px-8 pt-6 pb-8 mb-4 bg-gray-100">


  



  <div className=" gap-2 mb-4">
  
      <div className="w-2/2 md:w-1/2 lg:w-1/2">


      {loading?<div></div>:
     
     <div     className="bg-green-200 px-6 py-2  mx-2 my-4 rounded-md text-lg flex mx-auto w-full md:w-5/6 lg:w-5/6 "
           >
       <svg viewBox="0 0 24 24"  className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
            >
         <path
               fill="currentColor"
               d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
               ></path>
       </svg>
       <span className="text-green-800"> {msg} </span>
     </div>
 }





      <label className="block text-gray-700 text-sm font-semibold mb-2" for="username">
      Attend
      </label> 
      <select onChange={event=>setAttend(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
         <option></option>
          <option value="Yego">Yego</option>
          <option value="No" >Oya</option>
   
          </select>      </div>


      <div className="w-2/2 md:w-1/2 lg:w-1/2">
      <label className="block text-gray-700 text-sm font-semibold mb-2" for="username">
      date Attend
      </label> 
      <input value={dateattend} onChange={event=>setDateattend(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="date" />
      
      
      </div>



      <div className="w-2/2 md:w-1/2 lg:w-1/2">
      <label className="block text-gray-700 text-sm font-semibold mb-2" for="username">
      classroom
      </label> 

                
      <select    onChange={event=>setClassrom(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
         
 
    
<option >Choose Combination</option>

{data2.map((item,key)=>{
            return(  
          <option key={key} value={item.faculity  + item.classes}>{item.faculity} {item.classes}</option>
          
          )
        }
        )}
       </select>
    
         

      </div>


      <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded focus:outline-none focus:shadow-outline" type="submit">
      Send
      </button>
      
    </div>
    </div>
</form>




</div>

        {/* endform section */}







    </div>
    <div className="w-none  md:w-32 lg:w-32"></div>
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
export default Attend;