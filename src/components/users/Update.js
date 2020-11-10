import React from 'react';
import '../../css/tailwindcss.css';
import '../../App.css';
import tem from '../../images/temp1.jpeg';
import Nav from './Navbar';

function Update(){
    
    return(
        < div className="container-fluid bg-blue-200">
            <Nav/>
        <div className=" maine flex p-4 gap-2 shadow-lg bg-gradient-to-l from-blue-300 via-gray-300 to-gray-200 rounded-lg">
<div className="w-2/6 rounded-lg shadow-lg border">
<h2 className="text-lg text-bold p-2 text-white rounded-lg bg-blue-300">COVID-19 SYMPTOMS </h2>
<div>
    <br/>
    <h3 className="text-lg p-2 text-white rounded-lg bg-blue-300">MOST COMMON SYMPTOMS</h3>
    <ul className="text-xm p-2 text-blue-500 mb-2 ">
        <li>fever</li>
        <li>dry cough</li>
        <li>tiredness</li>
    </ul>
    <h3 className="text-lg p-2 text-white rounded-lg bg-blue-300">LESS COMMON SYMPTOMS</h3>
    <ul className="text-xm p-2 text-blue-500 mb-2 ">
        <li>aches and pains</li>
        <li>sore throat</li>
        <li>diarhoea</li>
        <li>Conjugativitis</li>
        <li>headache</li>
        <li>loss of taste or smell</li>
        <li>a rash on skin ,or discolouration of fingers or toes</li>
    </ul>
    <h3 className="text-lg p-2 text-white rounded-lg bg-blue-300">SERIOUS SYMPTOMS</h3>
    <ul className="text-xm p-2 text-blue-500 ">
        <li>difficulty breathing or shortness of breath</li>
        <li>chest pain or pressure</li>
        <li>loss of speech or movement</li>
    </ul>
    <p className="text-xm p-2 text-blue-500 mb-2 ">Seek immediate medical attention if you have Sserious
        symptoms .always call before going to the hospital
    </p>
</div>
</div>
<div className="w-2/6 rounded-lg shadow-lg border ">
<h2 className="text-lg text-white rounded-lg bg-blue-300  p-2 text-semibold ">COVID-19 PREVENTION METHOD </h2>
<p className="text-xm text-blue-500  p-2 text-semibold ">
    Protect yourself and others around you by knowing the facts and taking
    appropriates precautions. Follow advice provided by your local healthy authority
</p>
<h3 className="text-lg text-white rounded-lg bg-blue-300 text-bold p-2 ">To prevent the spread of COVID-19:</h3>
<ul className="text-xm text-blue-500 p-2 text-semibold mb-2">
    <li>Clean your hands often.Use soap and water,or 
        an alcohol-based hand rub.
    </li>
    <li>maintain a safe distance from anyone who is coughing or sneezing</li>
    <li>wear a mask everytime you leave home</li>
    <li>Don't touch your eyes,nose or mouth</li>
    <li>Cover your nose and mouth with your bent 
        elbow or a tissue when you cough or sneeze
    </li>
    <li>stay home if you feel unwell</li>
</ul>
</div>
<div className="w-2/6 rounded-lg border shadow-lg">
           <h2 className="text-lg p-2 text-white rounded-lg bg-blue-300">COVID-19 LATEST UPDATES</h2>
           <p  className="text-lg p-2 text-blue-500">in this week they have found 19876 patients
                all over the world  
               and 1243  in africa as well as 24 in Rwanda
           </p>
           <img src={tem} alt="temperature record"/>
       </div>
        </div>
        </div>
    )
}

export default Update;