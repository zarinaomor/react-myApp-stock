import React, { Component } from 'react';


class Register extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: ''
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
        return (
           <div className="register">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
                        <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} value={this.state.firstName}/>
                    </label>
                    <br />
                    <label>
                        Last Name:
                        <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} value={this.state.lastName}/>
                    </label>
                    <br />
                    <label>
                        email:
                        <input type="text" name="email" placeholder="email" onChange={this.handleChange} value={this.state.email}/>
                    </label>
                    <br />
                    <label>
                        Username:
                        <input type="text" name="username" placeholder="username" onChange={this.handleChange} value={this.state.username}/>
                    </label>
                    <br />
                    <label>
                        Password: 
                        <input text="password" name="password" placeholder="password" onChange={this.handleChange} value={this.state.password}/>
                    </label>
                    <br />
                    <button type="submit">Register</button>
            </form> 
           </div>
        )
    }
}

export default Register;

  