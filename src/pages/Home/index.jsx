import React, {useEffect} from "react";
import "./home.css";
import {Component} from "react/cjs/react.production.min";
import $ from 'jquery'
import Intro from "../../components/Intro"
import ACbody from "../../components/AC body"


const desc_aeroday=<p>Revient pour la cinquième année consécutive dans <span>Le Tunisian Aeroday</span>. Les participants devront <span>construire</span> leurs 
propres <span>modèles</span> de planeur de taille réduite,les <span>présenter</span> à un public de professionnels et d'amateurs et les faire <span>voler</span>. 
Cette compétition est ouverte pour toutes les personnes souhaitant partager leur passion avec les autres.</p>

export default function Home() {

    useEffect(() => {
        $('#home').addClass('selected');
    });

        return (
            <div className="home">
                <Intro />
                <ACbody description={desc_aeroday}/>
            </div>
        );
}