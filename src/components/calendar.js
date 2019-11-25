import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { convertNumToDate } from '../utils';
import '../style/components/calendar.css';
import '../style/main.css';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            selectedEvent: -1,
            txtColor: '#000'
        }
        this.months = {
            "Jan": 0,
            "Feb": 1,
            "Mar": 2,
            "April": 3,
            "May": 4,
            "June": 5,
            "July": 6,
            "Aug": 7,
            "Sep": 8,
            "Oct": 9,
            "Nov": 10,
            "Dec": 11
        }
    }

    UNSAFE_componentWillReceiveProps(props) {
        const {
            events
        } = props;
        let formattedEvents = [];
        console.log(events)
        if (events && events[0] && events[0].date !== Object(events[0].date)) {
            for(let index = 0; index < events.length; index++){
                formattedEvents.push(Object.assign({}, events[index]));
                let date = convertNumToDate(formattedEvents[index].date)
                formattedEvents[index].date = {};
                formattedEvents[index].date.day = date.day;
                formattedEvents[index].date.month = date.month;
                formattedEvents[index].date.year = date.year;
            }
        }

        formattedEvents.sort((a,b) => {
            const {
                year: yearA,
                month: monthA,
                day: dayA
            } = a.date;

            const {
                year: yearB,
                month: monthB,
                day: dayB
            } = b.date;
            
            if (yearA >= yearB){
                console.log(this.months[monthA], this.months[monthB], this.months[monthA] >= this.months[monthB])
                if (this.months[monthA] >= this.months[monthB]) {
                    console.log(dayA, dayB, (dayA <= dayB) ? 1 : -1)
                    return (dayA > dayB) ? 1 : -1;
                } 
                else return -1;
            }
            else return -1;
        })

        this.setState({ events: formattedEvents })
    }

    componentWillMount() {
        
    }


    renderItem(type) {
        
        return (
        <div id="events" className={`${type}`}>
            {this.state.events.map((event, index) => {

                const {
                    date,
                    description,
                    eventActive,
                    location,
                    name,
                    points,
                    time,
                    image
                } = event;

                const {
                    selectedEvent
                } = this.state;

                var img = null;
                if(type === "Two" && image && image !== "") {
                    img = <img className="Two" src={`${image}`}/>
                }

                if (this.state.events.length - index > this.props.numOfEvents) return null;

                
                let active = (eventActive) ? {backgroundColor: '#fff'} : {backgroundColor: '#fff'}
                let clickedContainer = (selectedEvent === index) ? "containerOnClick" : "";
                clickedContainer += ` container unselectable ${(type === "One" ? "clickable" : "")} ${type}`
                return (
                    <div key={name+date+time}
                        className={clickedContainer}
                        style={eventActive ? 
                            {
                                flexDirection: 'column',
                                backgroundImage: `url(${image})`,
                                borderLeftWidth: '6px',
                                borderLeftStyle: 'solid',
                                borderLeftColor: '#f0d03b',
                                borderRadius: '4px'
                            }:
                            {
                                flexDirection: 'column',
                                backgroundImage: `linear-gradient(
                                rgba(255, 255, 255, 0.9),
                                rgba(255, 255, 255, 0.9)
                                ),url(${image})`,
                                backgroundSize:'100% 100%',
                                backgroundPosition: '50% 50%',
                                borderLeftWidth: '6px',
                                borderLeftStyle: 'solid',
                                borderRadius: '4px'
                            }
                            }
                    onClick={() => {
                        if(type === "One") {
                            let num = (selectedEvent === index) ? -1 : index;
                            this.setState({selectedEvent: num})
                        }
                    }}
                    >
                        <div className={`date unselectable ${type}`}>
                            <h2 className={`${type}`}>{date.day}</h2>
                            <span className={`${type}`}>{date.month}, {date.year}</span>
                        </div>
                        <div className = {`info unselectable ${type}`}>
                            <div className={`eventData ${type}`}>
                                <h3 className={`meetingTitle ${type}`}>{name}</h3>
                                <p className={`${type}`}>Time: {time}</p>
                                <p className={`${type}`}>Location: {location}</p>
                                <p className={`${type}`}>points: {points}</p>
                            </div>
                            <p className={`description ${type}`}>{description}</p>
                        </div>
                    </div>
                )
                
            })}
        </div>
        )
    }

    render() {
        const {
            title,
        } = this.props;
        
        return (
            <div className="calendarContainer">
                <h3 id="title">{title}</h3>
                {this.renderItem("Two")}
            </div>
        )
    }
}

Calendar.propTypes = {
    title: PropTypes.string,

    events: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            points: PropTypes.number.isRequired,
            time: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            committee: PropTypes.string,
            type: PropTypes.string,
            eventActive: PropTypes.bool,
            numOfElements: PropTypes.number,
        })).isRequired,
   
}

export { Calendar }
