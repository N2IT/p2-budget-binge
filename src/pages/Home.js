import { Outlet, useOutletContext } from "react-router-dom";
import React from "react";
import '../App.css';

function Home() {

    return (
        <>
            <main>
                <h1>Dashboard / Balance</h1>
                {/* Build container that will hold nested dashboard and stockticker items
                3/4 viewport dashboard
                1/4 right side stock tickers */}
                <div className="grid-container">
                    <div className="dbBoxPrimary">
                        <div className="grid-container">
                            <h1 className="dbIncome">TOTAL INCOME</h1>
                            <h1 className="dbIncome-num">$12,000</h1>
                        </div>
                        <div className="grid-container">
                            <h1 className="dbIncome">TOTAL EXPENSE</h1>
                            <h1 className="dbIncome-num">$9,000</h1>
                        </div>
                        <div className="grid-container">
                            <h1 className="dbIncome">TOTAL BALANCE</h1>
                            <h1 className="dbIncome-num">$3,000</h1>
                        </div>
                    </div>
                    <div className="dbTickerSideBar">
                        <p>Insert Date Here</p>
                        <h2>DOW JONES INDEX</h2>
                        <h4>$13,292</h4>
                        <h2>NASDAQ INDEX</h2>
                        <h4>$1,978</h4>
                        <h2>S&P INDEX</h2>
                        <h4>$890.76</h4>
                    </div>
                    <div className="category-breakdown">
                        <h2>% Breakdown by Expense</h2>
                        <div className="grid-container">
                            <h3 className="dbIncome">HOME</h3>
                            <h3 className="dbIncome-num">30%</h3>
                            <h3 className="dbIncome">AUTO</h3>
                            <h3 className="dbIncome-num">10%</h3>
                            <h3 className="dbIncome">UTILITIES</h3>
                            <h3 className="dbIncome-num">20%</h3>
                            <h3 className="dbIncome">GROCERIES</h3>
                            <h3 className="dbIncome-num">15%</h3>
                            <h3 className="dbIncome">ENTERTAINMENT</h3>
                            <h3 className="dbIncome-num">10%</h3>
                            <h3 className="dbIncome">OTHER</h3>
                            <h3 className="dbIncome-num">15%</h3>
                        </div>
                    </div>
                </div>

                {/* Dashboard that will show summary of Total Income, Total Expense, Total Balance */}

                {/* Sidebar that will show rendered stock tickers */}


            </main>
        </>
    );
}

export default Home;