import React,{useState,useEffect} from 'react';
import logo from '../../../images/City Plus.png'
import login from '../../../images/login.png'
import menu from '../../../images/menu-outline.svg';
import close from '../../../images/close-outline.svg';

import '../../../css/tailwindcss.css';
import {useHistory} from "react-router-dom";
import axios from 'axios';



function Attendance(){
  const auth=sessionStorage.getItem("username")
  const token=sessionStorage.getItem("token")
  const fname=sessionStorage.getItem("first_name")
  const lname=sessionStorage.getItem("last_name")
  

const logoes="http://localhost:8000"
    const[drop,setDrop]=useState(false);
    const[dropdown,setDropmenu]=useState(0);
    
    let history=useHistory();

    function logout(){
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("token");
      history.push("/login")
      }
  
  
  //   if(!auth){
  //     history.push("/login");
  // }
    if(!auth){
      history.push("/login");
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







// hertier
const tokf={"schoolname":token}
const [data4, setData4] = useState([]);
useEffect( ()=>{
  // async await
 const response = axios.post('http://127.0.0.1:8000/attendance-attendlist/',tokf)
//  print(response);
 .then(res=>{
   setData4(res.data4);
   console.log(res)
 })
 .catch((err)=>{
   console.log(err)
 })
},[]
);
//hert











  const [detail,setdetail]=useState(false);
  const [data2,setData2]=useState([]);
  const [code,setCode]=useState("");
  const [number,setNumber]=useState("");
  const [table,setTable]=useState("");
  

  
  const handleShow=(e)=>{
    e.preventDefault();
    const data={
      "usercode":code,
      
     }
    
     
axios.post("http://localhost:8000/student-ckeckstudent/",data)
    .then((res)=>{
      setData2(res.data);
      setdetail(true)
      console.log(res.data)
            
        })
    .catch((err)=>{
      console.log(err)
        })
  }
  

  const accept=()=>{
    sessionStorage.setItem('usercode',code);
    history.push('/registartion-student-Attendance');
  }
  const decline=()=>{
    history.push('/Temperature-pageattendance-page'); 
  }

const checknumber =(e)=> {
    e.preventDefault();
    const data={
      "telephone":number
  
     }
  
   
    axios.post("http://localhost:8000/number-ckeckstudent/",data)
    .then((res)=>{
      setData(res.data);
      setTable(true);
      console.log(res.data)
            
        })
    .catch((err)=>{
      console.log(err)
        }) 
    
  
  
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

        <span className="group flex">
        
        
        <a href="/upload">
{data.map((item,key)=>{
            return(
                     
  
  <img src={"http://localhost:8000"+item.image} class="w-12 h-12 rounded-full"/>

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

  <a class="flex items-center py-3 px-8 block text-gray-700 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/class-page">
    <ion-icon class="text-2xl" name="search-outline"></ion-icon>

      <span class="mx-4 font-medium">Add Class</span>
  </a>
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

<a href="/upload">
{data.map((item,key)=>{
            return(
                     
  
  <img src={"http://localhost:8000"+item.image} class="w-24 h-24 rounded-full mt-4 "/>

)
    }
    )}
  </a>


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

  <a class="flex items-center mt-2 py-2 px-8 block text-gray-100 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100" href="/class-page">
    <ion-icon class="text-2xl" name="search-outline"></ion-icon>

      <span class="mx-4 font-medium">Add Class</span>
  </a>
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










  



























  
















        <div className=" col-span-6 md:col-span-4 w-full mt-16 md:mt-4 justify-center">
          <div className="w-full">
  {/* Side Body */}
<div className="flex w-full">
    <div className="w-none md:w-32 lg:w-32"></div>
    <div className="w-full md:w-full lg:w-full ">


        {/* start form section */}
        <div className="w-full max-w-xlg ">
        <label className="block text-gray-800 text-xl underline text-center font-bold  py-2" for="username">
      Student Attendance
      </label>
  <form   className=" shadow-sm rounded px-8 pt-6 pb-8 mb-4 bg-gray-100">
  <div className="md:flex lg:flex  gap-2 mb-4">
    <div className="md:w-auto lg:w-full">
  <label className="block text-gray-700 text-sm font-semibold mb-2" for="username">
    Student code
  </label>
  <input value={code} onChange={event=>setCode(event.target.value)}   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
   </div>
  <div className=" md:w-32 lg:w-32">
<div className="py-4 mt-2">
  <button onClick={handleShow} type="submit" className="bg-blue-400 py-2 px-2 text-white font-semibold shadow rounded">check</button></div>
  </div>

</div>



{detail?

<div>
   
   {data2.map((item,key)=>{
        return( <div>
  <h3 key={key}>Dear <span className="text-blue-500 font-semiblod capitalize" >{item.firstname} {item.lastname}</span></h3>
        <p>if is you please accept isn't you you can Decline</p>
  <div className="flex">
    <div className="w-1/2"><button onClick={accept}  className="bg-green-500 py-2 px-2 rounded text-white focus:outline-none focus:shadow-outline">Accept</button></div>
    <div className="w-1/2 float-right"><button  onClick={decline}  className="bg-red-500 py-2 px-2 rounded text-white focus:outline-none focus:shadow-outline">Decline</button></div>
</div> </div> 
)
}
)}
</div>
 


:<div></div>}








  </form>
  <br/><br/><br/>

  <div className="table">
  <table id="example" class="display" >
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Telephone</th>
               
                <th>id</th>
                <th>Date</th>
                <th>Option</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>Irakoze</td>
                <td>benjam</td>
                <td>078324343</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>
                  <a href="#" className="bg-red-500 hover:bg-red-700 text-white mr-1 font-bold py-2 px-4 rounded">yes</a>
                  <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">no</a>
                </td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>Cyusa</td>
                <td>Hamissa</td>
                <td>1324324</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>
                  <a href="#" className="bg-red-500 hover:bg-red-700 text-white mr-1 font-bold py-2 px-4 rounded">yes</a>
                  <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">no</a>
                </td>
            </tr>
        </tbody>
    </table>



      
  </div>

  <br/><br/><br/><br/><br/><br/>

  <form onSubmit={checknumber} className=" shadow-sm rounded px-8 pt-6 pb-8 mb-4 bg-gray-100">

<div className="md:flex lg:flex  gap-2 mb-4">
      <div className="w-2/2 md:w-1/2 lg:w-1/2">
    <label className="block text-gray-700 text-sm font-semibold mb-2" for="username">
      Telephone
    </label>
    <input value={number} onChange={event=>setNumber(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
    </div>
    <div className="flex items-center justify-between">
    <button type="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded focus:outline-none focus:shadow-outline" >
    Check
    </button>
    
  </div>
  </div>
</form>
<div className="table">
  <table>
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Telephone</th>
                <th>Code</th>
               
            </tr>
        </thead>
        <tbody>

        {data.map((item,key)=>{
            return( 
            <tr key={key}> 
              <td>  {item.firstname}</td>
              <td>  {item.lastname}</td>
              <td>  {item.telephone}</td>
              <td>  {item.studentcode}</td>
         
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
export default Attendance;