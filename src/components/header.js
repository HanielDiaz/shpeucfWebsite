import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../components'
import '../style/components/header.css'
import '../style/main.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.pages = [
        {
            text: "Home",
            link: ""
        },
        {
            text: "Sponsor",
            link: "Sponsor"
        },
        ]
    }
    render() {
        return (
            <div className='containerGeneral'>
                <div className='containerGeneral unselectable'>
                        <ul
                        className="list"
                        open={false}
                        >
                            {this.pages.map(({text, link}) => (
                                <Link key={link} className="listElement" to={`./${link}`}>{text}</Link>
                            ))}
                        </ul>
                </div>
                <Login/>
            </div>
        )
    }
}

export { Header }
