import React, { Component } from 'react'
import '../style/main.css'

class Sponsors extends Component {
    constructor(props) {
        super(props);
    }

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
	let i=0
	let sponsorsArray = []
	for(i=0; i<sponsors.length; i++){
		sponsorsArray.push(<div id = 'innerSponsors'>
				<a href={sponsors[i].link}> <img id = 'sponsors' src={sponsors[i].source} onmouseover={sponsors[i].description} 
				style = {{maxWidth: "150px", height:"auto", maxHeight: "100px", width: "auto"}}/></a>
			</div>)
	}
	return sponsorsArray
}

export { Sponsors }