import React, {useEffect} from "react";
import "./home.css";
import $ from 'jquery'
import Intro from "../../components/Intro"
import GoogleMaps from './../../components/GoogleMaps/GoogleMaps'
import AeroButton from "../../components/AeroButton";
import TitleBanner from "../../components/TitleBanner";
import AeroForm from "../../components/Formulaire";
import Slide from "../../components/Slide";
import Preloader from "./../../components/Preloader/Preloader"

export default function Home() {

    useEffect(() => {
        $('#home').addClass('selected');
    });

        return (
            <div className="home">
                <Preloader />
                <Intro />

                <TitleBanner text="Aeroday Edition 2019" />
                <Slide />
              
                {/*<div className="container-for-test">*/}
                {/*    <TitleBanner text={"small components place"} />*/}
                {/*    <AeroForm />*/}
                {/*    <AeroButton path={"/"} text={"formulaire"}/>*/}
                {/*</div>*/}

                <GoogleMaps />
            </div>
        );
            
}