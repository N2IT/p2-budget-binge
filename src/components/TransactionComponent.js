import { useOutletContext } from "react-router-dom"


function TransactionComponent() {
    const [ transactions, onDeleteItem ] = useOutletContext();

    function handleDelete(deletedLine) {
        fetch(`http://localhost:3000/transactions/${deletedLine.id}`, {
            method: 'DELETE'
        })
        .then(r => r.json()) 
        .then(() => onDeleteItem(deletedLine))
        .catch(error => {
            console.error('Error during deletion:', error);
        });
    }
    

    const transactionalData = transactions.map((transaction) => {
        return (
            <tbody key={transaction.id}>
                <tr>
                    <td>{transaction.date}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.description}</td>
                    <td>${parseFloat(transaction.amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    <td>{transaction.notes}</td>
                    <td><button title="delete" onClick={() => handleDelete(transaction)}> ❌ </button></td>
                </tr>
            </tbody>
        )
    })

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
                {transactionalData}
            </table>
        </>
    )
}

export default TransactionComponent