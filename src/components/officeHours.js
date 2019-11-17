import React, { Component } from 'react'
import '../style/main.css'
import '../style/components/officeHours.css'

class OfficeHours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
		let schedule = []
		schedule = organizeSchedule(this.props.officeHourSchedule)
		
        return (
            <div id='officeHours'>
				<h3 id="officeHours"> {this.props.officeHourSchedule.room} </h3>
					<hr/>
					{schedule}
            </div>
        )
    }
}

function organizeSchedule(officeHourSchedule){
	let rows = []
	let returnArray = []
	//console.log(Object.keys(this.officeHourSchedule.dates))
	let organizedData = []
	let x = 0, y = 0, count = 0
	
	let currentDay = officeHourSchedule.days[0]
	
	while (count < officeHourSchedule.dates.length){
		if(officeHourSchedule.dates[x].day === currentDay){
			organizedData.push(officeHourSchedule.dates[x])
			count++
		}
		x++
		if(x >= officeHourSchedule.dates.length){ //all data has been cycled, array of currentDay is complete
			x = 0 //reset dates counter
			rows = addToScheduleTable(organizedData, rows, currentDay, (y % 2 === 0)) //update table
			y++ //iterate current day
			if(y < officeHourSchedule.days.length){ //make sure y doesn't go over the number of days
				currentDay = officeHourSchedule.days[y] //set current day
			}
			organizedData = []
		}
	}
	returnArray.push(<div class='officeHoursMain'> {rows} </div>)
	return returnArray
}

function addToScheduleTable(organizedData, rows, currentDay, highlighted){
	let grab = []
	let cell = []
	let divide = []
	let i = 0, z=0
	let highlight = (highlighted) ? "highlight" : "";
	
	cell.push(<h3 id="dayH"> {currentDay} </h3>) //day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()
	for(z = 0; z < organizedData.length; z++){
		grab.push( <h3 id = "nameH"> {organizedData[z].name} </h3>)
		for(i = 0; i < organizedData[z].time.length; i++){
			grab.push( <p id = "timeH"> {organizedData[z].time[i]} </p>)
		}
		cell.push(<div class = "circle"> {grab} </div>)
		grab = []
	}
	rows.push(<div class = "newDay"> {cell} </div>)
	return rows
}

export { OfficeHours }
