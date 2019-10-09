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
			dates : {
				monday: [
					{	name: "Jaime",
			            time: "11AM - 12PM"
					},
					{	name: "Karen",
						time: "2PM - 3PM"
					}
			    ],
				tuesday: [
					{	name: "Emiliano",
						time: "3PM - 5PM"
					}
				],
				wednesday: [
					{	name: "Jaime",
						time: "11AM - 12PM"
					},
					{	name: "Tomas",
						time: "12PM - 1PM"
					},
					{	name: "Karen",
						time: "3PM - 4PM"
					}
				],
				thursday: [
					{	name: "Richard",
						time: "1PM - 2PM"
					},
					{	name: "Tomas",
						time: "3PM - 4PM"
					},
					{	name: "Emiliano",
						time:  "3PM - 5PM"
					}
				],
				friday: [
					{	name: "Karen",
						time: "3PM - 4PM"
					}
				]
			},
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

	renderOfficeHours(){
	}

    render() {
		console.log(Object.keys(this.officeHourSchedule.dates))
		console.log(Object.keys(this.officeHourSchedule.dates.monday))
		console.log(this.officeHourSchedule.dates.monday[0].time.length)
		let rows = []
		let cell = []
		for (var day in this.officeHourSchedule.dates){
			cell = []
			cell.push(<td> {day.charAt(0).toUpperCase() + day.slice(1)} </td>)
			switch(day){
				case 'monday':
					for(var personObject in this.officeHourSchedule.dates.monday){
						cell.push( <td align='left'> {this.officeHourSchedule.dates.monday[personObject].name} </td>)
						cell.push( <td align='right'> {this.officeHourSchedule.dates.monday[personObject].time} </td>)
						rows.push(<tr> {cell} </tr>)
						cell = []
						cell.push(<td></td>)
					}
					break;
				case 'tuesday':
					for(var personObject in this.officeHourSchedule.dates.tuesday){
						cell.push( <td align='left'> {this.officeHourSchedule.dates.tuesday[personObject].name} </td>)
						cell.push( <td align='right'> {this.officeHourSchedule.dates.tuesday[personObject].time} </td>)
						rows.push(<tr> {cell} </tr>)
						cell = []
						cell.push(<td></td>)
					}
					break;
				case 'wednesday':
					for(var personObject in this.officeHourSchedule.dates.wednesday){
						cell.push( <td align='left'> {this.officeHourSchedule.dates.wednesday[personObject].name} </td>)
						cell.push( <td align='right'> {this.officeHourSchedule.dates.wednesday[personObject].time} </td>)
						rows.push(<tr> {cell} </tr>)
						cell = []
						cell.push(<td></td>)
					}
					break;
				case 'thursday':
					for(var personObject in this.officeHourSchedule.dates.thursday){
						cell.push( <td align='left'> {this.officeHourSchedule.dates.thursday[personObject].name} </td>)
						cell.push( <td align='right'> {this.officeHourSchedule.dates.thursday[personObject].time} </td>)
						rows.push(<tr> {cell} </tr>)
						cell = []
						cell.push(<td></td>)
					}
					break;
				case 'friday':
					for(var personObject in this.officeHourSchedule.dates.friday){
						cell.push( <td align='left'> {this.officeHourSchedule.dates.friday[personObject].name} </td>)
						cell.push( <td align='right'> {this.officeHourSchedule.dates.friday[personObject].time} </td>)
						rows.push(<tr> {cell} </tr>)
						cell = []
						cell.push(<td></td>)
					}
					break;
			}
		}
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

