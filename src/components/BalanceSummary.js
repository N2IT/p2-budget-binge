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
            <h3 className="list-header">Dashboard / Balance</h3>
                <div className="grid-container">
                    <h3 className="dbIncome test">Total Reported Income</h3>
                    <h3 className="dbIncome-num test">${parseFloat(incomeSumTotal).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                </div>
                <div className="grid-container">
                    <h3 className="dbIncome test">Total Reported Expense</h3>
                    <h3 className="dbIncome-num test">${parseFloat(expenseSumTotal).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                </div>
                <div className="grid-container">
                <h3 className="dbIncome test">Total Balance</h3>
                <h3 className="dbIncome-num test">${parseFloat(incomeSumTotal - expenseSumTotal).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
            </div>
            </div>

        </>

    )
}
export default BalanceSummary