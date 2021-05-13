import React, {useEffect} from "react";
import "./home.css";
import {Component} from "react/cjs/react.production.min";
import $ from 'jquery'
import Intro from "../../components/Intro"
import ACbody from "../../components/AC body"
import Sidebar from "../../components/AC sidebar"

const desc_aeroday=<p>Revient pour la cinquième année consécutive dans <span>Le Tunisian Aeroday</span>. Les participants devront <span>construire</span> leurs 
propres <span>modèles</span> de planeur de taille réduite,les <span>présenter</span> à un public de professionnels et d'amateurs et les faire <span>voler</span>. 
Cette compétition est ouverte pour toutes les personnes souhaitant partager leur passion avec les autres.</p>
import AeroButton from "../../components/AeroButton";
import TitleBanner from "../../components/TitleBanner";
import AeroForm from "../../components/Formulaire";

export default function Home() {

    useEffect(() => {
        $('#home').addClass('selected');
    });

        return (
            <div className="home" style={{height:"2000px"}} >
                <Intro />
                <ACbody titleAC="CHALLENGES" acType="Aeromodelisme" description={desc_aeroday}   
                        memberName="Haizem Dahech" memberOccupation="RESP. AEROMODELISME" 
                        cdc1="1"   cdc2="0"   cdes="1"
                        CDC1URL="https://www.facebook.com/" CDC2URL="https://www.facebook.com/" CDESURL="https://www.facebook.com/" />  

                {/*<div className="container-for-test">*/}
                {/*    <TitleBanner text={"small components place"} />*/}
                {/*    <AeroForm />*/}
                {/*    <AeroButton path={"/"} text={"formulaire"}/>*/}
                {/*</div>*/}
            </div>
        );
}