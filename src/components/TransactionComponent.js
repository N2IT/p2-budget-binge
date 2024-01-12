import { useOutletContext } from "react-router-dom"


function TransactionComponent() {
    const transactions = useOutletContext();

    const transactionalData = transactions.map((transaction) => {
        return (
            <tbody>
                <tr>
                    <td>{transaction.date}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
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