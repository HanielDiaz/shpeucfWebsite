import React, { Component } from 'react'
import { Form } from '../components'
import { loginUser } from '../modules/User'
import '../style/components/login.css'
import { connect } from 'react-redux'


class LoginComponent extends Component {
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
    
    handleSubmit(userCredentials) {
        this.props.loginUser(userCredentials);
    }
    
    render() {
        return (
            <div className='loginContainer'>
              <Form 
              fields={this.fields}
              submitName={"Login"}
              saveTo={(userCredentials) => this.handleSubmit(userCredentials)}
              />
              <h1>Hover over me</h1>
            </div>
        )
    }
}

const mapDispatchToProps = {
    loginUser
}

let Login = connect(null, mapDispatchToProps)(LoginComponent)
export { Login }