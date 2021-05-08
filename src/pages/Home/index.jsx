import React from "react";
import "./home.css";
import {Component} from "react/cjs/react.production.min";
import $ from 'jquery'

class Home extends Component {

    componentDidMount() {
        console.log('homeee');
        $('#home').addClass('selected');
    }

    render() {
        return (
            <div className="home">Aeroday Home page</div>
        );
    }
}

export default Home