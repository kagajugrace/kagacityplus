import React,{useState,useEffect} from 'react';
import logo from '../../../images/City Plus.png'
import login from '../../../images/login.png'
import menu from '../../../images/menu-outline.svg';
import close from '../../../images/close-outline.svg';
import '../../../css/tailwindcss.css';
import axios from 'axios'; 
import {useHistory} from "react-router-dom";

function AddTeacher(){
  const auth=sessionStorage.getItem("username")
  const token=sessionStorage.getItem("token")
  const fname=sessionStorage.getItem("first_name")
  const lname=sessionStorage.getItem("last_name")
  let history=useHistory();

  const[drop,setDrop]=useState(false);
  const[dropdown,setDropmenu]=useState(0);

  const[loading,setLoading]=useState(false);
  const[message,setMessage]=useState("");
  const[firstname,setFirstname]=useState("");
  const[lastname,setLastname]=useState("");
  const[email,setEmail]=useState("");
  const[telephone,setTelephone]=useState("");
  const[faculity,setFaculity]=useState("");
  const[year,setYear]=useState("");


  function logout(){
    sessionStorage.removeItem("username");
    
    history.push("/login")
    }


  if(!auth){
    history.push("/login");
}


  const handleForm =(e)=>{
    setLoading(true);
    e.preventDefault();
    const data={
      "username":email,
      "first_name" : firstname,
      "last_name": lastname,
      "email": email,
      "password":"kagaju",
      

      "Teach":{
        "faculity": faculity,
        "classteach": year,
        "companyid":token,
        "companyname":auth,
        "phone": telephone,
    }
    }

  axios.post("http://127.0.0.1:8000/Teachaccount-creation/",data)
  .then((res)=>{
    console.log(res.data)
    setLoading(false)
    setMessage("Account created successful!")
          
      })
  .catch((err)=>{
    console.log(err)
    setLoading(false)
    setMessage("Account created failed!")
      }) 
  
  }
 

  

// hertier
const tok={"schoolname":token}
const [data2, setData2] = useState([]);
useEffect( ()=>{
  // async await
 const response = axios.post('http://127.0.0.1:8000/profilestudent/',tok)
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
//hert




  


  const [data, setData] = useState([]);useEffect( ()=>{
    // async await
   const response = axios.get('http://127.0.0.1:8000/Teachaccount-creation/')
  //  print(response);
   .then(res=>{
     setData(res.data);
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

        <span className="group flex">
          
        <a href="/upload">
{data2.map((item,key)=>{
            return(
                     
  
  <img src={"http://localhost:8000"+item.image} class="w-12 h-12  rounded-full"/>

)
    }
    )}
  </a>
          
          <span className="px-1 py-2"> 
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
            </a>

            <a className="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="{% url 'booked-list/get'%}">
              <ion-icon className="text-2xl" name="person-outline"></ion-icon>
              <span className="mx-4 font-medium">Booked List</span>
          </a> */}
        
            

          <a className="flex items-center py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/Temperature-page">
            <ion-icon className="text-2xl" name="person-add-outline"></ion-icon>
      
            <span className="mx-4 font-medium">Temperature</span>
        </a>

        <a className="flex items-center  py-2 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/attendance-page">
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

          <a href="/upload">
{data2.map((item,key)=>{
            return(
                     
  
  <img src={"http://localhost:8000"+item.image} class="w-24 h-24 rounded-full mt-4"/>

)
    }
    )}
  </a>
          
        
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
    <div className="w-none md:w-32 lg:w-32"></div>
    <div className="w-full md:w-full lg:w-full ">


        {/* start form section */}
        <div className="w-full max-w-xlg ">
        <label className="block text-gray-800 text-xl  text-center font-bold  py-2" for="username">
         Register New Teacher
      </label>
      <div className="text-blue-500 w-full px-4 text-center  rounded-md">{message}</div>
  <form onSubmit={handleForm} className=" shadow-sm rounded px-8 pt-6 pb-8 mb-4 bg-gray-100">



    <div className="md:flex lg:flex  gap-2 mb-4">
        <div className="w-2/2 md:w-1/2 lg:w-1/2">
      <label className="block text-gray-700 text-sm font-semibold mb-2" for="username">
        First name
      </label>
      <input value={firstname} onChange={event=>setFirstname(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
      </div>
      <div className=" md:w-1/2 lg:w-1/2">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Last name
      </label>
      <input value={lastname} onChange={event=>setLastname(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/>
      </div>
    
    </div>

    <div className="md:flex lg:flex  gap-2 mb-4">
        <div className="w-2/2 md:w-1/2 lg:w-1/2">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input value={email} onChange={event=>setEmail(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" />
      </div>
      <div className=" md:w-1/2 lg:w-1/2">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
    Telephone Number
      </label>
      <input value={telephone} onChange={event=>setTelephone(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/>
      </div>
    
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Faculity
      </label>
      <input value={faculity} onChange={event=>setFaculity(event.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text"/>

    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Year
      </label>
      <input value={year} onChange={event=>setYear(event.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text"/>

    </div>




    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
      {loading?<span>Please wait...</span>:<span>Submit</span>}
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
                <th>Faculity</th>
                <th>Year</th>
                <th>Option</th>
            </tr>
        </thead>
        {/* <tbody> */}
     
                <tbody>
                {data.map((item,key)=>{
            return(
                    <tr key={key}>
           
                <td>{item.user.first_name}</td>
                <td>{item.user.last_name}</td>
                <td>{item.phone}</td>
                <td>{item.user.email}</td>
                <td>{item.faculity}</td>
                <td>{item.classteach}</td>
                <td>
                  <a href="#" className="bg-red-500 hover:bg-red-700 text-white mr-1 font-bold py-2 px-4 rounded">Delete</a>
                  <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</a>
                </td>
            </tr>
            )
      }
      )}
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
export default AddTeacher;