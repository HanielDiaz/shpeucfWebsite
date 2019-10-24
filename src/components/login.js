import React, { Component } from 'react'
import { Form } from '../components'
import { loginUser } from '../modules/User'
import '../style/main.css'
import { connect } from 'react-redux'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.fields = [
            {
                name: "email",
                type: "email",
                required: true
            },
            {
                name: "password",
                type: "password",
                required: true,
            },
        ]
    }
    componentWillMount() {
        
    }

    
    render() {
        return (
            <div id='page'>
              <Form fields={this.fields} saveTo={(userCredentials) => {this.props.loginUser(userCredentials)}} />
            </div>
        )
    }
}

const mapDispatchToProps = {
    loginUser
}


export default connect(null,mapDispatchToProps)(Login)