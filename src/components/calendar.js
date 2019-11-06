import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { convertNumToDate, distance } from '../utils';
import '../style/components/calendar.css';

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

    componentWillReceiveProps(props) {
        const {
            events
        } = props;
        let formattedEvents = new Array();
        console.log(events)
        if (events && events[0] && events[0].date !== Object(events[0].date)) {
            events.map((item, index) => {
                formattedEvents.push(Object.assign({}, item));
                let date = convertNumToDate(formattedEvents[index].date)
                formattedEvents[index].date = {};
                formattedEvents[index].date.day = date.day;
                formattedEvents[index].date.month = date.month;
                formattedEvents[index].date.year = date.year;
            })
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

    renderItemOne(event, index) {
           const {
            date,
            description,
            eventActive,
            location,
            name,
            points,
            time,
        } = event;

        const {
            selectedEvent
        } = this.state;

        if (this.state.events.length - index > this.props.numOfEvents) return null;

        
        let active = (eventActive) ? {backgroundColor: '#fff'} : {backgroundColor: '#fff'}
        let clickedContainer = (selectedEvent === index) ? "container containerOnClick" : "container";
        return (
            <div key={name+date+time} className={clickedContainer} style={active}
            onClick={() => {
                let num = (selectedEvent === index) ? -1 : index;
                this.setState({selectedEvent: num})
            }}
            >
                <div className='date unselectable'>
                    <h2>{date.day}</h2>
                    <span>{date.month}, {date.year}</span>
                </div>
                <div className = 'info unselectable'>
                    <div className='eventData'>
                        <h3 className="meetingTitle">{name}</h3>
                        <p>time: {time}</p>
                        <p>Location: {location}</p>
                        <p>points: {points}</p>
                    </div>
                   <div>
                        <p className='description'>Description: {description}</p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const {
            title,
            numOfElements
        } = this.props;
        
        return (
            <div className="calendarContainer">
                <h3 style={{textAlign: 'center'}}>{title}</h3>
               {this.state.events.map((event, index) => this.renderItemOne(event, index))}
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
