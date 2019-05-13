import React, { Component } from 'react';
import CreateStock from '../CreateStock/CreateStock';
// import StocksList from './components/StockList/StockList';



class StockContainer extends Component {
    
    state = {
        stocks: []
    }

    componentDidMount(){
        this.getStocks().then((data) => console.log(data, ' data'));
    }

    getStocks = async () => {

        try {
            const response = await fetch('/api/v1/stocks')

            if(response.status !== 200){
                throw Error(response.statusText);
            }

            const stockParsed = await response.json();
            this.setState({
                stocks: stockParsed.data
            })

        } catch(err){
            console.log(err);
            return err
        }
    }

    addStock = async (stock, e) => {
        e.preventDefault();

        try {
            const createdStock = await fetch('/api/v1/stocks', {
                method: 'POST',
                body: JSON.stringify(stock),
                headers:{
                    'Contet-Type': 'application/json'
                }
            });

            const parsedResponse = await createdStock.json();
            this.setState({
                stocks: [...this.state.stocks, parsedResponse.data]
            });

        } catch(err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                {/* <StocksList stocks={this.state.stocks}/> */}
                <CreateStock />
            </div>
        )
    }
}

export default StockContainer;