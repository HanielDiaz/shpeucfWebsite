import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style/main.css'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#fff',
            header: 'title'
        }

        this.officeHourSchedule = {
            room: "ENG1 ROOM 140",
            dates: {
                Monday: [],
                Tuesday: [],
                Wednesday: [
                    {
                        name: "Jaime",
                        time: ["11AM - 12PM", "10PM - 11PM"]
                    }

                ],
                thursday: [],
                friday: []
            },
            count1: 0,
            count2: 0,
            currentDay: "",
        }

        this.Sponsors = [
            {
                name: "Google",
                photo: "https://www.shpeucf.com/wp-content/uploads/2019/08/Google-logo-e1565828559704.png",
                link: "https://about.google/",
                description: "Google does stuff"
            }
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
                <div className='center' id='header'>
                    <ul>
                        <li>
                            <Link to="/About">
                                <div style={{ width: 'auto', height: 300, backgroundColor: '#f00' }}/>
                            </Link>
                        </li>
                    </ul>
                </div>
                {this.renderOfficeHours()}
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

