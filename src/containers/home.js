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
            color: '#fff',
            header: 'title'
        }
		
    }

    render() {

        return (
            <div id="container">
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
