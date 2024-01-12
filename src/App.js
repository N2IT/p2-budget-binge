import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar';
import './App.css';
import './AppMobile.css';

function App() {
  
  return (
    <>
      <div class="App-header">
        <NavBar />
      </div>
      <Outlet />
    </>
  );
}

export default App;
