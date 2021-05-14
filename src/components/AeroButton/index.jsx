import React, {useEffect} from "react";
import "./aeroButton.scss";
import $ from 'jquery'
import Intro from "../../components/Intro"

export default function AeroButton(props) {

    useEffect(() => {
    });

    return (
        <div className="aeroBtn">
            <a href={props.path}>{props.text}</a>
        </div>
    );
}