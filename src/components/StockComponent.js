function StockComponent({ stocks, loading }) {

    const faangStocks = stocks.map((stock) => {
        let prevClosePrice = parseFloat(stock.previousClose).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        let stockPrice = parseFloat(stock.price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        return (
            <div className="stock-listing" key={stock.symbol} >
                <h2 className="stock-name">{stock.symbol}</h2>
                {prevClosePrice > stockPrice ? <h2 className="stock-price down">{stockPrice} 🔻</h2> : <h2 className="stock-price up">{stockPrice} ^</h2>}
                
                    {/* <span className="stock-price">{}</span></h2> */}
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