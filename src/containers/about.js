import React, { Component } from 'react'
import { Header } from '../components'
import '../style/main.css'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#fff',
            header: 'title'
        }
    }

    render() {
        return (
            <div id='page'>
                <Header/>
               <div style={{flex: 1, width: 'auto', backgroundColor: '#f00'}}>
                    <h1>hello</h1>
                </div>
            </div>
        )
    }
}

