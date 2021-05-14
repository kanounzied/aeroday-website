import React, {useEffect, useRef} from "react";
import "./home.scss";
import $ from 'jquery'
import AeroButton from "../../components/AeroButton";
import TitleBanner from "../../components/TitleBanner";
import AeroForm from "../../components/Formulaire";
import Intro from "../../components/Intro"
import ACbody from "../../components/AC body"
import ACheader from "../../components/AC Header";
import ACbox from "../../components/AC box";
// import Sidebar from "../../components/AC sidebar"

const desc_aeroday=<p>Revient pour la cinquième année consécutive dans <span>Le Tunisian Aeroday</span>. Les participants devront <span>construire</span> leurs 
propres <span>modèles</span> de planeur de taille réduite,les <span>présenter</span> à un public de professionnels et d'amateurs et les faire <span>voler</span>. 
Cette compétition est ouverte pour toutes les personnes souhaitant partager leur passion avec les autres.</p>


export default function Home() {

    const axes = useRef();
    const challenges = useRef();

    useEffect(() => {
        // var transformSize = axes.getTitleHeight();
        // console.log('size', transformSize)
        $('#home').addClass('selected');
        var width = $(".ac-box").width()
        $('.ac-boxes .axes').click(() => {
            $('.ac-boxes .axes').css({
                'width': "75vw",
                'opacity': (window.innerWidth < 900) ? 1 : 0
            })
            $('.ac-boxes .challenges').css({
                'opacity': 1,
            'width': ( window.innerWidth > 900) ? "10vw" : "40vw"
            })
            if (window.innerWidth < 900) {
                var axeimg = $('.axes .ACimage')
                var challengeimg = $('.challenges .ACimage')
                if (axeimg.width() > window.outerWidth*40/100) {
                    axeimg.addClass("expanded")
                    challengeimg.removeClass("expanded")
                }
            }
        })
        $('.ac-boxes .challenges').click(() => {
            $('.ac-boxes .axes').css({
                'width': (window.innerWidth > 900) ? "10vw" : "40vw",
                'opacity': 1
            })
            $('.ac-boxes .challenges').css({
                'width': "75vw",
                'opacity': (window.innerWidth < 900) ? 1 : 0
            })
            if (window.innerWidth < 900) {
                var challengeimg = $('.challenges .ACimage')
                var axeimg = $('.axes .ACimage')
                console.log('outer', window.outerWidth*40/100)
                if (challengeimg.width() > window.outerWidth*40/100) {
                    challengeimg.addClass("expanded")
                    axeimg.removeClass("expanded")
                }
            }
        })

    });

        return (
            <div className="home" style={{height:"2000px"}} >
                <Intro />
                <div className="section">
                    <TitleBanner text={"Axes & Challenges"}/>
                    <div className="ac-boxes">
                        <ACbox ref={axes} AC={"AXES"}/>
                        <ACbox ref={challenges} AC={"Challenges"}/>
                    </div>
                    {/*<ACbody titleAC="CHALLENGES" acType="Aeromodelisme" description={desc_aeroday}*/}
                    {/*        memberName="Haizem Dahech" memberOccupation="RESP. AEROMODELISME"*/}
                    {/*        cdc1="1"   cdc2="0"   cdes="1"*/}
                    {/*        CDC1URL="https://www.facebook.com/" CDC2URL="https://www.facebook.com/" CDESURL="https://www.facebook.com/" />*/}
                </div>
                <div className="section">

                </div>
                <div className="section">

                </div>
                <div className="section">

                </div>
                <div className="section">

                </div>
                {/*<div className="container-for-test">*/}
                {/*    <TitleBanner text={"small components place"} />*/}
                {/*    <AeroForm />*/}
                {/*    <AeroButton path={"/"} text={"formulaire"}/>*/}
                {/*</div>*/}
            </div>
        );
}