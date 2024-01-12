import '../App.css';

function BalanceSummary() {

    return (
        <>
        {/* Build container that will hold nested dashboard and stockticker items
                3/4 viewport dashboard
                1/4 right side stock tickers */}
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

        </>

    )
}
export default BalanceSummary