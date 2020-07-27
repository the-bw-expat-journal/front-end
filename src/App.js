import React from 'react';
import './App.css';
import Login from './components/login/Login';
import Register from './components/sign-up/Register';
import {Switch, Route, useHistory} from 'react-router-dom';
import Nav from "./components/Nav";



function App() {
  return (
    <div className="App">
      <Nav />
      <Route path='/signup'>
        <Register />
      </Route>
      
      <Route exact path="/login">
      <Login />
      </Route>
    </div>
  );
}

export default App;
