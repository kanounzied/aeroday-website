import React from "react";
import {Component} from "react/cjs/react.production.min";
import $ from 'jquery'
import MemberCard from "../../components/Member"
import './about.scss'


class About extends Component {

    componentDidMount() {
        $('#about').addClass('selected');
    }

    render() {
        return (
            <div id="about-us-body">
                <div id="about-us-title">
                    <h1>A PROPOS DE NOUS</h1>
                </div>
                <div id="about-us-video-holder">
                    <div id="about-us-video">
                        <h2>C'EST QUOI L'AERODAY?</h2>
                        <video autoplay="" loop muted="" width="100%" height="100%" preload="auto" autobuffer="true" muted>
                            <source type="video/mp4" src={ process.env.PUBLIC_URL + "/assests/videos/aboutusvideo.mp4" }/>
                        </video>
                    </div>
                </div>
                <div id="team-holder">
                    <MemberCard memberName = "Khouloud Hamrouni" memberOccupation="PRESIDENT"/>
                </div>
            </div>
        );
    }
}

export default About