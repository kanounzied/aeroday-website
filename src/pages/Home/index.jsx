import React, {useEffect} from "react";
import "./home.css";
import $ from 'jquery'
import Intro from "../../components/Intro"
import AeroButton from "../../components/AeroButton";
import TitleBanner from "../../components/TitleBanner";
import AeroForm from "../../components/Formulaire";
import Slide from "../../components/Slide";

export default function Home() {

    useEffect(() => {
        $('#home').addClass('selected');
    });

        return (
            <div className="home">
                <Intro />

                {/*<div className="container-for-test">*/}
                {/*    <TitleBanner text={"small components place"} />*/}
                {/*    <AeroForm />*/}
                {/*    <AeroButton path={"/"} text={"formulaire"}/>*/}
                {/*</div>*/}
            </div>
        );
}