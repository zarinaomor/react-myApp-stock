import React from 'react';

const StockItem = ({
    symbol,
    lastSalePrice,
    lastSaleSize,
    marketPercent,
    volume
}) => {
    return (
        <tr>
            <th>{symbol}</th>
            <td>{lastSalePrice}</td>
            <td>{lastSaleSize}</td>
            <td>{marketPercent}</td>
            <td>{volume}</td>
            {/* <button onClick={this.props.deleteStock.bind(null, stocks._id)}>Delete</button> */}
        </tr>

    )
}


export default StockItem;