//Transactions.js
import TransactionList from "./TransactionList"
import { Outlet, useOutletContext } from 'react-router-dom'

function Transactions() {
    const [transactions] = useOutletContext();

    return (
        <>
            <main>
                <h1 className="list-header">Where'd the dough go?</h1>
                <div className="table-flow">
                    <TransactionList />
                </div>
            </main>
            <Outlet context={transactions} />
        </>
    )
}

export default Transactions