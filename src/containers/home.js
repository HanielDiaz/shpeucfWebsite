import React, { Component } from 'react'
import Collapsible from 'react-collapsible';
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
		
		this.Sponsors = [
            {
                name: "Google",
                photo: "https://www.shpeucf.com/wp-content/uploads/2019/08/Google-logo-e1565828559704.png",
                link: "https://about.google/",
                description: "Google does stuff"
            }
        ]
	}
	
    render() {
		let rows = []
		rows = organizeSchedule(this.officeHourSchedule)
			
        return (
            <div id='page'>
                <div className='center' id='header'>
                    <ul>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                    </ul>
                </div>
                <div className='center' id='body' style={{flex: 1, flexDirection: 'column'}}>
                    <title>Hello</title>
                    <button  
                    style={{flex: 1, alignSelf: 'center'}}
                    onClick={() => {this.props.history.push('About')}}/>
                </div>
				<Collapsible
				trigger="Start here"
				className="Table-header"
				
				>
					<table id="simple-board">
						<tbody>
							{rows}
						</tbody>
					</table>
				</Collapsible>
            </div>
        )
    }
	
}

function organizeSchedule(officeHourSchedule){
	let rows = []
	let cell = []
	//console.log(Object.keys(this.officeHourSchedule.dates))
	let organizedData = []
	let x = 0, y = 0, count = 0
	let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
	let currentDay = days[0]
	
	while (count < officeHourSchedule.dates.length){
		if(officeHourSchedule.dates[x].day == currentDay){
			organizedData.push(officeHourSchedule.dates[x])
			count++
		}
		x++
		if(x >= officeHourSchedule.dates.length){ //all data has been cycled, array of currentDay is complete
			x = 0 //reset dates counter
			rows = addToScheduleTable(organizedData, rows, currentDay)
			y++ //iterate current day
			if(y < days.length){ //make sure y doesn't go over the number of days
				currentDay = days[y] //set current day
			}
			organizedData = []
		}
	}
	return rows
}

function addToScheduleTable(organizedData, rows, currentDay){
	let cell = []
	let i = 0, z=0
	cell.push(<td> {currentDay} </td>) //day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()
	for(z = 0; z < organizedData.length; z++){
		cell.push( <td align='left'> {organizedData[z].name} </td>)
		for(i = 0; i < organizedData[z].time.length; i++){
			if(i > 0){
				rows.push(<tr> {cell} </tr>)
				cell = []
				cell.push(<td></td>)
				cell.push(<td></td>)
			}
			cell.push( <td align='right'> {organizedData[z].time[i]} </td>)
		}
		rows.push(<tr> {cell} </tr>)
		cell = []
		cell.push(<td></td>)
	}
	return rows
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

