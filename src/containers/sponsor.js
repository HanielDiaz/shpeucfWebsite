import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Pie } from '@nivo/pie'
import { Header } from '../components'
import {
    fetchStatistics
} from '../modules'
import '../style/main.css'
import '../style/components/sponsor.css'

class Sponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#fff',
            header: 'title'
        }
        //companies that our members work for
        this.statistics = [
            {
                name: 'Gender',
                data: [
                    {
                        id: "male",
                        label: "male",
                        value: 50,
                    },
                    {
                        id: "female",
                        label: "female",
                        value: 50,
                    },
                ]
            },
            {
                name: 'Majors',
                data: [
                    {
                        id: "Computer Science",
                        label: "Computer Science",
                        value: 15,
                        color: "hsl(80, 70%, 50%)"
                    },
                    {
                        id: "Mechanical Eng.",
                        label: "Mechanical Eng.",
                        value: 30,
                        color: "hsl(80, 70%, 50%)"
                    },
                    {
                        id: "Industrial Eng.",
                        label: "Industrial Eng.",
                        value: 45,
                        color: "hsl(80, 70%, 50%)"
                    },
                    {
                        id: "Computer Eng.",
                        label: "Computer Eng.",
                        value: 10,
                        color: "hsl(80, 70%, 50%)"
                    }
                ]
            },
            {
                name: 'Ethinicity',
                data: [
                {
                    id: "Hispanic",
                    label: "Hispanic",
                    value: 90,
                    color: "hsl(80, 70%, 50%)"
                },
                {
                    id: "Non-Hispanic",
                    label: "Non-Hispanic",
                    value: 10,
                    color: "hsl(80, 70%, 50%)"
                }
            ]
            }
        ]
    }

    renderPie(item) {
        const {
            name,
            data
        } = item;
        return (
            <div className="pie">
                <h4>{name}</h4>
                <Pie
                innerRadius={.5}
                height={350}
                width={300}
                enableRadialLabels={false}
                data={data}
                legends={
                    [
                        {
                            anchor: 'center',
                            direction: 'column', 
                            itemWidth: 100,
                            itemHeight: 18,
                        }
                    ]
                }
                />
            </div>
        )
    }

    componentDidMount(){
        // this.props.fetchStatistics(); This isn't working for some reason :(
    }

    render() {
        return (
            <div id="Body">
                <Header/>
                <div className="row">
                    <div className="familia">
                        <h3>OUR FAMILIA</h3>
                        <p>
                            Our strength comes from the unity and diversity of our "familia." With over 200 members, and sustainably growing, we encompass nearly all engineering majors. Through our members, we extend to almost all other student organizations within UCF (AIAA, ASME, SEDS, SAE, SWE, ASCE, Tech Knights etc.)
                            If you seek to make a long-lasting impact on your company/organization, your mission, and industry, partnering with us will not only help countless students, but also give you direct access to all of their talent.
                        </p>
                    </div>
                    <div className="whoarewe">
                        <h3>WHO WE ARE</h3>
                        <p>
                            Established in 1988, SHPE UCF is an organization that focuses on empowering underrepresented young professionals. The SHPE UCF mission is to help cultivate and grow student professional and educational careers. Through projects, networking events, technical workshops, and a variety of professional development initiatives, we provide only the best opportunities to our members.
                            Our mission continues to propel our members, community, and our partners into to realizing their full potential. Our mission, impacts the world through STEM awareness, access, support and development. Our mission, is one. We hope that you will support and join us as we keep making a difference in this world through STEM.
                        </p>
                    </div>
                </div>
                <div className="row unselectable">
                    {this.statistics.map((item) => this.renderPie(item))}
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

