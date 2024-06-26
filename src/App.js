import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar';
import './App.css';
import './AppMobile.css';
import ClickMe from './components/ClickMe';

function App() {

  const [transactions, setTransactions] = useState([])

  //FETCH TRANSACTION DB
  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(r => r.json())
      .then(transactions => setTransactions(transactions))
  }, [])

  // useEffect(() => {
  //   console.log('hi')
  // })

  function onDeleteItem(deletedItem) {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== deletedItem.id)
    setTransactions(updatedTransactions)
  }

  function onAddTransaction(info) {
    setTransactions([...transactions, { ...info, isHighlighted: true }])
    // debugger
  }

  return (
    <>
      <div className="App-header">
        <NavBar />
      </div>
      <Outlet context={[transactions, onDeleteItem, onAddTransaction, setTransactions]} />
    </>
  );
}

export default App;