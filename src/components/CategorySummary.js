import { useOutletContext } from "react-router-dom";

function CategorySummary({ initial }) {

    const [transactions] = useOutletContext()
    //filter transactions db by expenses ✔️
    //filter expenses by descriptions
    //sumTotal filtered expenses by description key
    //divide that sumTotal by totalExpense

    // console.log(transactions)

    //EXPENSE TOTAL SUMMARY//
    const expenses = transactions.filter((transaction) => {
        if (transaction.category === "expense") {
            return transaction
        }
    })
    const expenseSum = expenses.map((expense) => expense.amount)
    const expenseSumTotal = expenseSum.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initial);

    //HOME EXPENSES
    const homeExpense = expenses.filter((expense) => expense.description === "home")
    const homeSumTotal = homeExpense.map((paid) => paid.amount)
    const homeExpenseSumTotal = homeSumTotal.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initial);
    const homePercentage = `${(parseFloat(homeExpenseSumTotal / expenseSumTotal)* 100).toFixed(1) }%`

    //AUTO EXPENSES
    const autoExpense = expenses.filter((expense) => expense.description === "auto")
    const autoSumTotal = autoExpense.map((paid) => paid.amount)
    const autoExpenseSumTotal = autoSumTotal.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initial);
    const autoPercentage = `${(parseFloat(autoExpenseSumTotal / expenseSumTotal) * 100).toFixed(1)}%`

    //UTILITIES EXPENSES
    const utilityExpense = expenses.filter((expense) => expense.description === "utilities")
    const utilitySumTotal = utilityExpense.map((paid) => paid.amount)
    const utilityExpenseSumTotal = utilitySumTotal.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initial);
    const utilityPercentage = `${(parseFloat(utilityExpenseSumTotal / expenseSumTotal)* 100).toFixed(1)}%`

    //GROCERIES EXPENSES
    const groceryExpense = expenses.filter((expense) => expense.description === "groceries")
    const grocerySumTotal = groceryExpense.map((paid) => paid.amount)
    const groceryExpenseSumTotal = grocerySumTotal.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initial);
    const groceryPercentage = `${(parseFloat(groceryExpenseSumTotal / expenseSumTotal)* 100).toFixed(1)}%`

    //ENTERTAINMENT EXPENSES
    const entExpense = expenses.filter((expense) => expense.description === "entertainment")
    const entSumTotal = entExpense.map((paid) => paid.amount)
    const entExpenseSumTotal = entSumTotal.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initial);
    const entPercentage = `${(parseFloat(entExpenseSumTotal / expenseSumTotal)* 100).toFixed(1)}%`

    //OTHER EXPENSES
    const otherExpense = expenses.filter((expense) => expense.description === "other")
    const otherSumTotal = otherExpense.map((paid) => paid.amount)
    const otherExpenseSumTotal = otherSumTotal.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initial);
    const otherPercentage = `${(parseFloat(otherExpenseSumTotal / expenseSumTotal)* 100).toFixed(1) }%`


    return (
        <>
            <h3 className="dbIncome">Home</h3>
            <h3 className="dbIncome-num">{homePercentage !== "NaN%" ? homePercentage : "0%"}</h3>
            <h3 className="dbIncome">Auto</h3>
            <h3 className="dbIncome-num">{autoPercentage !== "NaN%" ? autoPercentage : "0%"}</h3>
            <h3 className="dbIncome">Utilities</h3>
            <h3 className="dbIncome-num">{utilityPercentage !== "NaN%" ? utilityPercentage : "0%"}</h3>
            <h3 className="dbIncome">Groceries</h3>
            <h3 className="dbIncome-num">{groceryPercentage !== "NaN%" ? groceryPercentage : "0%"}</h3>
            <h3 className="dbIncome">Entertainment</h3>
            <h3 className="dbIncome-num">{entPercentage !== "NaN%" ? entPercentage : "0%"}</h3>
            <h3 className="dbIncome">Other</h3>
            <h3 className="dbIncome-num">{otherPercentage !== "NaN%" ? otherPercentage : "0%"}</h3>
        </>
    )
}

export default CategorySummary