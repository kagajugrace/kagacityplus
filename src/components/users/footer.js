import React ,{useState} from 'react';
import kids from '../../images/toppng.com-african-american-kids-playing-with-frames-african-american-kids-421x526.png'
import logo from '../../images/City Plus.png';
import twitter from '../../images/toppng.com-twitter-logo-png-1687x1687.png' ;
import Inst from '../../images/toppng.com-instagram-png-logo-1455x1454.png';
import Fb from '../../images/toppng.com-facebook-logo-png-flat-1024x1024.png'
function Footer(){
    return(
        <div className="bg-white shadown-lg">
            
            <div class="grid grid-flow-row sm:grid-flow-row md:grid-flow-col lg:grid-flow-row-dense xl:grid-flow-col   font-semibold  gap-12 sm:pl-0 md:pl-20 xl:pl-20 sm:pr-0 md:pr-20 xl:pr-20 mb-4 pt-12 ">

<div >
    <div className="">
    <h1 className="text-gray-800 text-lg font-bold px-4  ">Follow us on:</h1>

    <div className="flex mt-4">
        <img src={Fb} className="w-8 h-8 "/>
        <img src={Inst} className="w-8  h-8 ml-2"/>
        <img src={twitter} className="w-10 ml-2"/></div>
    </div>
</div>

<div>
<h3 className="text-gray-900"><a>Support</a></h3>
<h3 className="text-gray-700"><a>Contact Us</a></h3>
<h3 className="text-gray-700"><a>School </a></h3>
</div>
<div>
<h3 className="text-gray-900">ADDRESS</h3>
<h3 className="text-gray-700">Tel: +250 784981685</h3>
<h3 className="text-gray-700">Email: info@idatech.rw</h3>

</div>

<div className="">
    <h3>Stay Update</h3>
    <input type="text" placeholder="Where Your Email " className="border-b border-blue-700 py-2  px-2 mb-2 focus:border-none" /><br/>
    <button className="bg-red-500 px-4 py-2 text-white uppercase">subscribe</button>
</div>



</div>
<h1 className="text-center text-gray-700 font-semibold">© Copyright Ida Technology Ltd. All Rights Reserved Designed by <span className="text-blue-600">Ida Technology Ltd</span></h1>
        </div>
    )
    }
export default  Footer;