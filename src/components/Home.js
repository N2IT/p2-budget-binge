import StockComponent from "./StockComponent";
import BalanceSummary from './BalanceSummary';
import CategorySummary from "./CategorySummary";
import React, { useState, useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import '../App.css';
import RecentTransactions from "./RecentTransactions";
import { NavLink } from "react-router-dom";

function Home() {

    const [transactions] = useOutletContext();
    const [stocks, setStocks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
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
            return stock.symbol && stock.price && stock.previousClose
        } else if (stock.symbol === "META") {
            return stock.symbol && stock.price && stock.previousClose
        } else if (stock.symbol === "AMZN") {
            return stock.symbol && stock.price && stock.previousClose
        } else if (stock.symbol === 'NFLX') {
            return stock.symbol && stock.price && stock.previousClose
        } else if (stock.symbol === "GOOGL") {
            return stock.symbol && stock.price && stock.previousClose
        } else {
            return null
        }
    })



    const timeStamp = new Date();

    return (
        <>
            <main>
                <div className="grid-container">
                    <div className='border'>
                        <BalanceSummary initial={initial} />
                        <div className="category-breakdown">
                            <h2 className="list-header">% Breakdown by Expense</h2>
                            <div className="grid-container">
                                <CategorySummary initial={initial} />
                            </div>
                        </div>
                    </div>
                    <div className="dbTickerSideBar">
                        <div className="refresh-date">{`Current Date / Time: ${timeStamp}`}<br /><br /><span>MAANG Stock Tickers vs Prior Days Closing Price (Update on Refresh)</span></div>
                        <div className="stock-box">
                            <StockComponent stocks={stocksToDisplay} loading={isLoading} />
                        </div>
                    </div>
                    <div className="recent-transactions">
                        <h2 className='list-header'>Recent Transactions</h2>
                        <RecentTransactions />
                        <NavLink
                            to="/transaction-list"
                            className="nav-link"
                        >Manage Transactions
                        </NavLink>
                    </div>
                </div>
                <Outlet context={transactions} />
            </main>
        </>
    );
}

export default Home;