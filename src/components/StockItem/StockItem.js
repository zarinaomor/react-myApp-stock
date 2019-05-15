import React from 'react';

const StockItem = ({
    date,
    open,
    high,
    low,
    close
}) => {
    return (
        <tr>
            <th>{date}</th>
            <td>{open}</td>
            <td>{high}</td>
            <td>{low}</td>
            <td>{close}</td>
        </tr>
    )
}


export default StockItem ;