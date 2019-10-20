import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
//import firebase from 'firebase'
import '../style/main.css'
import { Header } from '../components/header'
// import Login from '../components/login'
// import { connect } from 'react-redux'
import { loginUser } from '../modules/User'


export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentWillMount() {
        
    }

    handleChange(event) {
        let em = event.target.email;
        let pw = event.target.password;
        this.setState({em, pw});
    }

    handleSubmit(event) {
        
        let em = this.state.email
        let pw = this.state.password
        console.log(em, pw)
        
        if (em === null || em === undefined){
            alert("put in an email");
        } else if (pw === null || pw === undefined){
            alert("put in a password");
        } else{
            loginUser({em, pw});
        }
        event.preventDefault();

    }

    render() {
        return (
            <div>
                <Header/>
                <form onSubmit={this.handleSubmit}>
                    <h2>Sign In</h2>
                    <label>
                        Email:
                        <input type="email" ref={this.state.email} value={this.state.email} placeholder="Enter Your Knights Email" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input type="password" ref={this.state.password} value={this.state.password} placeholder="Enter Password" onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}