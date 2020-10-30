import React from 'react';
import './css/tailwindcss.css';
import './App.css'
import Nav1 from './components/navbar1.js';
import Body1 from './components/body1';
import Login from './components/users/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="">
<Nav1/>
<Body1/>

<Router>
        <Switch>
          <Route exact path="/">
          <Body1/>
          </Route>

          <Route exact path="/login">
          <Login/>
          </Route>

          </Switch>
          </Router>
    </div>
  );
}

export default App;
