import React, { Component } from 'react';


class Form extends Component {
    
    state = {
        stock: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e)=>{
        e.preventDefault()
        this.props.getStock(this.state.stock);
        this.setState({
            stock: ''
        })
    }
    render() {
        return (
            <div className="search">
                <form onSubmit={this.submitHandler}>
                    <input id="mainInput" type="text" name="stock" placeholder="Enter Symbol" value={this.state.stock} onChange={this.changeHandler}/>
                    <button type="submit">Get Stock</button>
                </form>
            </div>
        )
    }
}

export default Form;