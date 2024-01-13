import { useOutletContext } from "react-router-dom"


function TransactionComponent() {
    const transactions = useOutletContext();

    function handleDelete(e) {
        console.log(e)
    }

    const transactionalData = transactions.map((transaction) => {
        return (
            <tbody key={transaction.id}>
                <tr>
                    <td>{transaction.date}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.description}</td>
                    <td>${parseFloat(transaction.amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}&nbsp;<span title="edit" > ✏️ </span>&nbsp;<span title="delete" onClick={() => handleDelete(transaction.id)}> ❌ </span></td>
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
                    </tr>
                </thead>
                {transactionalData}
            </table>
        </>
    )
}

export default TransactionComponent