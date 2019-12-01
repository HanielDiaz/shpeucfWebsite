import React, { Component } from 'react';
import '../style/main.css';
import fbimg from '../assets/fb.png';
import igimg from '../assets/ig.png';
import linkedinimg from '../assets/linkedin.png';
import slackimg from '../assets/slack.png';
import twitterimg from '../assets/twitter.png';
import youtubeimg from '../assets/youtube.png';
import '../style/components/social.css';

class Social extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        let fbUrl = "https://www.facebook.com/shpeucfchapter";
        let instagramUrl = "https://instagram.com/shpeucf/";
        let linkedInUrl = "https://www.linkedin.com/in/shpe-ucf-bb1b5776/";
        let linkedInUrl_alt = "https://www.linkedin.com/in/shpe-ucf-bb1b5776/?trk=public_profile_card_url";
        let slackUrl = "https://shpeucf.slack.com/";
        let twitterUrl = "https://twitter.com/shpeucfchapter";
        let youtubeUrl = "https://www.youtube.com/user/shpeucfchapter";
        return(
            <div className="socialContainer">
                <button className='socialButton' title='Facebook Group' onClick={(e): void => {
                        e.preventDefault();
                        window.location.href=fbUrl;
                    }
                }>
                    <img src={fbimg}/>
                </button>
                <button className='socialButton' title='Twitter Page' onClick={(e): void => {
                        e.preventDefault();
                        window.location.href=twitterUrl;
                    }
                }>
                    <img src={twitterimg}/>
                </button>
                <button className='socialButton' title='Instagram Page' onClick={(e): void => {
                        e.preventDefault();
                        window.location.href=instagramUrl;
                    }
                }>
                    <img src={igimg}/>
                </button>
                <button className='socialButton' title='LinkedIn' onClick={(e): void => {
                        e.preventDefault();
                        window.location.href=linkedInUrl;
                    }
                }>
                    <img src={linkedinimg}/>
                </button>
                <button className='socialButton' title='YouTube Channel' onClick={(e): void => {
                        e.preventDefault();
                        window.location.href=youtubeUrl;
                    }
                }>
                    <img src={youtubeimg}/>
                </button>
                <button className='socialButton' title='Slack Workspace' onClick={(e): void => {
                        e.preventDefault();
                        window.location.href=slackUrl;
                    }
                }>
                    <img src={slackimg}/>
                </button>
            </div>
        )
    }
}

export { Social }