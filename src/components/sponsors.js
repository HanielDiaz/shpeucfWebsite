import React, { Component } from 'react'
import '../style/main.css'

class Sponsors extends Component {
    constructor(props) {
        super(props);
    }
	
    render() {
		let rows = []
		rows = createSponsors(this.props.sponsors)
        return (
            <div id='sponsor'  style={{flex: 1, flexDirection: 'column'}}>
				<table id = "sponsors" width = "100%">
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
        )
    }
}

function createSponsors(sponsors){
	let i=0, length = Math.ceil((sponsors.length)/2)
	let cell = []
	let row = []
	for(i=0; i<sponsors.length; i++){
		if(i==length){
			row.push(<tr> {cell} </tr>)
		}
		cell.push(<td>
			<li>
				<a href={sponsors[i].link}> <img src={sponsors[i].source} onmouseover={sponsors[i].description}/></a>
			</li></td>)
	}
	row.push(<tr> {cell} </tr>)
	return row
}

export { Sponsors }
