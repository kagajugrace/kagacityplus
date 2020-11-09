import React from 'react';
import '../../css/tailwindcss.css';
import { FaAngleDoubleDown,FaHandHoldingUsd } from "react-icons/fa";
 //TODO:{telesphore} finish this pricing

 //TODO:{Agathe} finalize Home design -fetch all data from DB--(endpoints) || tomorrow evening 

export default function Pricing(){
  return(
  <>
   
  <h1 className="font-bold text-center w-full text-4xl font-extrabold text-gray-700 mt-2 mb-2">Our Payment Details</h1>

<center><hr className="w-64 p-4"/></center>
<div class=" grid grid-cols-2 md:grid-cols-4 text-white text-center font-semibold  gap-4 sm:pl-0 md:pl-20 xl:pl-20 sm:pr-0 md:pr-20 xl:pr-20 mb-4">

<div className="bg-white mb-4 rounded-md shadow-lg"  data-aos="fade-right"
     data-aos-anchor-placement="center-bottom">
   <div className="text-gray-700 text-center text-left bg-gray-200 px-12 py-2 font-semibold capitalize">
   <center>
       <p className="text-center text-4xl pt-12">0</p>
       <span className="pt-12"><FaHandHoldingUsd size={44}/> </span>
          </center> 
       
       <hr/>
       </div>
    <h1  className="text-center text-blue-600 font-extrabold  text-4xl pt-8 px-4">Basic Account</h1>
    <div className="text-gray-700 text-center text-left px-12 py-2 font-semibold capitalize">
     <p>Register your Client</p>
  <p>Record Temperature</p>

    </div>
    <center><a href=""><span className="bg-blue-600 text-gray-200 font-bold px-4 py-4 rounded-lg">Get started</span></a></center>
</div>

<div  className="bg-white mb-4 rounded-md shadow-lg  "  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
  <div className="text-gray-700 text-center text-left bg-gray-200 px-12 py-2 font-semibold capitalize">
       <center>
       <p className="text-center text-4xl pt-12">10</p>
       <span className="pt-12"><FaHandHoldingUsd size={44}/> </span>
          </center> 
       
       <hr/>
       </div>

    <div className="text-gray-700 text-left px-12 py-2 font-semibold capitalize">
    <p  className=" text-blue-600 font-extrabold  text-4xl pt-12 px-4">Basic Account</p>
  <p className="px-4">Register your Client</p>
  <p className="px-4">Record Temperature</p>
  <p className="px-4">Upload csv files</p>
  <p className="px-4">10 sms</p>
  <p className="px-4">pdf report Month</p>
  <p className="px-4">Excel Document</p>
    </div>

    <center><a href=""><span className="bg-blue-600 text-gray-200 font-bold px-4 py-4 rounded-lg">Get started</span></a></center>
</div>

<div className="bg-white mb-4 rounded-md shadow-lg" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" >

<h1  className="text-center text-gray-800 font-bold underline text-xl pt-24">$10 Pre</h1>


    <div className="text-gray-700 text-left px-12 py-2 font-semibold capitalize">
    <h3>Register your Client</h3>
    <h3>Record Temperature</h3>
  <h3>Upload csv files</h3>
  <h3>100 sms</h3>
  <h3>pdf report Month</h3>
  <h3>Excel Document</h3>
    
</div>
</div>
<div className="bg-white mb-4 rounded-md shadow-lg" data-aos="fade-left"
     data-aos-anchor-placement="center-bottom" >

<h1  className="text-center text-blue-600 font-bold underline text-xl ">Premium Account</h1>
    <div className="text-gray-700 text-left px-12 py-2 font-semibold capitalize">
  <h3>Register your Client</h3>
  <h3>Record Temperature</h3>
  <h3>Upload csv files</h3>
  <h3>unlimited  sms</h3>
  <h3>pdf report Month</h3>
  <h3>Excel Document</h3>
    </div>
</div>



</div>

  </>
  );
}