import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import { loginUser } from '../modules/User'
import '../style/main.css'
import { connect } from 'react-redux'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#fff',
            header: 'title'
        }
    }
    componentWillMount() {
        
    }
    onButtonPress({email, password}) {
        console.log(email, password)

        if (email === null || email === undefined){
            // this.props.registrationError('Please enter your knights email')
            alert("put in an email");
            return
        } else if (password === null || password === undefined){
            // this.props.registrationError('Please enter your password')
                        alert("put in a password");

            return
        } else{
            this.props.loginUser({ email, password });
        }
    }
    
    render() {
        return (
            <div id='page'>
               <div style={{flex: 1, width: 'auto', alignContent: 'center', backgroundColor: '#00f'}}>
                    <button style={{width: 100, height: 100}} onClick={() => this.onButtonPress({email: "test@gmail.com", password: "testing"})}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    loginUser
}


export default connect(null,mapDispatchToProps)(Login)