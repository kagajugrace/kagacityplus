import React from 'react';
import '../../css/tailwindcss.css';
//TODO:{telesphore} import ui KIT // change partnering -- added slide 
import 'uikit/dist/css/uikit.css';
import 'uikit/dist/js/uikit';
// import react-icons 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import logo from '../../images/City Plus.png';
export default function Partners(){
    return(
<>
<div className=" py-8 bg-blue-400" id="sponsors">
<div className="container">
<p className=" text-center text-4xl font-extrabold text-gray-100">Our Partnering Schools</p>
 <center><hr className="w-48"/></center> 
</div>
<div uk-slider="center: true" >

<div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

<ul className="uk-slider-items uk-child-width-1-5@s uk-grid">

<li >
    <div className="bg-gray-200 rounded-lg shadow">
      <a href=""> <div className=" ">
            <div className="rounded-lg" uk-scrollspy-class="uk-animation-slide-top">
                <img className="rounded-t-lg md:h-64" src={logo} width="100%" />
             
            </div>
            <div className=" rounded-lg uk-animation-slide-left-small mt-2 mb-4 ">
                <p className="text-gray-700 text-center text-sm px-2 py-2 font-bold">@Company</p>
           
             
            </div>
            
            </div></a> 
    </div>
</li>
<li >
    <div className="bg-gray-200 rounded-lg shadow">
      <a href=""> <div className=" ">
            <div className="rounded-lg" uk-scrollspy-class="uk-animation-slide-top">
                <img className="rounded-t-lg md:h-64" src={logo} width="100%" />
             
            </div>
            <div className=" rounded-lg uk-animation-slide-left-small mt-2 mb-4 ">
                <p className="text-gray-700 text-center text-sm px-2 py-2 font-bold">@Company</p>
           
             
            </div>
            
            </div></a> 
    </div>
</li> <li >
    <div className="bg-gray-200 rounded-lg shadow">
      <a href=""> <div className=" ">
            <div className="rounded-lg" uk-scrollspy-class="uk-animation-slide-top">
                <img className="rounded-t-lg md:h-64" src={logo} width="100%" />
             
            </div>
            <div className=" rounded-lg uk-animation-slide-left-small mt-2 mb-4 ">
                <p className="text-gray-700 text-center text-sm px-2 py-2 font-bold">@Company</p>
           
             
            </div>
            
            </div></a> 
    </div>
</li> <li >
    <div className="bg-gray-200 rounded-lg shadow">
      <a href=""> <div className=" ">
            <div className="rounded-lg" uk-scrollspy-class="uk-animation-slide-top">
                <img className="rounded-t-lg md:h-64" src={logo} width="100%" />
             
            </div>
            <div className=" rounded-lg uk-animation-slide-left-small mt-2 mb-4 ">
                <p className="text-gray-700 text-center text-sm px-2 py-2 font-bold">@Company</p>
           
             
            </div>
            
            </div></a> 
    </div>
</li> <li >
    <div className="bg-gray-200 rounded-lg shadow">
      <a href=""> <div className=" ">
            <div className="rounded-lg" uk-scrollspy-class="uk-animation-slide-top">
                <img className="rounded-t-lg md:h-64" src={logo} width="100%" />
             
            </div>
            <div className=" rounded-lg uk-animation-slide-left-small mt-2 mb-4 ">
                <p className="text-gray-700 text-center text-sm px-2 py-2 font-bold">@Company</p>
           
             
            </div>
            
            </div></a> 
    </div>
</li> <li >
    <div className="bg-gray-200 rounded-lg shadow">
      <a href=""> <div className=" ">
            <div className="rounded-lg" uk-scrollspy-class="uk-animation-slide-top">
                <img className="rounded-t-lg md:h-64" src={logo} width="100%" />
             
            </div>
            <div className=" rounded-lg uk-animation-slide-left-small mt-2 mb-4 ">
                <p className="text-gray-700 text-center text-sm px-2 py-2 font-bold">@Company</p>
           
             
            </div>
            
            </div></a> 
    </div>
</li> <li >
    <div className="bg-gray-200 rounded-lg shadow">
      <a href=""> <div className=" ">
            <div className="rounded-lg" uk-scrollspy-class="uk-animation-slide-top">
                <img className="rounded-t-lg md:h-64" src={logo} width="100%" />
             
            </div>
            <div className=" rounded-lg uk-animation-slide-left-small mt-2 mb-4 ">
                <p className="text-gray-700 text-center text-sm px-2 py-2 font-bold">@Company</p>
           
             
            </div>
            
            </div></a> 
    </div>
</li> <li >
    <div className="bg-gray-200 rounded-lg shadow">
      <a href=""> <div className=" ">
            <div className="rounded-lg" uk-scrollspy-class="uk-animation-slide-top">
                <img className="rounded-t-lg md:h-64" src={logo} width="100%" />
             
            </div>
            <div className=" rounded-lg uk-animation-slide-left-small mt-2 mb-4 ">
                <p className="text-gray-700 text-center text-sm px-2 py-2 font-bold">@Company</p>
           
             
            </div>
            
            </div></a> 
    </div>
</li>


</ul>
<a className="uk-position-center-left uk-position-small uk-hidden-hover bg-purple-600 text-white font-bold rounded-full shadow h-8 w-8 px-3 " href="#"  uk-slider-item="previous"><FaChevronLeft/></a>
<a className="uk-position-center-right uk-position-small uk-hidden-hover bg-purple-600 text-white font-bold rounded-full shadow h-8 w-8 px-3" href="#" uk-slider-item="next"><FaChevronRight /></a>
</div>

<ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>
</div>
</>
    );
}