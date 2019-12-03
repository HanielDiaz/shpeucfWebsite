import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Pie } from '@nivo/pie'
import { Link } from 'react-router-dom'
import { Header, Sponsors, Form } from '../components'
import sponsors from '../data/Sponsors';
import {
    fetchStatistics
} from '../modules'
import '../style/containers/sponsor.css'

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
                    <h1>WHY SPONSOR US?</h1>
                </div>
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
                <div className="row">
                    <div className="community">
                        <h3>COMMUNITY OUTREACH</h3>
                        <p>
                            One of the pillars of SHPE UCF is to develop the potential in grade school students and form the next generation of talented STEM professionals. Apart from that, we seek to contribute to our community in every way possible.
                        </p>
                        <ul>
                            <li>Our latest annual SHPE Jr. Conference was a success. Over 75 grade school students and their families came to explore the world of STEM through projects, workshops, and special corporate guest speakers.</li>
                            <li>We reach out to low income Hispanic elementary schools through our SHPE Pen Pal program, mentoring students and pushing them to follow their dreams.</li>
                            <li>We constantly participate in Habitat for Humanity, GMiS - Viva Technology, local beach / lake cleanups, and food drives for humanitarian causes.</li>
                        </ul>
                    </div>
                    <div className="leadership">
                        <h3>LEADERSHIP DEVELOPMENT</h3>
                        <p> Our organization strives to motivate our members and indulge in their leadership potential. Rather than focusing solely on personal gain, we highlighting their ability to impact and help their community. Our membership is encouraged to inspire their own vision for the future, not only within SHPE, but throughout their careers and life to come. We ease forward opportunities for our membership by having:                        </p>
                        <ul>
                            <li>LeaderSHPE: A boot camp for freshmen promoting leadership and curiosity.</li>
                            <li>Project Competitions: Interdisciplinary, collaborative and challenging projects.</li>
                            <li>Project Leads: To plan and executing on technical ideas, for all members, both small and large-scale.</li>
                            <li>E-Board/Board Directors: To practice leadership, organization and adaptability within SHPE UCF branches, while promoting continued growth.</li>
                            <li>Committee Leads/Focal: To highlight member leadership attributes.</li>
                            <li>New Opportunities: To always foster member ideas for new programs, projects or improvement.</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <h1>CHARGE ON WITH US</h1>
                </div>
                <div className="row">
                    <div className="col-3 gold">
                        <h2>Gold Donation: $1500+</h2>
                        <ul>
                            <li>Main sponsor of SHPE UCF projects</li>
                            <li>Main sponsor of SHPE Jr. 2020 Conference</li>
                            <li>Co-host exclusive events with SHPE UCF</li>
                            <li>Company logo on the sleeve of all SHPE UCF member shirts</li>
                            <li>Recognition at end of year SHPE Gala</li>
                            <li>All Bronze & Silver Sponsorship benefits included</li>
                        </ul>
                    </div>
                    <div className="col-3 silver">
                        <h2>Silver Donation: $750+</h2>
                        <ul>
                            <li>Social Media “Take-Over's” & student engagement</li>
                            <li>Co-Host 1 SHPE General Body Meeting & Events</li>
                            <li>Co-Host Professional development events</li>
                            <li>Company logo on the back of all SHPE UCF member shirts</li>
                            <li>Company logo printed on all SHPE UCF & bi-weekly emails</li>
                            <li>All Bronze Sponsorship benefits included</li>
                        </ul>
                    </div>
                    <div className="col-3 bronze">
                        <h2>Bronze Donation: $450+</h2>
                        <ul>
                            <li>Access to all member resume books (All Majors)</li>
                            <li>SHPE Industry BBQ attendance Fall/Spring</li>
                            <li>Recognition and appreciation at major SHPE events</li>
                            <li>Company logo placed on SHPE UCF websites</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="item">
                        <div className="button">
                            <a href='/sponsorPackage.pdf'download> Download Sponsorship Package</a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="button">
                            <a target="_blank" href='https://squareup.com/store/shpeucf/'> Donation Page</a>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div>
                    <h1>OUR CURRENT FAMILIA</h1>
                    <Sponsors sponsors={sponsors} />
                    </div>
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

