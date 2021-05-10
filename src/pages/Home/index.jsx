import React from "react";
import "./home.css";
import {Component} from "react/cjs/react.production.min";
import $ from 'jquery'
import Intro from "../../components/Intro"

class Home extends Component {

    componentDidMount() {
        $('#home').addClass('selected');
    }

    render() {
        return (
            <div className="home">
                <Intro />
            </div>
        );
    }
}

export default Home