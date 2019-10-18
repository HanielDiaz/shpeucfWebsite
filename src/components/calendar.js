import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { convertNumToDate } from '../utils';
import '../style/components/calendar.css';
import '../style/main.css';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEvent: -1,
        }
    }

    componentWillMount() {
        
    }

    /*
        Things that need to be shown:
            Today's Date,
            Events for the next 30 days,
            The Month we're in
            Option to see future events
    */

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
        
        let active = (eventActive) ? {backgroundColor: '#FFC200'} : {backgroundColor: '#fff'}
        let dateObj = convertNumToDate(date);
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
                    <h2>{dateObj.day}</h2>
                    <span>{dateObj.month}, {dateObj.year}</span>
                </div>
                <div className = 'info unselectable' >
                    <div className='eventData'>
                        <h3 >{name}</h3>
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
            title
        } = this.props;
        const {
            container
        } = Styles;

        return (
            <div style={container}>
                <h2 style={{alignSelf: 'center'}}>{title}</h2>
               {events.map((event, index) => this.renderItemOne(event, index))}
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
        })).isRequired,
   
}


const Styles = {
    container: {
        flex: 1,
        backgroundColor: '#024FD19a',
        width: 500,
        height: 300,
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5,
    }
}

export { Calendar }
