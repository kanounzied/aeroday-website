import React from "react";
import {Component} from "react/cjs/react.production.min";
import $ from 'jquery'

class Contact extends Component {

    componentDidMount() {
        console.log('contactttt');
        $('#contact').addClass('selected');
    }

    render() {
        return (
            <div>Aeroday contact page</div>
        );
    }
}

export default Contact