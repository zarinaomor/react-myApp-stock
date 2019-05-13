import React, { Component } from 'react';

class CreateStock extends Component {

    state = {

    }

    updateStock = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    render() {
        return(
            <form>
                <label>
                    Stock:
                    <input type="text" name=""/>
                </label>
                <label>
                    <input type="text" name=""/>
                </label>
                <button type="submit">Create</button>
            </form>
        )
    }
}

export default CreateStock;