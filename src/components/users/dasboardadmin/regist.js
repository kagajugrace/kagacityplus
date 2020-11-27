import React,{useState,useEffect} from 'react';
import logo from '../../../images/City Plus.png'
import login from '../../../images/login.png'
import menu from '../../../images/menu-outline.svg';
import close from '../../../images/close-outline.svg';
import '../../../css/tailwindcss.css'; 
import axios from 'axios';
import {useHistory} from "react-router-dom";

function HomeAdmin(){

  const auth=sessionStorage.getItem("username")
  const token=sessionStorage.getItem("token")
  const fname=sessionStorage.getItem("first_name")

  const lname=sessionStorage.getItem("last_name")
  



  const[drop,setDrop]=useState(false);
  const[dropdown,setDropmenu]=useState(0);
  let history=useHistory();
  const[loading,setLoading]=useState(false);
  const[message,setMessage]=useState("");
  const[firstname,setFirstname]=useState("");
  const[lastname,setLastname]=useState("");
 
  const[gender,setGender]=useState("");

  const[district,setDistrict]=useState("");
  const[village,setVillage]=useState("");
  const[country,setCountry]=useState("");
  const[dateofbirth,setDateofbirth]=useState("");
  const[identification,setIdentification]=useState("");
  const[fathername,setFathername]=useState("");
  const[mothername,setMothername]=useState("");
  const[email,setEmail]=useState("");
  const[telephone,setTelephone]=useState("");







  if(!auth){
      history.push("/login");
  }

  function logout(){
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("first_name")
    sessionStorage.removeItem("id")
    sessionStorage.removeItem("last_name")
    history.push("/login")
    }


  const handleForm =(e)=>{
    setLoading(true);
    e.preventDefault();
    const data={
      "firstname" : firstname,
      "lastname": lastname,
      "gender": gender, 
      "district":district,
      "village":village,
      "country":country,
      "dateofbirth":dateofbirth,
      "identification_number": identification,
      "fathername": fathername,
      "mothername": mothername,
      "email": email,
      "telephone": telephone,
      "regSchools":auth,
      "studentcode":"0",

    }

  axios.post("http://127.0.0.1:8000/student-creation/",data)
  .then((res)=>{
    console.log(res.data)
    setLoading(false)
    setMessage("Registration successful!")
          
      })
  .catch((err)=>{
    console.log(err)
    setLoading(false)
    setMessage("Registration failed!")
      })   
  }




  // hertier
  const tok={"schoolname":token}
  const [data, setData] = useState([]);
  useEffect( ()=>{
    // async await
   const response = axios.post('http://127.0.0.1:8000/profilestudent/',tok)
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
//hert





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

        <span className="group flex"> <a href="/upload">
{data.map((item,key)=>{
            return(
                     
  
  <img src={"http://localhost:8000"+item.image} class="w-12 h-12 rounded-full"/>

)
    }
    )}
  </a><span className="px-1 py-2"> 
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

      
        
          <a className="flex items-center  py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100"  >
         
              <ion-icon className="text-2xl text-white" name="log-out-outline"></ion-icon>
        
            <span className="mx-4 pb-4 font-medium"  onClick={logout}>Logout</span>
        </a>
          </nav>
       </div>:<div></div>}




























  <div className="grid grid-cols-5 h-full pt-12 ">
        <div className="w-full  bg-gray-800  sm:mt-0 hidden md:block h-auto">
          <div className="flex items-center justify-center ">

          <a href="/upload">
{data.map((item,key)=>{
            return(
                     
  
  <img src={"http://localhost:8000"+item.image} class="w-24 h-24 rounded-full mt-4 "/>

)
    }
    )}
  </a>

          
        
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



          <a className="flex items-center  mt-2 mb-6 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100"  >
         
              <ion-icon className="text-2xl text-white" name="log-out-outline"></ion-icon>
        
            <span className="mx-4 font-medium"  onClick={logout}>Logout</span>
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
        <label className="block text-gray-800 text-xl underline text-center font-bold  py-2" >
    Welcome <span className="capitalize text-blue-700">{auth} </span> to Student Registration
      </label>

  <div className="text-blue-500 w-full px-4 text-center  rounded-md">{message}</div>
  <div className=" shadow-sm rounded px-8 pt-6 pb-8 mb-4 bg-gray-100">

  <form  onSubmit={handleForm} >



    <div className="md:flex lg:flex  gap-2 mb-4">
        <div className="w-2/2 md:w-1/2 lg:w-1/2">
      <label className="block text-gray-700 text-sm font-semibold mb-2" >
        First name
      </label>
      <input  value={firstname} onChange={event=>setFirstname(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" />
      </div>
      <div className=" md:w-1/2 lg:w-1/2">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Last name
      </label>
      <input  value={lastname}  onChange={event=>setLastname(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text"/>
      </div>
    
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
       Gender
      </label>
      <div className="md:flex lg:flex gap-2">
          <div className=" flex  gap-4 w-1/2">
              <input value="male" onChange={event=>setGender(event.target.value)} type="radio" name="gender" className="mt-1" />
<label className="block text-gray-700 text-sm font-bold mb-2" for="password">
       Male
      </label>
      </div>

      <div className="w-1/2 flex gap-4">
          <input value="female" onChange={event=>setGender(event.target.value)} type="radio" name="gender" className="mt-1" />
<label className="block text-gray-700 text-sm font-bold mb-2" for="password">
       FeMale
      </label>
      </div>




</div>
    </div>


    <label className="block text-gray-700 text-sm font-bold mb-2" >
        Borning Place
      </label>
    <div className="md:flex lg:flex  gap-2 mb-4">
  
        <div className=" md:w-1/3 lg:w-1/3">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        District
      </label>
      <input  value={district} onChange={event=>setDistrict(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" />
      </div>
      <div className=" md:w-1/3 lg:w-1/3">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Village
      </label>
      <input  value={village} onChange={event=>setVillage(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text"/>
      </div>
      <div className=" md:w-1/3 lg:w-1/3">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Country
      </label>
      <input name="country" value={country} onChange={event=>setCountry(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text"/>
      </div>
    
    </div>


    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Date of Birth
      </label>
      <input name="dateofbirth" value={dateofbirth} onChange={event=>setDateofbirth(event.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="date"/>

    </div>




    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Identification Number
      </label>
      <input name="identification" value={identification} onChange={event=>setIdentification(event.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text"/>

    </div>

    <div className="md:flex lg:flex  gap-2 mb-4">
        <div className="w-2/2 md:w-1/2 lg:w-1/2">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Father name
      </label>
      <input name="fathername" value={fathername} onChange={event=>setFathername(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" />
      </div>
      <div className=" md:w-1/2 lg:w-1/2">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
    Mother name
      </label>
      <input name="mothername" value={mothername} onChange={event=>setMothername(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text"/>
      </div>
    
    </div>




    <div className="md:flex lg:flex  gap-2 mb-4">
        <div className="w-2/2 md:w-1/2 lg:w-1/2">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Email
      </label>
      <input name="email" value={email} onChange={event=>setEmail(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="email" />
      </div>
      <div className=" md:w-1/2 lg:w-1/2">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
    Telephone Number
      </label>
      <input name="telephone" value={telephone} onChange={event=>setTelephone(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text"/>
      </div>
    
    </div>




    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
      {loading?<span>Please wait...</span>:<span>Submit</span>}
      </button>
 
    </div>
  </form>
  </div>






  <form className=" shadow-sm rounded px-8 pt-6 pb-8 mb-4 bg-gray-100">

<div className="md:flex lg:flex  gap-2 mb-4">
    <div className="md:w-auto lg:w-full">
  <label className="block text-gray-700 text-sm font-semibold mb-2" >
    Csv File
  </label>
  <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="file" />
  </div>
  <div className=" md:w-32 lg:w-32">
<div className="py-4 mt-2">
  <button className="bg-red-500 py-2 px-2 text-white font-semibold shadow rounded">Import CSV</button></div>
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
export default HomeAdmin;