import React, { Component } from 'react'
import '../style/main.css'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentWillMount() {

    }
    render() {
        return (
            <div id='page'>
                <div className='center' id='header'>
                    <p>Header</p>
                </div>
                <div className='center' id='body'>
                    <p>Body</p>
                </div>
            </div>
        )
    }
}

