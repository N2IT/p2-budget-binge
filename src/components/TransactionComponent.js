import { useOutletContext } from "react-router-dom"


function TransactionComponent() {

    const transactions = useOutletContext();

    console.log(transactions)

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
                    <tbody>
                        <tr>
                            <td>1/1/2024</td>
                            <td>Income</td>
                            <td>Paycheck</td>
                            <td>$2000</td>
                        </tr>
                        <tr>
                            <td>1/7/2024</td>
                            <td>Expense</td>
                            <td>Home</td>
                            <td>$1700</td>
                        </tr>
                        <tr>
                            <td>1/1/2024</td>
                            <td>Income</td>
                            <td>Paycheck</td>
                            <td>$2000</td>
                        </tr>
                        <tr>
                            <td>1/1/2024</td>
                            <td>Income</td>
                            <td>Paycheck</td>
                            <td>$2000</td>
                        </tr>
                        <tr>
                            <td>1/1/2024</td>
                            <td>Income</td>
                            <td>Paycheck</td>
                            <td>$2000</td>
                        </tr>
                        <tr>
                            <td>1/1/2024</td>
                            <td>Income</td>
                            <td>Paycheck</td>
                            <td>$2000</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>TOTAL SPEND: </th>
                        </tr>
                        <tr>
                            <td>$11,700</td>
                        </tr>
                    </tfoot>
                </table>
        </>
    )
}

export default TransactionComponent