import React, { Component } from 'react'
import Collapsible from 'react-collapsible';
import { Header, Calendar, OfficeHours, Sponsors } from '../components'
import { Link } from 'react-router-dom'
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
                name: "General Body Meeting #1",
                date: "2019-10-28",
                time: "6:00pm",
                id: "1",
                location: "Eng 1 286",
                description: "Come join us for our first GBM",
            },
             {
                 name: "General Body Meeting #2",
                 date: "2019-11-28",
                 time: "6:00pm",
                 id: "2",
                 location: "Eng 1 286",
                 description: "Come join us for our second GBM",
             },
        ]

		this.officeHourSchedule = {
			room: "ENG1 ROOM 140",
			days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			dates :	[
					{
						day: "Monday",
						name: "Jaime",
						time: ["11AM - 12PM"]
					},
					{
						day: "Monday",
						name: "Karen",
						time: ["2PM - 3PM"]
					},
					{
						day: "Tuesday",
						name: "Emiliano",
						time: ["3PM - 5PM"]
					},
					{
						day: "Wednesday",
						name: "Jaime",
						time: ["11AM - 12PM"]
					},
					{
						day: "Wednesday",
						name: "Tomas",
						time: ["12PM - 1PM"]
					},
					{
						day: "Wednesday",
						name: "Karen",
						time: ["3PM - 4PM"]
					},
					{
						day: "Thursday",
						name: "Richard",
						time: ["1PM - 2PM"]
					},
					{
						day: "Thursday",
						name: "Tomas",
						time: ["3PM - 4PM"]
					},
					{
						day: "Thursday",
						name: "Emiliano",
						time: ["3PM - 4PM", "4PM - 5PM"]
					},
					{
						day: "Friday",
						name: "Karen",
						time: ["3PM - 4PM"]
					}
				]			
		}
		
		this.sponsors = [
            {
                name: "JP Morgan",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/09/morgan-chase-logo-e1567700680324.png",
                link: "https://www.jpmorgan.com/",
                description: "JP Morgan"
            },
			{
                name: "Google",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/08/Google-logo-e1565828559704.png",
                link: "https://about.google/",
                description: "Google does stuff"
            },
			{
                name: "Office of Diversity and Inclusion UCF",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/02/UCF-ODI-Logo-Primary-e1565370468338.png",
                link: "https://diversity.ucf.edu/",
                description: "UCF Diversity and Inclusion"
            },
			{
                name: "EA",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/02/25-257559_ea-logo-electronic-arts-logo-png-e1565370452978.png",
                link: "https://www.ea.com/",
                description: "EA"
            },
			{
                name: "XEROX",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/01/Xerox-logo.png",
                link: "https://www.xerox.com/",
                description: "XEROX"
            },
			{
                name: "Texas Instruments",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/01/Texas-Instruments-Brands-Logo-PNG-Transparent.png",
                link: "http://www.ti.com/",
                description: "TI"
            },
			{
                name: "Facebook",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/01/FB-Wordmark-RGB-10241.png",
                link: "https://www.facebook.com/facebook/",
                description: "facebook"
            },
			{
                name: "Harris",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/01/harris-corporation-logo.png",
                link: "https://www.harris.com/",
                description: "HARRIS"
            },
			{
                name: "Leidos",
                source: "https://www.shpeucf.com/wp-content/uploads/2018/09/Leidos.png",
                link: "https://www.leidos.com/",
                description: "leidos"
            },
			{
                name: "Northrop Grumman",
                source: "https://www.shpeucf.com/wp-content/uploads/2018/09/small_logo.png",
                link: "http://www.northropgrumman.com/Pages/default.aspx",
                description: "NORTHROP GRUMMAN"
            },
			{
                name: "ADP",
                source: "https://www.shpeucf.com/wp-content/uploads/2018/09/adp-e1565760112190.png",
                link: "https://www.adp.com/",
                description: "ADP"
            }
			
        ]
	}
	
    render() {	
		const {collapsibleContainer} = stylesheet;

        return (
            <div id='page'>
                <Header/>
                <Calendar 
                    title="Events"
                    events={this.events}
                />
				<OfficeHours officeHourSchedule = {this.officeHourSchedule} />
                <div className='center' id='body' style={{flex: 1, flexDirection: 'column'}}>
                    <title>Hello</title>
                    <button  
                    style={collapsibleContainer}
                    onClick={() => {this.props.history.push('About')}}/>
                </div>
				<Sponsors sponsors = {this.sponsors} />
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
