import React from "react";
import "./home.css";
import {Component} from "react/cjs/react.production.min";
import $ from 'jquery'
import Slide from "../../components/Slide";

class Home extends Component {

    componentDidMount() {
        $('#home').addClass('selected');
    }

    render() {
        return (
            <div className="home">Aeroday Home page  <Slide /> </div>
        );
    }
}

export default Home