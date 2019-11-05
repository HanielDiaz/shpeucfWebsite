import React, { Component } from 'react'
//import { connect } from 'react-redux'
import { Header, BodyLayout, Calendar, OfficeHours, Sponsors } from '../components'
// import { Link } from 'react-router-dom'
import '../style/main.css'
import '../style/components/layout.css'
import officeHourSchedule from '../data/OfficeHours'
import sponsors from '../data/Sponsors'
import events from '../data/Events'
import bg from '../assets/bg_image.jpg' 

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }

        this.motto = (Math.floor(Math.random() * 100) > 5) ?
            'Working with a group of strangers can be terrifying. SHPE is here to tear down walls and build up friendships. We welcome you to a little something we call "familia".' :
            'It is hard to have the competitive advantage in STEM without being left behind. Your SHPE "familia" keeps you included. We provide the development opportunities that will keep your future bright.'

		
    }

    render() {
        console.log(events)
        return(
            <body>
                <div id="container">
				    <Header/>
				    <div id="wrapper" style={{backgroundColor: '#f0d03b'}}>
                        <div id="motto">
                            <p style={{fontStyle: 'italic'}}>{this.motto}</p>
                        </div>
                        <Calendar 
                        title="Upcoming Events"
                        events={events}
                        />
                        <OfficeHours officeHourSchedule={officeHourSchedule} />
                        <h2 style={{textAlign:'center'}}>Sponsors</h2>
                        <hr />
                        <Sponsors sponsors={sponsors} />
                    </div>
			    </div>
            </body>
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
