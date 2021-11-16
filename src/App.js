import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Plant from './components/Plant'
import EditPlant from './components/EditPlant';
import EditUser from './components/EditUser';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import NewPlant from './components/NewPlant';
import NewUser from './components/NewUser';
import PlantList from './components/PlantList';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Water My Plants</h1>
        <nav>
          <Link to="/login">Log In </Link>
          <Link to="/logout">Log Out </Link>
          <Link to="/plants">My Plants </Link>
          <Link to="/newUser">Create Account</Link>
          <Link to="/editUser">My Account </Link>
        </nav>
      </header>
      <Routes>
        <Route exact path={'/plants/:id'} element={<Plant/>}/>
        <Route exact path={'/plants/:id/edit'} element={<EditPlant/>}/>
        <Route exact path={'/plants/new'} element={<NewPlant/>}/>
        <Route exact path={'/plants'} element={<PlantList/>}/>
        <Route exact path={'/login'} element={<LogIn />}/>
        <Route exact path={'/logout'} element={<LogOut />}/>
        <Route exact path={'/newuser'} element={<NewUser/>}/>
        <Route exact path={'/edituser'} element={<EditUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
