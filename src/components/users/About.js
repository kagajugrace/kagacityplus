import React from 'react';
import '../../css/tailwindcss.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import cards from 'https://react-bootstrap.github.io/components/card/';
import church from '../../images/church.jpg';
import stdnt from '../../images/student.jpg';
import tem from '../../images/temp1.jpeg';
import '../../App.css';
import Nav from './Navbar';
function About(){
    return(
<div className="bg-gray-200">
   <Nav/>
   <div className="container-fluid">
<div className=" one mb-4 rounded-lg  border border-solid shadow-lg p-4">
    <h1 className=" first text-center text-blue-500 text-4xl">About us</h1>
    <h2 className="text-xl text-blue-500 px-8 font-semibold py-20">What is City Plus</h2>
    <div className="two flex p-4">
      <p className="w-1/2 text-lg text-blue-500 text-black px-2 mb-4 py-10">
      City plus is an online platform helping religion and schools across
      the country to easily collecting and recording Basic information
      related to the spread of COVID-19 Pandemic and institution management
      in the religion and schools followers. We creates an environment 
      and opportunity for sharing rapid solutions by finding possible 
      ways of serving better our partners. With this platform we aim to
       make sure that every religion and schools to access
      an affordable innovative secured environment
      for long term data sustainability for its people and place.<br/>
      </p>
  <div className="w-1/2 rounded-lg border px-4">
    <h2 className="text-2xl  text-blue-500 font-semibold text-center">Schools Services</h2>
    <br/>
  <img className="w-full " src={stdnt} height="50%" alt="our services"/>
    </div>
      </div>
    <div><h2 className="text-2xl px-8 font-semibold  text-blue-500 py-12">Why city plus platform</h2></div>
     
     <br/>
     <div className="flex  px-4">
     <div className=" w-1/2"><p className=" w-full text-lg text-blue-500 px-4 text-black py-12">
            This platform is here for you to save more than 75% of your daily
            expanses in terms of logistics, time consuming, energy, communication
            and reporting within the institution by adopting IT solutions in our 
            daily services. Solutions exists that can help our environment become a safer
            and trustable place for our people for their health and security, Today City 
            Plus platform is counting more than 50 users in Rwanda. We know that the better
            performance in fighting the spread of COVID-19 Pandemic leads to the better
            results of health caring. Use City plus today, it is easy and simple.<br/><br/>
            Don't have an account?  <a href="/user-signup" className=" bg-blue-300 text-white  rounded-lg p-2"> Register an account</a></p>
   
            </div>
  <div className=" w-1/2 px-6 rounded-lg border">
  <p className="text-xl font-semibold text-blue-500 text-center">Church Services</p>
  <br/>
  <img className="px-6" src={church} alt="our services"/>
   
    </div>
  </div>
</div>
</div>
</div>
    )

}

export default About;