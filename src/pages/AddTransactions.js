//AddTransactions
import '../App.css';
import TransactionForm from '../components/TransactionFormComp';
import { Outlet, useOutletContext } from 'react-router-dom'

function AddTransactions() {
    const transactions = useOutletContext()

    return (
        <>
            <main>
                <TransactionForm />
            </main>
            <Outlet context={transactions} />
        </>
    )
}

export default AddTransactions