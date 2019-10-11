import React, { Component } from 'react'
import '../style/components/header.css'
import '../style/main.css'

class Sponsors extends Component {
    constructor(props) {
        super(props);

		this.sponsors = [
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
		rows = createSponsors(this.sponsors)
        return (
            <div id='sponsor'>
			{rows}
			</div>
        )
    }
}

function createSponsors(sponsors){
	let i=0, length = 6//Math.ceil((sponsors.length)/2)
	let cell = []
	let row = []
	//for(i=0; i<sponsors.length, i++){
		cell.push(<td>
			<li>
				<a href="https://i.imgur.com/fe0T4nw.png"><img src='https://i.imgur.com/fe0T4nw.png' onClick="https://arizonaatwork.com" /></a>
			</li></td>)
	//}
	row.push(<tr> {cell} </tr>)
	return row
}

export { Sponsors }
