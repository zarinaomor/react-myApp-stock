import React, { Component } from 'react';


class StockInfo extends Component {
    render() {
        return(
            <div className="item">
                { this.props.symbol && <p>Stock: { this.props.symbol }</p>}
                { this.props.close && <p>Close: { this.props.close }</p>}
                { this.props.previousClose && <p>Previous Close: { this.props.previousClose }</p>} 
                { this.props.change && <p>Change: { this.props.change }</p> }
                { this.props.changePercent && <p>Change in Percent: { this.props.changePercent }</p> }
            </div>
        )
    }
}


export default StockInfo;