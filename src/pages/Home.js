import StockComponent from "../components/StockComponent";
import BalanceSummary from '../components/BalanceSummary';
import CategorySummary from "../components/CategorySummary";
import React, { useState, useEffect } from "react";
import '../App.css';

function Home() {

    const [stocks, setStocks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [transactions, setTransactions] = useState([])
    const initial = 0

    //FETCH STOCK API
    useEffect(() => {
        fetch('https://financialmodelingprep.com/api/v3/symbol/NASDAQ?apikey=zSPenQ3OxZC984T38yDveAGOwLjSQjtG')
            .then(r => r.json())
            .then(stocks => setStocks(stocks))
            .then(() => setIsLoading(false))
            .catch(error => console.error(error))
    }, [])

    const stocksToDisplay = stocks.filter((stock) => {
        if (stock.symbol === "AAPL") {
            return stock.symbol && stock.price
        } else if (stock.symbol === "META") {
            return stock.symbol && stock.price
        } else if (stock.symbol === "AMZN") {
            return stock.symbol && stock.price
        } else if (stock.symbol === 'NFLX') {
            return stock.symbol && stock.price
        } else if (stock.symbol === "GOOGL") {
            return stock.symbol && stock.price
        }
    })

    
    //FETCH TRANSACTION DB
    useEffect(() => {
        fetch('http://localhost:3000/transactions')
            .then(r => r.json())
            .then(transactions => setTransactions(transactions))
    }, [])

    return (
        <>
            <main>
                <h1>Dashboard / Balance</h1>
                <div className="grid-container">
                    <BalanceSummary transactions={transactions} setTransactions={setTransactions} initial={initial}/>
                    <div className="dbTickerSideBar">
                        <StockComponent stocks={stocksToDisplay} loading={isLoading} />
                    </div>
                    <div className="category-breakdown">
                        <h2>% Breakdown by Expense</h2>
                        <div className="grid-container">
                            <CategorySummary transactions={transactions} initial={initial} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;