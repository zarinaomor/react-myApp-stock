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
        this.props.getStock(this.state.stock)
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name="stock" placeholder="Enter Symbol" value={this.state.stock} onChange={this.changeHandler}/>
                <button type="submit">Get Stock</button>
            </form>
        )
    }
}

export default Form;