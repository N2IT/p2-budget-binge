import { useState, useEffect } from 'react'
import IncomeSummary from './IncomeSummary'
import ExpenseSummary from './ExpenseSummary'
import TotalSummary from './TotalSummary'


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

    // INCOME SUMMARY //
    // const incomes = transactions.filter((transaction) => {
    //     if (transaction.category === "income") {
    //         return transaction.amount
    //     }
    // })
    // const incomeSum = incomes.map((income) => income.amount)
    // const initial = 0;
    // const incomeSumTotal = incomeSum.reduce(
    //     (accumulator, currentValue) => accumulator + currentValue, initial);

    // EXPENSE SUMMARY //
    const initial = 0
    const expenses = transactions.filter((transaction) => {
        if (transaction.category === "expense") {
            return transaction.amount
        }
    })
    const expenseSum = expenses.map((expense) => expense.amount)
    const expenseSumTotal = expenseSum.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initial);

    console.log(expenseSumTotal)

    return (
        <>
            {/* Build container that will hold nested dashboard and stockticker items
                3/4 viewport dashboard
                1/4 right side stock tickers */}
            <div className="dbBoxPrimary">
                <IncomeSummary transactions={transactions} />
                
                <div className="grid-container">
                    <h1 className="dbIncome">TOTAL EXPENSE</h1>
                    <h1 className="dbIncome-num">{expenseSumTotal}</h1>
                </div>
                <div className="grid-container">
                    <h1 className="dbIncome">TOTAL BALANCE</h1>
                    <h1 className="dbIncome-num">PlaceHolder</h1>
                </div>
            </div>

        </>

    )
}
export default BalanceSummary