import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar';
import './App.css';
import './AppMobile.css';

function App() {

  const [transactions, setTransactions] = useState([])

  //FETCH TRANSACTION DB
  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(r => r.json())
      .then(transactions => setTransactions(transactions))
  }, [])

  function onDeleteItem(deletedItem){
    console.log(deletedItem)
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== deletedItem.id)
    setTransactions(updatedTransactions)
  }

  function onAddTransaction(info){
    setTransactions([...transactions,info])
  }

  return (
    <>
      <div className="App-header">
        <NavBar />
      </div>
      <Outlet context={[ transactions, onDeleteItem, onAddTransaction ]} />
    </>
  );
}

export default App;