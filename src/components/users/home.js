import React ,{useState} from 'react';
import kids from '../../images/toppng.com-african-american-kids-playing-with-frames-african-american-kids-421x526.png'
import logo from '../../images/City Plus.png';
import classroom from '../../images/toppng.com-school-classroom-with-blackboard-and-deskspicture-6168x3937.png' ;
import hischool from '../../images/toppng.com-indian-school-students-png-download-college-students-in-uniform-1000x830.png';
import univ from '../../images/toppng.com-students-1058x684.png'
function Home(){
    return(
<div className="bg-gray-200">
    

<div  className="flex py-2 ">
    <div className="w-1/2">
<img src={logo} className="h-12 w-12 ml-4"/>
    </div>

    <div className="  w-1/2  font-semibold   ">
        <div className="flex gap-2 float-right mr-4 text-gray-700 ">
        <div className="px-4 py-2  "><a className="cursor-pointer hover:text-blue-500 hover:no-underline">Home</a></div>
        <div className="px-4 py-2 "><a className="cursor-pointer hover:text-blue-500 hover:no-underline">Eduction Service</a></div>
        <div className="px-4 py-2 "><a className="cursor-pointer hover:text-blue-500 hover:no-underline">Login</a></div>
        <div className="px-4 bg-blue-500 text-white py-2  cursor-pointer rounded hover:bg-blue-700"><a>Get Start</a></div>
    </div></div>
</div>


<div className=" bgshade ">


<div className="container">
    <div className="row">
        <div className="col-sm-6 ">
        <h1 className="text-4xl md:text-5xl  text-center font-bold text-gray-100 py-16">
            <span className="text-gray-700 ">Facilitate</span> data collection for  Academic Prevents COVID-19 Spreading.</h1>
            <div className=" flex float-right bg-none">
                <div className="mr-64">
                <button className=" hover:bg-blue-500 hover:text-white bg-none border-2 border-blue-500 py-3 px-8 text-gray-700 font-semibold rounded-md">Login</button>


                </div>
             
                <button className=" hover:bg-blue-900 bg-blue-500 py-3 px-4 text-white font-semibold rounded-md">   <a >Get Start  </a></button>
              
            </div>
 
        </div>
        <div className="col-sm-6 ">
        <img src={classroom} className="w-100  "/>

        </div>
    </div>
</div>

</div>
<h1 className="font-bold text-center w-full text-gray-700 mt-2 mb-2">Academic Section </h1>
<div class=" grid grid-flow-row sm:grid-flow-row md:grid-flow-col lg:grid-flow-row-dense xl:grid-flow-col text-white text-center font-semibold  gap-4 sm:pl-0 md:pl-20 xl:pl-20 sm:pr-0 md:pr-20 xl:pr-20 ">
  <div className="bg-white rounded shadow-lg" >
      
      <img src={kids} className="w-full  h-64 "/>
<div className="mb-4 py-4">
    <h1 className="text-gray-700 text-center ">Primary & Nusary Section</h1>
    <p className=" px-2 text-gray-600">Define nurser. nurser synonyms, nurser pronunciation, nurser translation, English ... add a link to this page, or visit the webmaster's page for free fun content.</p>
</div>
      </div>
  <div className="bg-white rounded shadow-lg" >      
      <img src={hischool} className="w-full h-64 "/>
      <div className="mb-4 py-4">
    <h1 className="text-gray-700 text-center ">Our Highschool section</h1>
    <p className="px-2 text-gray-600">Define nurser. nurser synonyms, nurser pronunciation, nurser translation, English ... add a link to this page, or visit the webmaster's page for free fun content.</p>
</div>

      </div>
  <div className="bg-white rounded shadow-lg" >
            
  <img src={univ} className="w-full h-64 "/>
  <div className="mb-4 py-4">
    <h1 className="text-gray-700 text-center ">UNiversity Section</h1>
    <p className="px-2 text-gray-600">Define nurser. nurser synonyms, nurser pronunciation, nurser translation, English ... add a link to this page, or visit the webmaster's page for free fun content.</p>
</div>


      </div>
</div>

<h1 className="font-bold text-center w-full text-gray-700 mt-2 mb-2">Our Patrnership Schools</h1>
<div class=" grid grid-flow-row sm:grid-flow-row md:grid-flow-col lg:grid-flow-row-dense xl:grid-flow-col text-white text-center font-semibold  gap-4 sm:pl-0 md:pl-20 xl:pl-20 sm:pr-0 md:pr-20 xl:pr-20  mb-4">

<div className="bg-white mb-4 rounded-md">
    <img src={logo} className=""/>
</div>

<div  className="bg-white mb-4 rounded-md">
<img src={logo}/>
</div>

<div className="bg-white mb-4 rounded-md" >
<img src={logo}/>
</div>

<div className="bg-white mb-4 rounded-md" >
<img src={logo}/>
</div>

<div className="bg-white mb-4 rounded-md" >
<img src={logo}/>
</div>

<div className="bg-white mb-4 rounded-md" >
<img src={logo}/>
</div>

<div className="bg-white mb-4 rounded-md" >
<img src={logo}/>
</div>
</div>

</div>

    )
}

export default Home;