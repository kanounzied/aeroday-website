import React from "react";
import {Component} from "react/cjs/react.production.min";
import $ from 'jquery'
import MemberCard from "../../components/Member"
import './about.scss'
import TitleBanner from "../../components/TitleBanner";


class About extends Component {

    componentDidMount() {
        $('#about').addClass('selected');
    }

    render() {
        return (
            <div id="about-us-body" >
                <TitleBanner text={"A PROPOS DE NOUS"} />
                <div id="about-us-video-holder">
                    <div id="about-us-video">
                        <h2>C'EST QUOI L'AERODAY?</h2>
                        <video id="video" autoplay="" loop muted="" width="100%" height="100%" preload="auto" autobuffer="true" muted>
                            <source type="video/mp4" src={ process.env.PUBLIC_URL + "/assests/videos/aboutusvideo.mp4" }/>
                        </video>
                    </div>
                </div>
                <div id="about-us-description">
                    <div id="paragraph--p-">
                        <p>C'est l'unique journée nationale consacrée entièrement à l'Aéronautique en Tunisie, 
                            elle est fondée en 2012 par le club Aerobotix INSAT en collaboration avec l'association des techniques
                            de robotique (ATR). Cette journée est basée sur plusieurs axes et sur des différents challenges et elle opte 
                            pour la vulgarisation du domaine aéronautique chez le grand public ainsi que sur la découverte de nouveaux
                            potentiels dont disposent les jeunes. </p><p>L'Aeroday revient cette année dans sa 9ème édition sous le thème " Les Olympiades Aéronautique ", inspiré des 
                            Jeux Olympiques TOKYO 2020. Un show aérien, des conférences, des expositions et des ateliers pour les enfants… 
                            Tout ça aura lieu le 12 Avril à l'INSAT. Donc gardez la date car nous voulons vivement vous voir parmi nous.</p>
                        </div>
                    <h2>NOTRE EQUIPE</h2>
                    <h3>Rencontrer les gens dans les coulisses</h3>
                </div>
                <div id="members-body">
                    <MemberCard memberName="Khouloud Hamrouni" memberOccupation="PRESIDENT"/>
                    <div id="vp-container">
                            <MemberCard memberName="Marwen Hihi" memberOccupation="V.P. TECHNIQUE"/>

                            <MemberCard memberName="Chaima Akkari" memberOccupation="V.P. ADMINISTRATIF"/>
                    </div>
                    <div id="members-container">

                        {/*Challenges*/}

                        <MemberCard memberName="Haizem Dahech" memberOccupation="RESP. AEROMODELISME"/>

                        <MemberCard memberName="Eya Ben Aziza" memberOccupation="RESP. AEROCHALLENGE"/>

                        <MemberCard memberName="Mohamed Yassine Brahem" memberOccupation="RESP. CAO"/>

                        <MemberCard memberName="Ikram Rejeb" memberOccupation="RESP. AEROENTREPRENEUR"/>

                        <MemberCard memberName="Ghassen Abida" memberOccupation="RESP. VIDEOGRAPHIE PAR DRONE"/>

                        {/*Axes*/}

                        <MemberCard memberName="Nour Cheour" memberOccupation="RESP. AIRSHOW"/>

                        <MemberCard memberName="Nourchene Bargaoui" memberOccupation="AMBASSADRICE"/>

                        <MemberCard memberName="Aicha Mejlissi" memberOccupation="RESP. AEROSPACE"/>

                        <MemberCard memberName="Malek Ben Hmida" memberOccupation="RESP. EXPOSITIONS"/>

                        <MemberCard memberName="Bouhour Dhouib" memberOccupation="RESP. ATELIERS NOVICES"/>

                        {/*Media*/}

                        <MemberCard memberName="Hana Ben Asker" memberOccupation="RESP. MEDIA ON"/>

                        <MemberCard memberName="Nour Najjar" memberOccupation="RESP. MEDIA OFF"/>

                        <MemberCard memberName="Asma Hosni" memberOccupation="RESP. AUDIOVISUEL"/>

                        <MemberCard memberName="Zied Kanoun" memberOccupation="WEBMASTER"/>

                        <MemberCard memberName="Baha Msallem" memberOccupation="RESP. MULTIMEDIA"/>

                        {/*Coullisses*/}

                        <MemberCard memberName="Farah Gharbi" memberOccupation="TRESORIERE"/>

                        <MemberCard memberName="Asma Jebari" memberOccupation="RESP. SPONSORING"/>

                        <MemberCard memberName="Tasnim Dakhli" memberOccupation="RESP. ORGANISATION"/>

                        <MemberCard memberName="Ranim Saidi" memberOccupation="SECRETAIRE"/>

                        <MemberCard memberName="Ines Rouached" memberOccupation="RESP. DECORATION"/>
                        

                        <MemberCard memberName="Hazar Boughanmi" memberOccupation="RESSOURCES HUMAINES"/>



                    </div>
                </div>
            </div>
        );
    }
}

export default About