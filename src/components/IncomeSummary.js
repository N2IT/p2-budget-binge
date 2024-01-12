
function IncomeSummary({ transactions }) {

    const incomes = transactions.filter((transaction) => {
        if (transaction.category === "income") {
            return transaction.amount
        }
    })
    const incomeSum = incomes.map((income) => income.amount)
    const initial = 0;
    const incomeSumTotal = incomeSum.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initial);

    return (
        <>
            <div className="grid-container">
                <h1 className="dbIncome">TOTAL INCOME</h1>
                <h1 className="dbIncome-num">{incomeSumTotal}</h1>
            </div>
        </>
    )
}

export default IncomeSummary