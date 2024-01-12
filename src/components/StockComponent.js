import { Link, useOutletContext } from 'react-router-dom'

function StockComponent({ stock }) {
    // const stocks = useOutletContext();
    // console.log(stocks)


    return (
        <>
            <div>{stock}</div>
        </>
    )
}

export default StockComponent