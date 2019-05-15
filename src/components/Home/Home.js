import React, { Component } from 'react';

class Home extends Component {
    state={
        allStocks:[]
    }

    componentDidMount(){
        this.getAllStocks().then(data=>{
            this.setState({
                allStocks: data
            })
        })
    }

    getAllStocks= async()=>{
        const allStocks = await fetch('/api/v1/home')
        const parsedData = await allStocks.json()
        console.log(parsedData)
        return parsedData.data
    }
    render(){
        return(
            <div className="home">
                <h1>Home</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name/Symbol</th>
                            <th>Bid Price</th>
                            <th>Last Sales Price</th>
                            <th>Market Percent</th>
                            <th>Volume</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.allStocks.map((s, i)=>{
                        return (
                            <th key={i}>
                            {s.symbol}
                            {s.bidPrice}
                            </th>

                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home