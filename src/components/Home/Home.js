import React, { Component } from 'react';
import StockItem from '../StockItem/StockItem';
import { Link } from 'react-router-dom';



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

    // deleteStock = async (id, e) => {
    //     console.log(id, ' this is id')
    //     e.preventDefault();
    //     try {
    //         const deleteStock = await fetch('/api/v1/home' + id, {
    //           method: 'DELETE',
    //           credentials: 'include'
    //         });
    //         console.log('inside try')
    //         // const deleteStockJson = await deleteStock.json();
    //         this.setState({stocks: this.state.stocks.filter((stock, i) => stock._id !== id)});
    
    //     } catch(err) {
    //       console.log(err, ' error')
    //     }
    //   }


    render(){
        return(
            <div>
                {/* <img src={logo} alt="Logo" />; */}
                <p><Link to="/login" className='active'>Login</Link></p>
                <p><Link to="/register" className='active'>Sign Up</Link></p>
                <h1 className="home-title">React Stock Market</h1>
                <h3>100 Most Popular</h3>
                <table className="home-table">
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>Last Sales Price</th>
                            <th>Last Sales Size</th>
                            <th>Market Percent</th>
                            <th>Volume</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.allStocks.map((s, i) => {
                            return s < 0 ? (
                                <StockItem key={'stockTable' + i} {...s} />  
                            ) : (
                                <StockItem key={'stockTable' + i} {...s} />
                            )
                        })}
                    </tbody>
                </table>
                <StockItem deleteStock={this.deleteStock} />
                {/* <img class="css-1kfsey7" src="https://d2ue93q3u507c2.cloudfront.net/assets-about/a4a80e964c803ddb7a9fc7459e0eac01.png" srcset="https://d2ue93q3u507c2.cloudfront.net/assets-about/a4a80e964c803ddb7a9fc7459e0eac01.png, https://d2ue93q3u507c2.cloudfront.net/assets-about/6b2e66f81aef0f0d7dbeef37392e0eca.png 2x"> */}
        </div>
        )
    }
}

export default Home;

