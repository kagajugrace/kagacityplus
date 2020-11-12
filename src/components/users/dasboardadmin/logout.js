import React,{useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios';

function Logout(){
   
    
  
    setTimeout(function(){
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("first_name");
        localStorage.removeItem("id");
        localStorage.removeItem("last_name"); 

 
    },3000)

    return(
<>
hh
</>
    )

}
export default Logout();