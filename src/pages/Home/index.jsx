import React, {useEffect} from "react";
import "./home.css";
import {Component} from "react/cjs/react.production.min";
import $ from 'jquery'
import Intro from "../../components/Intro"
import GoogleMaps from './../../components/GoogleMaps/GoogleMaps'

export default function Home() {

    useEffect(() => {
        $('#home').addClass('selected');
    });

        return (
            <div className="home">
                <Intro />

                <GoogleMaps />
            </div>
        );
            
}