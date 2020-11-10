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
import Dash from './components/users/dasboardadmin/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="">


<Router>
        <Switch>

          <Route exact path="/">
          <Body1/>
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

           <Route exact path="/update">
          <Update/>
          </Route>

           <Route path="/update">
          <Update/>
          </Route>


          <Route path="/Dashboard-Home">
          <Dash/>
          </Route>

          </Switch>
          </Router>
    </div>
  );
}

export default App;