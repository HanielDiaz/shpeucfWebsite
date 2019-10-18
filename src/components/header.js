import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style/components/header.css'
import '../style/main.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentWillMount() {
        
    }

    render() {
        return (
            <div className='containerGeneral'>
                <div className=''>
                        <ul className='list'>
                            <li className='listElement'>
                                <Link to="./About">About</Link>
                            </li>
                            <li className='listElement'>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                </div>
            </div>
        )
    }
}

export { Header }
