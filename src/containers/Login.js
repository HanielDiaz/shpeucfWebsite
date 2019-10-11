import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import '../style/main.css'

import React, { Component } from 'react'
import '../style/main.css'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#fff',
            header: 'title'
        }
    }
    componentWillMount() {
        
    }
    onButtonPress() {
        const {
            email,
            password
        } = this.props;

        if (email === null || email === undefined){
            this.props.registrationError('Please enter your knights email')
            return
        } else if (password === null || password === undefined){
            this.props.registrationError('Please enter your password')
            return
        } else{
            this.props.loginUser({ email, password });
        }
    }
    
    render() {
        return (
            <div id='page'>
               <div style={{flex: 1, width: 'auto', alignContent: 'center', backgroundColor: '#f00'}}>
                    <button></button>
                </div>
            </div>
        )
    }
}