import React, { Component } from 'react';
import Form from '../Form/Form';
import StockInfo from '../StockInfo/StockInfo';
import ChartLineGraph from '../ChartLineGraph/ChartLineGraph';
import ChartTable from '../ChartTable/ChartTable';
import NewsList from '../NewsList/NewsList';

class StockContainer extends Component {

    state = {
        quote: '',
        stock: {},
        error: '',
        symbol: '',
        close: '',
        previousClose: '',
        change: '',
        changePercent: '',
        chart: [],
        news: [],
    }

    getStock = async (symbol) => {

        try {
            const response = await fetch(`https://api.iextrading.com/1.0/stock/${symbol}/batch?types=quote,news,chart&range=1m&last=10`);
           
            if(response.status !== 200){
                throw Error(response.statusText);
            }

            const stockParsed = await response.json();

            this.setState({
                stock: stockParsed,
                symbol: stockParsed.quote.symbol,
                close: stockParsed.quote.close,
                previousClose: stockParsed.quote.previousClose,
                change: stockParsed.quote.change,
                changePercent: stockParsed.quote.changePercent,
                chart: stockParsed.chart,
                news: stockParsed.news     
            })

        } catch(err){
            console.log(err);
            return err
        }
    }

    render() {
        console.log(this.state.chart)
        const companyName = !!this.state.quote && this.state.quote.companyName
        const chartCloses = []
        const chartDates = []
        this.state.chart.map(chartItem => {
            chartDates.push(chartItem.label)
            chartCloses.push(chartItem.close)
            return null
          })
        
        return(
          <div>
                <Form getStock={this.getStock}/>
                {
                    (this.state.chart.length > 0)
                    && 
                    <div>
                        <StockInfo 
                            symbol={this.state.symbol} 
                            close={this.state.close} 
                            previousClose={this.state.previousClose} 
                            change={this.state.change} 
                            changePercent={this.state.changePercent}
                        />
                        <div className="charts">
                            <ChartLineGraph
                                title={this.state.symbol}
                                chartLabels={chartDates}
                                chartData={chartCloses}
                            />
                        </div>
                            <ChartTable chart={this.state.chart} /> 
                        <div>
                        <h2>{ !!companyName && 'News about '+companyName }</h2>
                            <NewsList news={this.state.news} />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default StockContainer;