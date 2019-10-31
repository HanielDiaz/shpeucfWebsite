import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { convertNumToDate, distance } from '../utils';
import '../style/components/calendar.css';
import '../style/main.css';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        
        let active = (eventActive) ? {backgroundColor: '#00009b', color: '#fff'} : {backgroundColor: '#fff', color: '#000'}
        return (
            <div key={name} className='container' style={active}
            onMouseEnter={() => {
                    this.setState({selectedEvent: index})
            }}
            onMouseLeave={() => {
                setTimeout(() => this.setState({selectedEvent: -1}), 500)
            }}
            >
                <div className='date unselectable'>
                    <h2>{date.day}</h2>
                    <span>{date.month}, {date.year}</span>
                </div>
                <div className = 'info unselectable'>
                    <div className='eventData'>
                        <h3>{name}</h3>
                        <p>Name: {name}</p>
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
            events,
            title,
            numOfElements
        } = this.props;
        const {
            container
        } = Styles;
        let formattedEvents = [];
        if(events && events[0] && events[0].date !== Object(events[0].date)){
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

        return (
            <div style={container}>
                <h2 style={{alignSelf: 'center'}}>{title}</h2>
               {formattedEvents.map((event, index) => this.renderItemOne(event, index))}
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


const Styles = {
    container: {
        marginLeft: "auto",
        marginRight: "auto",
        flex: 1,
        backgroundColor: '#F0D03B',
        width: 950,
        height: 350,
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5,
    }
}

export { Calendar }
