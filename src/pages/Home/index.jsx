import React, {useEffect} from "react";
import "./home.css";
import {Component} from "react/cjs/react.production.min";
import $ from 'jquery'
import Intro from "../../components/Intro"
import Preloader from './../../components/Preloader/Preloader'

export default function Home() {

    useEffect(() => {
        $('#home').addClass('selected');
    });

        return (
            <div>
                <Preloader />
                
                <div className="home">
                    <Intro />
                </div>
            </div>
        );
            
}