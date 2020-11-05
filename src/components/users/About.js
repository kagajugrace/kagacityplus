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
 <div className="container">
   <Nav/>
<div className=" one bg-gray-200 p-6">
    <h1 className=" first text-center text-blue-400 text-4xl">About us</h1>
    <h2 className="text-2xl   text-center  text-blue-400  font-semibold py-6">What is City Plus</h2>
    <div className="two p-6 ">
      <p className="pard text-xl w-full text-black">
      City plus is an online platform helping religion and schools across
      the country to easily collecting and recording Basic information
      related to the spread of COVID-19 Pandemic and institution management
      in the religion and schools followers. We creates an environment 
      and opportunity for sharing rapid solutions by finding possible ways of serving better 
      our partners. With this platform we aim to make sure that
      every religion and schools to access
      an affordable innovative secured environment 
      for long term data sustainability for its people and place.</p>
      <h2 className="text-2xl  text-center  font-semibold  text-blue-400 py-2">Why city plus platform</h2>
      <p className=" para text-xl  text-black py-2 ">
            This platform is here for you to save more than 75% of your daily
            expanses in terms of logistics, time consuming, energy, communication
            and reporting within the institution by adopting IT solutions in our 
            daily services. Solutions exists that can help our environment become a safer
            and trustable place for our people for their health and security, Today City 
            Plus platform is counting more than 50 users in Rwanda. We know that the better
            performance in fighting the spread of COVID-19 Pandemic leads to the better
            results of health caring. Use City plus today, it is easy and simple.<br/>
            Don't have an account?  <a href="/login" className=" bg-blue-300 text-black  rounded-full "> Register an account</a></p>
        
  </div>
  <div className="services  flex  gap-x-4">
    <div className="md: w-2/6 py-4 max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={stdnt} alt="our services"/>
  <div className="px-6 py-6">
    <div className="font-bold text-xl mb-2">Schools Services</div>
    <p className="text-gray-700 text-base">
    with City plus platform we help you to manage your school,organisation
   digitally
    </p>
  </div>
  
  </div>
  <div className="md:w-2/6 py-4 max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={tem} alt="our services"/>
  <div className="px-6 py-6">
    <div className="font-bold text-xl mb-2">Temperature Record</div>
    <p className="text-gray-700 text-base">
    this platform will also help you and your organisation
    to know the daily temperature record for each member as well as
    getting notification on his status.
    </p>
  </div>
  </div>
<div className="md:w-2/6 py-4 max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={church} alt="our services"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Church Services</div>
    <p className="text-gray-700 text-base">
      with City plus platform we help you to manage your church,organisation
      digitally
    </p>
  </div>
  </div>

</div>
</div>
<div>

</div>
</div>
    )

}

export default About;