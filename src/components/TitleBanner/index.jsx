import React, {useEffect} from "react";
import "./titleBanner.scss";
import $ from 'jquery'

export default function TitleBanner(props) {

    useEffect(() => {
    });

    return (
        <div className="title-banner">
            <div className="title-holder">
                <h1>{props.text}</h1>
            </div>
        </div>
    );
}