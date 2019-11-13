import React, { Component } from 'react'
import '../style/main.css'

class Sponsors extends Component {	
    render() {
		let rows = []
		rows = createSponsors(this.props.sponsors)
        return (
            <div id='sponsor' align='center'>
				<table id = "sponsors" style={{width: "50%"}}>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
        )
    }
}

function createSponsors(sponsors){
	let i=0, length = 5
	let width = (window.innerWidth/10) + "px"
	console.log("This width:" + width);
	let cell = []
	let row = []
	for(i = 0; i < sponsors.length; i++){
		if(i % length === 0){
			row.push(<tr> {cell} </tr>)
			cell = []
		}
		cell.push(<td align='center'>
				<a href={sponsors[i].link}> <img alt={sponsors[i].description} src={sponsors[i].source} onmouseover={sponsors[i].description} 
				style = {{maxWidth: width, height:"auto", maxHeight: "125px", width: "auto"}}/></a>
			</td>)
	}
	row.push(<tr> {cell} </tr>)
	return row
}

export { Sponsors }
