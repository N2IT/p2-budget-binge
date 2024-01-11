//AddTransactions
import '../App.css';

function AddTransactions() {
    return (
        <>
            <main>
                <div class="add-transactions-form">
                    <h1>Add Transactions Here</h1>
                    <form>
                        <label htmlFor='Date'>Date </label>
                        <input label="Date" type="date"></input>
                        <br />
                        <label htmlFor='Amount'>Amount </label>
                        <input type="number" min="1" step="any"></input>
                        <br />
                        <label htmlFor='Category'>Category </label>
                        <select name="category" id="category">
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                        <br />
                        <label htmlFor='Income Description'>Description </label>
                        <select name="income description" id="income_description">
                            <option value="paycheck">Paycheck</option>
                            <option value="miscellaneous">Miscellaneous</option>
                        </select>
                        <br />
                        <label htmlFor='Expense Description'>Description </label>
                        <select name="expense description" id="expense_description">
                            <option value="home">Home</option>
                            <option value="utilities">Utilities</option>
                            <option value="groceries">Groceries</option>
                            <option value="auto">Auto</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="other">Other</option>
                        </select>
                    </form>
                </div>
            </main>
        </>
    )
}

export default AddTransactions