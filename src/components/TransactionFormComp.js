import { useState } from 'react'

function TransactionForm() {

    const [ isIncome, setAsIncome ] = useState(true)

    const formData = {

    }

    function toggleDescription(){
        setAsIncome((isIncome) => !isIncome)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(e.target.value)
    }

    return (
        <div class="add-transactions-form">
                    <h1>Add Transactions Here</h1>
                    <form method="post" onSubmit={handleSubmit}>
                        <label htmlFor='Date'>Date </label>
                        <input name="date" label="Date" type="date"></input>
                        <br />
                        <label htmlFor='Amount'>Amount </label>
                        <input name="amount" type="number" min="1" step="any"></input>
                        <br />
                        <label htmlFor='Category'>Category </label>
                        <select onChange={toggleDescription} name="category" id="category">
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                        <br />
                        <label htmlFor='Description'>Description </label>
                        {isIncome ? 
                            <select name="income description" id="income_description">
                                <option value="paycheck">Paycheck</option>
                                <option value="miscellaneous">Miscellaneous</option>
                            </select> 
                            : 
                            <select name="expense description" id="expense_description">
                                <option value="home">Home</option>
                                <option value="utilities">Utilities</option>
                                <option value="groceries">Groceries</option>
                                <option value="auto">Auto</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="other">Other</option>
                            </select>}
                        <br />
                        <button class="button" type="submit">Send It</button>
                    </form>
                </div>

    )
}

export default TransactionForm