import { useState, useEffect } from 'react'
function BalanceSummary() {

    const [transactions, setTransactions] = useState([])


    useEffect(() => {
        fetch('http://localhost:3000/transactions')
            .then(r => r.json())
            .then(transactions => setTransactions(transactions))
    }, [])

    //fetch db 
    //filter by category
    //sum filtered results

    const incomes = transactions.filter((transaction) => {
        if (transaction.category === "income") {
            return transaction.amount
        }
    })
    const incomeSum=incomes.map((income) => income.amount)
    const initial = 0;
    const incomeSumTotal=incomeSum.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initial);
    
    console.log(incomeSumTotal)

    return (
        <>
            {/* Build container that will hold nested dashboard and stockticker items
                3/4 viewport dashboard
                1/4 right side stock tickers */}
            <div className="dbBoxPrimary">
                <div className="grid-container">
                    <h1 className="dbIncome">TOTAL INCOME</h1>
                    <h1 className="dbIncome-num">{incomeSumTotal}</h1>
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