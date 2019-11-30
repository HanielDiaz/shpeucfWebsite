import React, { Component } from 'react'
import Collapsible from 'react-collapsible';
import '../style/main.css'
import '../style/components/officeHours.css'

var color;

class OfficeHours extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
		color = 0;
    }
    render() {
		let scheduleRows = [], sponsorRows = []
		scheduleRows = organizeSchedule(this.props.officeHourSchedule)
		
        return (
            <div className='officeHours' id='officeHours'>
			<h1 id="officeHours" className="title">OfficeHours</h1>
				<div className='innerOfficeHours'>
					<h3 id="officeHours"> {this.props.officeHourSchedule.room} </h3>
						<table id="officeHours">
							<tbody>
								{scheduleRows}
							</tbody>
						</table>
					</div>
            </div>
        )
    }
}

function organizeSchedule(officeHourSchedule){
	let rows = []
	let organizedData = []
	let x = 0, y = 0, count = 0
	
	let currentDay = officeHourSchedule.days[0]
	
	while (count < officeHourSchedule.dates.length){
		if(officeHourSchedule.dates[x].day == currentDay){
			organizedData.push(officeHourSchedule.dates[x])
			count++
		}
		x++
		if(x >= officeHourSchedule.dates.length){ //all data has been cycled, array of currentDay is complete
			x = 0 //reset dates counter
			rows = addToScheduleTable(organizedData, rows, currentDay) //update table
			y++ //iterate current day
			if(y < officeHourSchedule.days.length){ //make sure y doesn't go over the number of days
				currentDay = officeHourSchedule.days[y] //set current day
			}
			organizedData = []
		}
	}
	return rows
}

function addToScheduleTable(organizedData, rows, currentDay){
	let cell = []
	let i = 0, z=0
	let className
	cell.push(<td> {currentDay} </td>)
	if(color == 0){
		className = 'color'
	} else{
		className = 'nocolor'
	}
	console.log({className})
	for(z = 0; z < organizedData.length; z++){
		cell.push( <td align='left'> {organizedData[z].name} </td>)
		for(i = 0; i < organizedData[z].time.length; i++){
			if(i > 0){
				rows.push(<tr id = {className}> {cell} </tr>)
				cell = []
				cell.push(<td></td>)
				cell.push(<td></td>)
			}
			cell.push( <td align='right'> {organizedData[z].time[i]} </td>)
		}
		rows.push(<tr id = {className}> {cell} </tr>)
		cell = []
		cell.push(<td></td>)
		color = (color+1)%2
		if(color == 0){
			className = 'color'
		} else{
			className = 'nocolor'
		}
	}
	return rows
}

export { OfficeHours }
