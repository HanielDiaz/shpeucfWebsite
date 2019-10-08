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

const Styles = {
    containerStyleHome: {
        flex: 1,
        height: 500,
        opacity: .3,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: 'url(https://www.shpeucf.com/wp-content/uploads/2019/08/IMG_6296_1-1-e1565773790331.jpg)'
    },
    containerStyleGeneral: {
        flex: 1,
        height: 60,
        opacity: .3,
        flexDirection: 'row'
    },
    linkContainerStyle: {
        flex: 1,
        flexDirection: 'row'
    },
    linkStyle: {
        flex: 1,
        color: '#000',
        flexDirection:'row'
    },
    listElement: {
        flex: 1,
        flexDirection: 'row'
    }
}

export { Header }
