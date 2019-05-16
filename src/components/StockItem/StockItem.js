import React from 'react';

const StockItem = ({
    symbol,
    lastSalePrice,
    lastSaleSize,
    marketPercent,
    volume,
    _id,
    deleteStock
}) => {
    return (
        <tr>
            <th>{symbol}</th>
            <td>{lastSalePrice}</td>
            <td>{lastSaleSize}</td>
            <td>{marketPercent}</td>
            <td>{volume}</td>
            {/* <button onClick={deleteStock.bind(null, _id)}>Delete</button> */}
        </tr>

    )
}


export default StockItem;