import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar';
import './App.css';
import './AppMobile.css';

function App() {

  // const [ stocks, setStocks ] = useState([])

  // useEffect(() => {
  //   fetch('https://financialmodelingprep.com/api/v3/symbol/NASDAQ?apikey=zSPenQ3OxZC984T38yDveAGOwLjSQjtG')
  //   .then(r=>r.json())
  //   .then(stocks=>setStocks(stocks))
  //   .catch(error=>console.error(error))
  // }, [])
  
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
