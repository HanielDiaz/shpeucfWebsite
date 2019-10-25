import React, { Component } from 'react'
import { Form } from '../components'
import { loginUser } from '../modules/User'
import '../style/components/login.css'
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
            <div className='loginContainer'>
              <Form 
              fields={this.fields}
              submitName={"Login"}
              saveTo={(userCredentials) => {this.props.loginUser(userCredentials)}}
              />
              
            </div>
        )
    }
}

const mapDispatchToProps = {
    loginUser
}


export default connect(null,mapDispatchToProps)(Login)