import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, BodyLayout } from '../components'
// import { Link } from 'react-router-dom'
import '../style/main.css'
import '../style/components/layout.css'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
		
    }

    render() {

        return (
            <div id="container">
                <h1>SHPE UCF</h1>
				<Header/>
				<BodyLayout/>
			</div>
        )
    }
}

const stylesheet = {
    collapsibleContainer: {
        backgroundColor: '#f00',
        flex: 1
    },
    tableContainer : {

    },
    tableItem: {

    }
}
