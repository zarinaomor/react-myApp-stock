import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Login extends Component {

    state = {
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
                    'Contet-Type': 'application/json'
                }
            })

            const parsedResponse = await loginResponse.json();

            if(parsedResponse.data === 'login successful'){
                this.props.history.push('stocks')
            }


        } catch(err) {
            console.log(err);
            return err
        }
    }

    render() {
        return(
            this.state.logged
            ? <Redirect to='/' />
            :<form>
               <label>
                   Username:
                   <input type="text" name="username" placeholder="username" onChange={this.handleChange} />
               </label>
               <label>
                   Password: 
                   <input text="password" name="password" placeholder="password" onChange={this.handleChange} />
               </label>
               <button type="submit">Login</button>
           </form> 
        )
    }
}


export default Login;