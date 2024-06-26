import { useState } from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom'


function AddTransaction() {
    const [transactions, onDeleteItem, onAddTransaction] = useOutletContext();
    const navigate = useNavigate();

    const [date, setDate] = useState("")
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState("income")
    const [description, setDescription] = useState("paycheck")
    const [isIncome, setAsIncome] = useState(true)
    const [notes, setNotes] = useState("")

    const formData = {
        date: date,
        amount: parseFloat(amount),
        category: category,
        description: description,
        notes: notes
    }

    function toggleCategory(e) {
        setAsIncome((income) => !income)
        setCategory(e)
        if (e !== 'income') {
            setDescription('home')
        } else { setDescription('paycheck') }
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/transactions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then((data) => {
                console.log(data)
                onAddTransaction(data)
                navigate("/transaction-list")
            })
            .catch(error => {
                console.error('Error during transaction addition:', error);
            });
    }

    return (
        <main>
            <div className="add-transactions-form">
                <h1 className='list-header'>Add Transactions Here</h1>
                <form className="formStyle" method="post" onSubmit={handleSubmit}>
                    <label htmlFor='Date'>Date </label>
                    <input value={date} onChange={(e) => setDate(e.target.value)} name="date" label="Date" type="date" required></input>
                    <br />
                    <label htmlFor='Amount'>Amount </label>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} name="amount" type="number" min="1" step="any" required></input>
                    <br />
                    <label htmlFor='Category'>Category </label>
                    <select value={category} onChange={(e) => toggleCategory(e.target.value)} name="category" id="category">
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                    <br />
                    <label htmlFor='Description'>Description </label>
                    {isIncome ?
                        <select value={description} onChange={(e) => setDescription(e.target.value)} name="income description" id="income_description">
                            <option value="paycheck">Paycheck</option>
                            <option value="miscellaneous">Miscellaneous</option>
                        </select>
                        :
                        <select value={description} onChange={(e) => setDescription(e.target.value)} name="expense description" id="expense_description">
                            <option value="home">Home</option>
                            <option value="utilities">Utilities</option>
                            <option value="groceries">Groceries</option>
                            <option value="auto">Auto</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="other">Other</option>
                        </select>}
                    <br />
                    <label htmlFor='Notes'>Notes </label>
                    <input value={notes} style={{ border: "1px solid #000" }} onChange={(e) => setNotes(e.target.value)} name="notes" id="notes"></input>
                    <br />
                    {date && amount ? <button className="button" type="submit">Send It</button> : null}
                </form>
            </div>
            <br /><br /><br />
        </main>
    )
}

export default AddTransaction