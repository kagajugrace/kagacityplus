import React,{useState} from 'react';
import logo from '../../images/City Plus.png';
import menu from '../../images/menu-outline.svg';
import close from '../../images/close-outline.svg'

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
    <nav className="fixed-top flex w-full shadow-lg bg-gradient-to-r from-blue-200 via-gray-200 to-gray-100">
<div className="w-1/2 "><a href="/"><img src={logo}  className=" w-16 h-16"/></a></div>
<div className="navbar-container w-1/2 text-right   text-underline hover:no-underline     py-4 hidden md:block">
    <a href="/Home/educucation" className="p-4 cursor-pointer text-gray-900 hover:text-blue-700 font-bold text-md" >Home</a>


    <a href="/about" className="p-4 cursor-pointer text-gray-900 hover:text-blue-700 font-bold text-md">About</a>
    <a href="https://cityplus.rw/" className="p-4 cursor-pointer  text-gray-900 hover:text-blue-700 font-bold text-md">Religion Service</a>
    <a href="/login" className=" p-4 cursor-pointer  text-gray-900 hover:text-blue-700 font-bold text-md">Login</a>
    <a href="/user-signup" className="mr-8 px-4 bg-blue-500 text-white py-2  cursor-pointer rounded hover:bg-blue-700">Get Start</a>

    </div>
    <div className="w-1/2 text-right text-white hover:text-white  text-underline hover:no-underline  text-xl font-bold py-4 block md:hidden">


   {drop?<a className="float-right" onClick={handleclicked}><img src={close} className="w-10 h-10 ml-24" />
   </a>:<a className="float-right" onClick={handleclicked}><img src={menu} className="w-10 h-10 ml-24" /></a>}
</div>



    </nav>
    {drop?<div className="block md:hidden  shadow-lg text-center text-gray-700 hover:text-white text-underline hover:no-underline  text-xl font-bold ">
        <div className="">
<a className=" cursor-pointer hover:text-blue-700">Home</a></div>
<div className="p-2"> <a href="/about" className=" cursor-pointer hover:text-blue-700 text-gray-300 ">About</a></div>
<div className="p-2">  <a href="https://cityplus.rw/" className=" cursor-pointer hover:text-blue-700 ">Religion Service</a></div>
<a href="/login" className=" p-4 cursor-pointer  text-gray-900 hover:text-blue-700 font-bold text-md">Login</a>
    <a href="/user-signup" className="mr-8 px-4 bg-blue-500 text-white py-2  cursor-pointer rounded hover:bg-blue-700">Get Start</a>

</div>:<div> </div>}
    </div>

)
}
export default Nav;