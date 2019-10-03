import React, { Component } from 'react'
import '../style/main.css'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#fff',
            header: 'title'
        }

        this.json = {
            "Dates" : {
                "Monday": {
                    "Jaime": {
                        "Time": "11am - 12pm"
                    }
                },
                "Wednesday": {},
            },
            "Room": "ENG1 ROOM 140"
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
                <div className='center' id='body' style={{flex: 1, flexDirection: 'column'}}>
                    <title>Hello</title>
                    <button  
                    style={{flex: 1, alignSelf: 'center'}}
                    onClick={() => {
                    this.setState({
                        header: 'header'
                    })
                }}/>
                </div>
            </div>
        )
    }
}

