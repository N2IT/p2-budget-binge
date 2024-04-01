import { useOutletContext } from "react-router-dom"


function RecentTransactions() {
    const [transactions] = useOutletContext();

    const transactionalData = transactions.map((transaction) => {
        return (
            <tbody key={transaction.id}>
                <tr>
                    <td>{transaction.date}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.description}</td>
                    <td>${parseFloat(transaction.amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    <td>{transaction.notes}</td>
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
                    </tr>
                </thead>
                {transactionalData}
            </table>
        </>
    )
}

export default RecentTransactions