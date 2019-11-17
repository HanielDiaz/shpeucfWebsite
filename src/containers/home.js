import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Calendar, OfficeHours, Sponsors } from '../components'
import {
    fetchEvents
} from '../modules'
import '../style/main.css'
import '../style/components/layout.css'
import officeHourSchedule from '../data/OfficeHours'
import sponsors from '../data/Sponsors'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }

        this.motto = (Math.floor(Math.random() * 100) % 2 === 0) ?
            'Working with a group of strangers can be terrifying. SHPE is here to tear down walls and build up friendships. We welcome you to a little something we call "familia".' :
            'It is hard to have the competitive advantage in STEM without being left behind. Your SHPE "familia" keeps you included. We provide the development opportunities that will keep your future bright.'

		
    }

    componentDidMount() {
        this.props.fetchEvents()
    }

    render() {
        let eventList;
        if(this.props.eventList)
            eventList = Object.values(this.props.eventList);
        return(
            <body>
                <div id="container">
				    <Header/>
				    <div id="wrapper">
                        <div id="motto">
                            <p style={{fontStyle: 'italic', textAlign: 'center'}}>{this.motto}</p>
                        </div>
                        <h1 id="main">Calendar</h1>
                        <Calendar 
                        numOfEvents={4}
                        title="Upcoming Events"
                        events={eventList}
                        />
                        <h1 id="main">OfficeHours</h1>
                        <OfficeHours officeHourSchedule={officeHourSchedule} />
                        <h1>Sponsors</h1>
                        <hr/>
                        <Sponsors sponsors={sponsors} />
                    </div>
			    </div>
            </body>
        )
    }
}

const mapStateToProps = (state) => ({
    eventList: state.events.eventList
})

const mapDispatchToProps = {
    fetchEvents
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)