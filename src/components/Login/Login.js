import React, { Component } from 'react';



class Login extends Component {

    state = {
        username: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const loginResponse = await fetch('/auth', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:9000'
                }
            })

            const parsedResponse = await loginResponse.json();
            console.log(parsedResponse)
            if(parsedResponse.success){
                this.props.history.push('/stocks')
            }


        } catch(err) {
            console.log(err);
            return err
        }
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
               <label>
                   Username:
                   <input type="text" name="username" placeholder="username" onChange={this.handleChange} value={this.state.username}/>
               </label>
               <label>
                   Password: 
                   <input text="password" name="password" placeholder="password" onChange={this.handleChange} value={this.state.password}/>
               </label>
               <button type="submit">Login</button>
           </form> 
        )
    }
}


export default Login;