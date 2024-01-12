//AddTransactions
import '../App.css';
import TransactionForm from '../components/TransactionFormComp';
import { useOutletContext } from 'react-router-dom'

function AddTransactions() {
    const transactions = useOutletContext()

    return (
        <>
            <main>
                <TransactionForm />
            </main>
        </>
    )
}

export default AddTransactions