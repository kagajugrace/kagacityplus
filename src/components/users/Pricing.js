
import '../../css/tailwindcss.css';
import { FaAngleDoubleDown,FaHandHoldingUsd } from "react-icons/fa";
 //TODO:{telesphore} finish this pricing and about page

 //TODO:{Agathe} finalize Home design -fetch all data from DB--(endpoints) || tomorrow evening 

import React,{useState,useEffect} from 'react';   
import axios from 'axios';   




export default function Pricing(){
   const [data, setData] = useState([]);
useEffect( ()=>{
    // async await
   const response = axios.get('http://127.0.0.1:8000/pay/endpoints/')
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
  return(
  <>
   
  <h1 className="font-bold text-center w-full text-4xl font-extrabold text-gray-700 mt-2 mb-2">Our Payment Details</h1>

<center><hr className="w-64 p-4"/></center>
<div class=" grid grid-cols-2 md:grid-cols-4 text-white text-center font-semibold  gap-4 sm:pl-0 md:pl-20 xl:pl-20 sm:pr-0 md:pr-20 xl:pr-20 mb-4 ">

{data.map((item,key)=>{
                return(

<div key={key} className="bg-white mb-4 rounded-md shadow-lg"
     data-aos-anchor-placement="center-bottom">
   <div className="text-gray-700 text-center text-left bg-gray-200 px-12 py-2 font-semibold capitalize">
   <center>
       <p className="text-center text-4xl pt-12">{item.discount}frw</p>
       {/* <span className="pt-12"><FaHandHoldingUsd size={44}/> </span> */}
          </center> 
       
       <hr/>
       </div>
    <h1  className="text-center text-blue-600 font-extrabold  text-xl pt-8 px-4">{item.title}</h1>
    <div className="text-gray-700 text-center text-left px-12 py-2 font-semibold capitalize">
     <ul><li>{item.description}</li>
  
    </ul>
    </div>
    <center><a href=""><span className="px-4 bg-blue-500 text-white py-2  cursor-pointer rounded hover:bg-blue-700">Get started</span></a></center>
</div>
   )
}
)}

</div>

  </>
  );
}