

function StockComponent({ stocks, loading }) {
    

    const faangStocks = stocks.map((stock) => {
        return (
            <div key={stock.symbol}>
                <h2>{stock.symbol}</h2>
                <h3>${parseFloat(stock.price).toFixed(2)}</h3>
            </div>
        )
    })

    return (
        <>
            <div>
                {loading ? <h2>Loading...</h2> : faangStocks}
            </div>
        </>
    )
}

export default StockComponent