import React, { Component } from 'react'
import '../style/main.css'

class Sponsors extends Component {	
    render() {
		let sponsorsArray = []
		sponsorsArray = createSponsors(this.props.sponsors)
        return (
            <div id='sponsors'>
				{sponsorsArray}
			</div>
        )
    }
}

function createSponsors(sponsors){
	let i=0;
	//let length = 6
	let mnWidth=80
	let mxWidth=(window.innerWidth/10)
	console.log("mxw: " + mxWidth)
	let width = (Math.min((window.innerWidth/mnWidth), (window.innerWidth/mxWidth)))
	console.log("wide:" + width)
	//let width = (window.innerWidth/10) + "px"
	let length = ((window.innerWidth > 1400) ? 8 : 
					((window.innerWidth > 900) ? 7 :
						((window.innerWidth > 600) ? 6 :
							(window.innerWidth > 400) ? 5 : 4)))
	width = width + "px"
	mxWidth = mxWidth + "px"
	mnWidth = mnWidth + "px"
	console.log("This width:" + width);
	console.log("Window width:" + window.innerWidth);
	console.log("Length:" + length)
	let cell = []
	let row = []
	for(i = 0; i < sponsors.length; i++){
		if(i % length === 0){
			row.push(<tr> {cell} </tr>)
			cell = []
		}
		cell.push(<td align='center'>
				<a href={sponsors[i].link}> <img src={sponsors[i].source} onmouseover={sponsors[i].description} 
				style = {{maxWidth: mxWidth, width: "auto", height:"auto", maxHeight: mxWidth}}/></a>
			</td>)
	}
	return row
}

export { Sponsors }
