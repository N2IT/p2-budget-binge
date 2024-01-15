import { useOutletContext } from "react-router-dom"


function BalanceSummary({ initial }) {

    const [transactions] = useOutletContext();
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
                    <h1 className="dbIncome">Total Reported Income</h1>
                    <h1 className="dbIncome-num">${parseFloat(incomeSumTotal).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                </div>
                <div className="grid-container">
                    <h1 className="dbIncome">Total Reported Expense</h1>
                    <h1 className="dbIncome-num">${parseFloat(expenseSumTotal).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                </div>
                <div className="grid-container">
                <h1 className="dbIncome">Total Balance</h1>
                <h1 className="dbIncome-num">${parseFloat(incomeSumTotal - expenseSumTotal).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
            </div>
            </div>

        </>

    )
}
export default BalanceSummary