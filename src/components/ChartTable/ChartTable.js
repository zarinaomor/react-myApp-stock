import React from 'react';
import ChartItem from '../ChartItem/ChartItem';


const ChartTable = ({ chart }) => (
    <div>
        <table className="item-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Close</th>
                </tr>
            </thead>
            <tbody>
                {chart.map((chartItem, i) => {
                    return chartItem.change < 0 ? (
                        <ChartItem key={'chartTable' + i} {...chartItem} stockIsUp />  
                    ) : (
                        <ChartItem key={'chartTable' + i} {...chartItem} />
                    )
                })}
            </tbody>
        </table>
    </div>
)

export default ChartTable;