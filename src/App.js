import React from 'react';
import './css/tailwindcss.css';
import './App.css'
import Nav1 from './components/navbar1.js';
import Body1 from './components/Body1';
import Login from './components/users/Login';
import Signup from './components/users/Signup'
import Home from './components/users/home';
import About from './components/users/About';
import Update from './components/users/Update';

import Dash from './components/users/dasboardadmin/home';

import Logout from'./components/users/dasboardadmin/logout';
import RegStusent from './components/users/dasboardadmin/regist';
import AddTeacher from './components/users/dasboardadmin/addteacher';
import UpdateTeacher from './components/users/dasboardadmin/updateteacher';
import Students from './components/users/dasboardadmin/Report';
import StudentsComponent from './components/users/dasboardadmin/Map';
import Upload from './components/users/dasboardadmin/Upload';
import Temprpt from './components/users/dasboardadmin/Temprpt';
import Attendancerpt from './components/users/dasboardadmin/Attendancerpt';
import Attendance from './components/users/dasboardadmin/Attendance';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Temperature from './components/users/dasboardadmin/Temperature';
import Temp from'./components/users/dasboardadmin/Temp'

function App() {
  return (
    <div className="">


<Router>
        <Switch>

          <Route exact path="/">
          <Body1/>
          </Route>

          <Route  path="/registartion-student">
          <RegStusent/>
          </Route>


          <Route  path="/login">
          <Login/>
          </Route>

          <Route  path="/user-signup">
          <Signup/>
          </Route>
{/* 
          <Route exact path="/account">
          <Signup/>
          </Route> */}

          
          <Route exact path="/Home/educucation">
          <Home/>
          </Route>

          <Route path="/about">
          <About/>
          </Route>

          <Route path="/logout">
          <Logout/>
          </Route>

           <Route exact path="/update">
          <Update/>
          </Route>

           <Route path="/update">
          <Update/>
          </Route>


          <Route path="/Dashboard-Home">
          <Dash/>
          </Route>

          <Route path="/Dashboard-addteacher">
          <AddTeacher/>
          </Route>
          <Route path="/Dashboard-updateteacher">
          <UpdateTeacher/>
          </Route>

          <Route path="/Temperature-page">
          <Temperature/>
          </Route>

          <Route path="/Temp-page">
          <Temp/>
          </Route>
          <Route path="/attendance-page">
          <Attendance/>
          </Route>
          
          <Route path="/students">
          <Students/>
          </Route>
          <Route path="/map">
          <StudentsComponent/>
          </Route>
    

          <Route path="/upload">
          <Upload/>
          </Route>
          <Route path="/temprpt">
          <Temprpt/>
          </Route>
    
          <Route path="/attendancerpt">
          <Attendancerpt/>
          </Route>
          </Switch>
          </Router>
    </div>
  );
}

export default App;