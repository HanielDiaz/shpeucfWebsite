import React, { Component } from 'react'
//import { connect } from 'react-redux'
import { Header, BodyLayout } from '../components'
// import { Link } from 'react-router-dom'
import '../style/main.css'
import '../style/components/layout.css'
import bg from '../stuff/bg_image.jpg' 

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
		
    }

    render() {

        return(
            <body style={{backgroundImage:"url(" + bg + ")",
                          backgroundPosition:'origin',
                          backgroundSize:'75% auto',
                          backgroundRepeat: 'repeat'}}>
                <div id="container">
                    <h1 style={{textAlign:'center', backgroundColor:'#ccc'}}>SHPE UCF</h1>
				    <Header/>
				    <BodyLayout/>
			    </div>
            </body>
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
