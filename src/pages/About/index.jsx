import React from "react";
import {Component} from "react/cjs/react.production.min";
import $ from 'jquery'

class About extends Component {

    componentDidMount() {
        console.log('aboutttt');
        $('#about').addClass('selected');
    }

    render() {
        return (
            <div>Aeroday About page</div>
        );
    }
}

export default About