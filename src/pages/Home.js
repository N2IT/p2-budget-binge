import React from 'react';
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
                    <div class="dbBoxPrimary">
                        <h2>This is where the balance db will live</h2>
                        <h2>This is where the balance db will live</h2>
                        <h2>This is where the balance db will live</h2>
                        <h2>This is where the balance db will live</h2>
                        <h2>This is where the balance db will live</h2>
                        <h2>This is where the balance db will live</h2>

                    </div>
                    <div className="dbTickerSideBar">
                        <h2>This is where the ticker info will live</h2>
                    </div>
                    <div className="category-breakdown">
                        <h2>This is where the category breakdown by % will live</h2>
                    </div>
                </div>

                {/* Dashboard that will show summary of Total Income, Total Expense, Total Balance */}

                {/* Sidebar that will show rendered stock tickers */}


            </main>
        </>
    );
}

export default Home;