import React,{Component,useState,useEffect} from 'react';  
import axios from 'axios'; 
import '../../css/tailwindcss.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import cards from 'https://react-bootstrap.github.io/components/card/';
import church from '../../images/church.jpg';
import stdnt from '../../images/student.jpg';
import tem from '../../images/temp1.jpeg';
import '../../App.css';
import Nav from './Navbar';


export default function About(){

  const [data, setData] = useState([]);

    useEffect( ()=>{
        // async await
       const response = axios.get('http://127.0.0.1:8000/about/endpoints/')
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

     const [data2, setData2] = useState([]);
     const pathed='http://127.0.0.1:8000'

    useEffect( ()=>{
        // async await
       const response = axios.get('http://127.0.0.1:8000/about2/endpoints/')
      //  print(response);
       .then(res=>{
         setData2(res.data);
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
      
<div className="bg-gray-200 container-fluid two p-4 gap-4">
<div className=" one mb-4 rounded-lg  border border-solid shadow-lg p-4">
    <h1 className=" first text-center text-blue-500 text-4xl mt-12">About us</h1>

<div className="flex flex wrap">

<div className="w-full md:w-1/2 bg-gray-200 ">
    {data.map((item,key)=>{

return(

   
      <p key={key} className="text-lg text-blue-500  text-black   p-10 rounded-lg border">
      <h2 className="text-xl text-blue-500 px-8 font-semibold py-10">{item.title}</h2>

      {item.description}</p>
      
)
}
)}
</div>

<div className="w-full md:w-1/2 bg-gray-200 ">


{data2.map((item,key)=>{

return(

      <p key={key} className=" text-lg text-blue-500  text-black p-10  rounded-lg border">
      <h2 className="text-xl text-blue-500 px-8 font-semibold py-10">{item.title}</h2>

      <img  src={pathed+item.pictures} className="w-full  " height="50%" alt={item.pictures}/></p>
      
)
}
)}
      </div>
      </div>

</div>
</div>

      </>
     );
}
