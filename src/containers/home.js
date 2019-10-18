import React, { Component } from 'react'
import Collapsible from 'react-collapsible';
<<<<<<< Updated upstream
import { Sponsors } from '../components'
import { OfficeHours } from '../components'
=======
<<<<<<< Updated upstream
=======
import { Header, Sponsors, Calendar, OfficeHours } from '../components'
>>>>>>> Stashed changes
>>>>>>> Stashed changes
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
                name: "Hello",
                date: "2019-08-28",
                time: "Now",
                id: "1",
                committee: "Hello",
                location: "here",
                description: "no",
            },
            {
                name: "GBM",
                date: "2019-08-29",
                time: "Now",
                id: "1"
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
                name: "Google",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/08/Google-logo-e1565828559704.png",
                link: "https://about.google/",
                description: "Google does stuff"
            },
			{
                name: "Google",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/08/Google-logo-e1565828559704.png",
                link: "https://about.google/",
                description: "Google does stuff"
            },
			{
                name: "Google",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/08/Google-logo-e1565828559704.png",
                link: "https://about.google/",
                description: "Google does stuff"
            },
			{
                name: "Google",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/08/Google-logo-e1565828559704.png",
                link: "https://about.google/",
                description: "Google does stuff"
            },
			{
                name: "Google",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/08/Google-logo-e1565828559704.png",
                link: "https://about.google/",
                description: "Google does stuff"
            },
			{
                name: "Google",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/08/Google-logo-e1565828559704.png",
                link: "https://about.google/",
                description: "Google does stuff"
            },
			{
                name: "Google",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/08/Google-logo-e1565828559704.png",
                link: "https://about.google/",
                description: "Google does stuff"
            },
			{
                name: "Google",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/08/Google-logo-e1565828559704.png",
                link: "https://about.google/",
                description: "Google does stuff"
            },
			{
                name: "Google",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/08/Google-logo-e1565828559704.png",
                link: "https://about.google/",
                description: "Google does stuff"
            },
			{
                name: "Google",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/08/Google-logo-e1565828559704.png",
                link: "https://about.google/",
                description: "Google does stuff"
            },
			{
                name: "Google",
                source: "https://www.shpeucf.com/wp-content/uploads/2019/08/Google-logo-e1565828559704.png",
                link: "https://about.google/",
                description: "Google does stuff"
            }
			
        ]
	}
	
    render() {	
        return (
            <div id='page'>
                <Header/>
                <Calendar 
                    title="Events"
                    events={this.events}
                />
				<OfficeHours
					officeHourSchedule = {this.officeHourSchedule}
				/>

                <div className='center' id='body' style={{flex: 1, flexDirection: 'column'}}>

                    <title>Hello</title>
<<<<<<< Updated upstream
                    <button  
                    style={{flex: 1, alignSelf: 'center'}}
                    onClick={() => {this.props.history.push('About')}}/>
=======
<<<<<<< Updated upstream
                    {/* <button  
                    style={{flex: 1, alignSelf: 'center'}}
                    onClick={() => {}}/> */}
=======

                    <button  

                    style={collapsibleContainer}

                    onClick={() => {this.props.history.push('About')}}/>

>>>>>>> Stashed changes
>>>>>>> Stashed changes
                </div>
				
<<<<<<< Updated upstream
				<OfficeHours officeHourSchedule = {this.officeHourSchedule} />
				<Sponsors sponsors = {this.sponsors} />
				
=======
<<<<<<< Updated upstream
				>
					<table id="simple-board">
						<tbody>
							{rows}
						</tbody>
					</table>
				</Collapsible>
=======
				<Sponsors
					sponsors = {this.sponsors}
				/>
				
>>>>>>> Stashed changes
>>>>>>> Stashed changes
            </div>
        )
    }
}

