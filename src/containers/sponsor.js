import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ResponsivePie } from '@nivo/pie'
import { Header } from '../components'
import {
    fetchStatistics
} from '../modules'
import '../style/main.css'

class Sponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#fff',
            header: 'title'
        }

        this.data = [
            {
            id: "poop",
            label: "poop",
            value: 45,
            color: "hsl(80, 70%, 50%)"
            },
            {
            id: "two",
            label: "two",
            value: 50,
            color: "hsl(80, 70%, 50%)"
            },
        ]

    }

    componentDidMount(){
        this.props.fetchStatistics();
    }

    render() {
        return (
            <div style={{height: 100}}>
                <Header/>
                <div style={{height: 1000}}>
               <ResponsivePie
                data={this.data}
                />
    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    statistics: state.statistics.statistics
})

const mapDispatchToProps = {
    fetchStatistics
}


export default connect(mapStateToProps, mapDispatchToProps)(Sponsor)

