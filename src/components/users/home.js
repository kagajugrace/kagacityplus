import React,{Component,useState,useEffect} from 'react';   
import axios from 'axios';  
import kids from '../../images/toppng.com-african-american-kids-playing-with-frames-african-american-kids-421x526.png'
import logo from '../../images/City Plus.png';
import classroom from '../../images/toppng.com-school-classroom-with-blackboard-and-deskspicture-6168x3937.png' ;
import hischool from '../../images/toppng.com-indian-school-students-png-download-college-students-in-uniform-1000x830.png';
import univ from '../../images/toppng.com-students-1058x684.png';
import Footer from './footer';
import Partners from './Partners';
import Pricing from './Pricing';
import Nav from './Navbar';











export default function Home(){

    const [data, setData] = useState([]);
    const pathed='http://127.0.0.1:8000'

    useEffect( ()=>{
        // async await
       const response = axios.get('http://127.0.0.1:8000/reg/endpoints/')
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
        <Nav/>
   
<div className="bg-gray-200 pt-16">
<div className=" bgshade pt-4">
<div className="container">
    <div className="row">
        <div className="col-sm-6 "  data-aos="fade-right"  
     data-aos-easing="ease-in-sine">
        <h1 className="text-4xl md:text-5xl  text-center font-bold text-gray-100 py-16">
            <span className="text-gray-700 ml-8 ">Facilitate</span> data collection for  Academic Prevents COVID-19 Spreading.</h1>
            <div className=" flex float-right bg-none">
                <div className="mr-64">
                <button className=" hover:text-white bg-none border-2 border-blue-500 py-3 px-8 text-gray-700 font-semibold rounded-md"> <a href="/login"> Login </a> </button>

                </div>
                <button className=" hover:text-white bg-none border-2 border-blue-500 py-3 px-8 text-gray-700 font-semibold rounded-md">   <a href="/user-signup" >Get Start  </a></button>
              
            </div>
 
        </div>
        <div className="col-sm-6"   
     data-aos-easing="ease-in-sine">
        <img src={classroom} className="w-100  "/>

        </div>
    </div>
</div>

</div>
<h1 className="font-bold text-center w-full text-4xl text-gray-700 mt-12">Academic Section </h1>
<center><hr className="w-64 p-4"/></center>

<div class=" grid grid-flow-row sm:grid-flow-row md:grid-flow-col lg:grid-flow-row-dense xl:grid-flow-col text-white text-center font-semibold  gap-4 sm:pl-0 md:pl-20 xl:pl-20 sm:pr-0 md:pr-20 xl:pr-20 ">
 
{data.map((item,key)=>{

                return(
   
  <div key={key} className="bg-white rounded shadow-lg">
   
      <img src={pathed+item.pictures} className="w-full  h-64 " alt={item.pictures}/>

<div className="mb-4 py-4">
    <h1 className="text-gray-700 text-center font-bold text-xl">  {item.title}</h1>
    <p className=" px-2 text-gray-600">{item.description}</p>
</div>
      </div>
      )
    }
    )}
 </div>

<div class=" grid grid-flow-row sm:grid-flow-row md:grid-flow-col lg:grid-flow-row-dense xl:grid-flow-col text-white text-center font-semibold  gap-4 sm:pl-0 md:pl-20 xl:pl-20 sm:pr-0 md:pr-20 xl:pr-20 mb-4" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
<div className="bg-white mt-4 rounded-md ">
    <img src={logo} className="h-32" />
</div>
</div>

<Pricing/>
{/* Added new partners */}




<Partners/>
<Footer/>
</div>

</>

    );
  }


