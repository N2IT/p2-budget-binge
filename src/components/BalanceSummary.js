import { useState, useEffect } from 'react'


function BalanceSummary() {

    const [transactions, setTransactions] = useState([])
    const initial = 0

    useEffect(() => {
        fetch('http://localhost:3000/transactions')
            .then(r => r.json())
            .then(transactions => setTransactions(transactions))
    }, [])

    //fetch db 
    //filter by category
    //sum filtered results

    //INCOME SUMMARY//
    const incomes = transactions.filter((transaction) => {
        if (transaction.category === "income") {
            return transaction.amount
        }
    })
    const incomeSum = incomes.map((income) => income.amount)
    const incomeSumTotal = incomeSum.reduce(
        (accumulator, currentValue) =>
            accumulator + currentValue, initial)

    //EXPENSE SUMMARY//
    const expenses = transactions.filter((transaction) => {
        if (transaction.category === "expense") {
            return transaction.amount
        }
    })
    const expenseSum = expenses.map((expense) => expense.amount)
    const expenseSumTotal = expenseSum.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initial);

    return (
        <>
            <div className="dbBoxPrimary">
                <div className="grid-container">
                    <h1 className="dbIncome">TOTAL INCOME</h1>
                    <h1 className="dbIncome-num">{incomeSumTotal}</h1>
                </div>
                <div className="grid-container">
                    <h1 className="dbIncome">TOTAL EXPENSE</h1>
                    <h1 className="dbIncome-num">{expenseSumTotal}</h1>
                </div>
                <div className="grid-container">
                <h1 className="dbIncome">TOTAL BALANCE</h1>
                <h1 className="dbIncome-num">{incomeSumTotal - expenseSumTotal}</h1>
            </div>
            </div>

        </>

    )
}
export default BalanceSummary