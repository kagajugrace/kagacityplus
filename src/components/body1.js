import React,{useState} from 'react';
import Nav1 from '../components/navbar1';

function Body1(){

    return(
        <>
        <Nav1/>
        <div className="bgimg w-full">
            <div className="bg-black bg-opacity-75    h-auto ">

<h1 className="text-4xl md:text-5xl  text-center font-bold text-white py-16">Facilitate data collection for Religions and Academic Prevents COVID-19 Spreading.</h1>
<h1 className="text-xl text-center text-white italic" >Use the .underline utility to underline text.</h1>

<div class=" md:mt-0 grid grid-flow-row sm:grid-flow-row md:grid-flow-col lg:grid-flow-row xl:grid-flow-col ">
  <div className="mt-20  ">
  <a className="">
  <button className="bg-blue-500  w-full md:w-auto  md:float-right  py-4 px-16 md:px-24 cursor-pointer text-md md:text-xl hover:bg-blue-900 font-bold rounded text-white">Religion  Service</button>

  </a>
  </div>
  <div className=" md:mt-20">
<a href="/Login" className=" md:ml-2 ">
  <button className="bg-gray-100 w-full md:w-auto   py-4 px-16 md:px-24 bg-opacity-75 cursor-pointer  hover:bg-opacity-100 text-md md:text-xl font-bold rounded text-gray-700">Education Service</button>
  </a>
  </div>

</div>


<div class="grid grid-flow-row sm:grid-flow-row md:grid-flow-col lg:grid-flow-row-dense xl:grid-flow-col text-white text-center font-semibold  mt-24">
  <div ><a className="hover:text-blue-800  hover:underline cursor-pointer"> Service Bulky Services</a></div>
  <div ><a className="hover:text-blue-800 hover:underline cursor-pointer">Booking Religion Service</a></div>
  <div ><a className="hover:text-blue-800 hover:underline cursor-pointer">General Temperature Record</a></div>
</div>



<div className="text-center text-white font-semibold mt-10  ">

Copyright , Allright reserved - <a  className="hover:text-blue-800 underline cursor-pointer ">Ida technology Ltd</a>
</div>



            </div>







        </div></>
    )
}
export default Body1;