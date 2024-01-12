import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar';
import './App.css';
import './AppMobile.css';

function App() {

  const [ transactions, setTransactions ] = useState([])

   //FETCH TRANSACTION DB
   useEffect(() => {
    fetch('http://localhost:3000/transactions')
        .then(r => r.json())
        .then(transactions => setTransactions(transactions))
}, [])
  
  return (
    <>
      <div class="App-header">
        <NavBar />
      </div>
      <Outlet context={transactions}/>
    </>
  );
}

export default App;
