import { useOutletContext } from "react-router-dom"
import { useEffect } from 'react'


function TransactionComponent() {
    const [transactions, onDeleteItem, onAddTransaction, setTransactions] = useOutletContext();

    function handleDelete(deletedLine) {
        // console.log(deletedLine.id)
        fetch(`http://localhost:3000/transactions/${deletedLine.id}`, {
            method: 'DELETE'
        })
            .then(r => r.json())
            .then(() => onDeleteItem(deletedLine))
            .catch(error => {
                console.error('Error during deletion:', error);
            });
    }

    useEffect(() => {
        if (transactions.some(transaction => transaction.isHighlighted)) {
            const timer = setTimeout(() => {
                setTransactions(transactions =>
                    transactions.map(transaction =>
                        transaction.isHighlighted ? { ...transaction, isHighlighted: false } : transaction))
            }, 500);
            return () => clearTimeout(timer)
        }
    }, [transactions])

    
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>CATEGORY</th>
                        <th>DESCRIPTION</th>
                        <th>AMOUNT</th>
                        <th>NOTES</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id} className={transaction.isHighlighted ? 'highlighted' : ''}>
                            <td>{transaction.date}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.description}</td>
                            <td>${parseFloat(transaction.amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                            <td>{transaction.notes}</td>
                            <td><h1 className="delete-btn" title="delete" onClick={() => handleDelete(transaction)}> X </h1></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )  
}

export default TransactionComponent