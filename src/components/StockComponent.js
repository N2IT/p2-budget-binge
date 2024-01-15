

function StockComponent({ stocks, loading }) {


    const faangStocks = stocks.map((stock) => {
        return (
            <div className="stock-listing" key={stock.symbol}>
                <h2 className="stock-name">{stock.symbol}<br />
                    <span className="stock-price">${parseFloat(stock.price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></h2>
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