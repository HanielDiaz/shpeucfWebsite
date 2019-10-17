import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../style/components/calendar.css'

class Calendar extends Component {
    constructor(props) {
        super(props);
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

    renderItemOne(event) {
           const {
            name,
            date,
            time,
            id
        } = event;
        
        return (
            <div key={id} className='container'>
            <h3>{name}</h3>
                <div style={{flexDirection: 'row'}}>
                    <p style={{flex: 1,}}>Date: {date}</p>
                    <p>time: {time}</p>
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
               {events.map(event => this.renderItemOne(event))}
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
            time: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })).isRequired,
   
}


const Styles = {
    container: {
        flex: 1,
        backgroundColor: '#024FD19a',
        width: 500,
        height: 500,
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5,
    }
}

export { Calendar }
