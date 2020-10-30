import React,{useState} from 'react';
import logo from '../images/City Plus.png';
import menu from '../images/menu-outline.svg';
import close from '../images/close-outline.svg'
 function Nav(){
     const[drop,setDrop]=useState(false);
     const[dropdown,setDropmenu]=useState(0);

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
    <nav className="flex shadow-lg">
<div className="w-1/2 md:ml-10"><img src={logo}  className="ml-2 w-16 h-16"/></div>
<div className="w-1/2 text-right   text-underline hover:no-underline  text-xl font-bold py-4 hidden md:block">
    <a className="p-4 cursor-pointer text-gray-700 hover:text-blue-700">Home</a>
    <a className="p-4 cursor-pointer text-gray-700 hover:text-blue-700">About</a>
    <a className="p-4 cursor-pointer  text-gray-700 hover:text-blue-700">Religion Service</a>
    <a className="mr-8 border-2  text-gray-700 hover:text-white border-blue-700 py-2 px-2 rounded hover:bg-blue-700 hover:border-none cursor-pointer">Education Service</a>
    </div>
    <div className="w-1/2 text-right text-white hover:text-white text-underline hover:no-underline  text-xl font-bold py-4 block md:hidden">


   {drop?<a className="float-right" onClick={handleclicked}><img src={close} className="w-10 h-10 ml-24" /></a>:<a className="float-right" onClick={handleclicked}><img src={menu} className="w-10 h-10 ml-24" /></a>}
</div>



    </nav>
    {drop?<div className=" block md:hidden  shadow-lg text-center text-gray-700 hover:text-white text-underline hover:no-underline  text-xl font-bold ">
        <div className="">
<a className=" cursor-pointer hover:text-blue-700">Home</a></div>
<div className="p-2"> <a className=" cursor-pointer hover:text-blue-700 ">About</a></div>
<div className="p-2">  <a className=" cursor-pointer hover:text-blue-700 ">Religion Service</a></div>
<div className="p-4">   <a className="mt-8 border-2 border-blue-700 py-2 px-2 rounded hover:bg-blue-700 hover:border-none cursor-pointer">Education Service</a></div>

</div>:<div> </div>}
    </div>

)
}
export default Nav;