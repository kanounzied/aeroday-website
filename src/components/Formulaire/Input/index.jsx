import React, {useEffect} from "react";
import "./inputStyle.scss";
import $ from 'jquery'

export default function AeroInput(props) {

    useEffect(() => {
    });
    if (props.type === "normal")
    return (
        <div className="input">
            <input placeholder={props.label} type="text"/>
        </div>
    );
    else
        return (
            <div className="input">
                <textarea placeholder={props.label} cols="30" rows="10"></textarea>
            </div>
        );
}