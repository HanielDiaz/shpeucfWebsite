import React, { Component } from 'react'
import { Header, Calendar } from '../components'
// import { Link } from 'react-router-dom'
import '../style/main.css'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#fff',
            header: 'title'
        }

        this.events =  [
            {
                name: "Hello",
                date: "2019-08-28",
                time: "Now",
                id: "1"
            },
            {
                name: "GBM",
                date: "2019-08-29",
                time: "Now",
                id: "1"
            },
        ]
    }
    componentWillMount() {
        
    }
    renderOfficeHours(officeHours) {
        return (<div style={{width:300,height:300,backgroundColor: '#0f0'}}></div>)
    }
    render() {
        const {
            collapsibleContainer
        } = stylesheet;

        return (
            <div id='page'>
                <Header/>
                {this.renderOfficeHours()}
                <Calendar 
                    title="Events"
                    events={this.events}
                />
                <div className='center' id='body' style={{flex: 1, flexDirection: 'column'}}>
                    <title>Hello</title>
                    <button  
                    style={collapsibleContainer}
                    onClick={() => {this.props.history.push('About')}}/>
                </div>
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

