//Transactions.js
import TransactionComponent from "../components/TransactionComponent"
import { Outlet, useOutletContext } from 'react-router-dom'

function Transactions() {
    const [transactions] = useOutletContext();

    return (
        <>
            <main>
                <h1>Where did all the money go?</h1>
                <div className="table-flow">
                    <TransactionComponent />
                </div>
            </main>
            <Outlet context={transactions} />
        </>
    )
}

export default Transactions