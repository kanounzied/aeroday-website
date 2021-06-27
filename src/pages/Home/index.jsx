import React, {useEffect, useRef, Suspense} from "react";
import "./home.scss";
import "../../components/10th/tenth.scss"
import $ from 'jquery'
import TitleBanner from "../../components/TitleBanner";
import Intro from "../../components/Intro";
import ACbox from "../../components/AC-box";
import Slide from "../../components/Slide";
import Preloader from "./../../components/Preloader/Preloader";

const Sponsors = React.lazy(() => import("./../../components/Sponsors"))
const GoogleMaps = React.lazy(() => import('./../../components/GoogleMaps/GoogleMaps'))

export default function Home() {

    const axes = useRef();
    const challenges = useRef();

    const axesArray = [
        {
            titre: 'AIRSHOW',
            description: <p>L'Airshow est un challenge indoor
                consacré aux avions <span>radio-commandées</span>.
                Lors de ce show aérien compétitif les participants sont amenés à présenter un show spectaculaire,
                utile et innovant qui met en valeur leurs compétences de <span>pilotage </span>.
                Un jury professionnel et un public enthousiaste seront présents pour évaluer les différentes
                performances.</p>,
            memberName: "Nour Cheour",
            memberOccupation: "RESP. AIRSHOW",
            cdc1: "1",
            cdc2: "0",
            cdes: "1",
            CDC1URL: "#",
            CDC2URL: "#",
            CDESURL: "#"
        },
        {
            titre: 'EXPOSITIONS AÉRONAUTIQUES',
            description: <p>Des <span>Stands</span> éblouissent les visiteurs par la <span>créativité</span>
                et l'<span>enthousiasme</span> des jeunes étudiants intéressés par l'<span>aéronautique</span>.
                Parmi les différents projets exposés, on cite Le <span>simulateur de vol monoplace à 360°</span> crée
                par l'équipe Technique du Club <span>Aerobotix INSAT</span> et exposé lors de l'édition de 2014 celui-ci
                ressemble
                au célèbre simulateur de vol de Microsoft pour le monde 3D.
                Une fois terminé, il sera capable de simuler l'ensemble des mouvements d'avions.</p>,
            memberName: "Malek Ben Hmida",
            memberOccupation: "RESP. EXPOS AÉRONAUTIQUES",
            cdc1: "1",
            cdc2: "0",
            cdes: "1",
            CDC1URL: "#",
            CDC2URL: "#",
            CDESURL: "#"
        },
        {
            titre: 'ATELIERS NOVICES',
            description: <p>Et parce que nous croyons en la capacité des générations à venir,
                on a conçu des <span>ateliers novices</span> qui ont pour objectif de créer un <span>mini Aeroday</span>
                pour les enfants âgés de 4 à 17 ans et leur faire surtout découvrir le monde
                de <span>l'aéronautique</span>.
                Et donc, des ateliers par âge, des <span>Stands</span> et des
                challenges <span>CAO</span>, <span>Aéromodélisme</span>,
                <span>Gaming</span> adaptés à leurs potentiels seront au rendez-vous!</p>,
            memberName: "Bouhour Dhouib",
            memberOccupation: "RESP. ATELIERS NOVICES",
            cdc1: "1",
            cdc2: "0",
            cdes: "1",
            CDC1URL: "#",
            CDC2URL: "#",
            CDESURL: "#"
        },
        {
            titre: 'AEROSPACE',
            description: <p>Dans un monde où les ressources diminuent <span>inexorablement</span>,
                beaucoup pensent que l’avenir de l’homme est dans <span>l’exploitation de l’espace</span>.
                Depuis son apparition, le secteur aérospatial a joué un role de <span>pionnier</span> et
                de <span>moteur</span>
                dans la détermination des origines de la vie, mais aussi dans la recherche et le développement.
                En <span>Tunisie</span>, désormais l’espace fait rêver de nombreux jeunes, qui cherchent à approfondir
                leurs connaissances
                dans ce domaine.</p>,
            memberName: "Aicha Mejlissi",
            memberOccupation: "RESP. AEROSPACE",
            cdc1: "1",
            cdc2: "0",
            cdes: "1",
            CDC1URL: "#",
            CDC2URL: "#",
            CDESURL: "#"
        },
        {
            titre: 'AMBASSADE',
            description: <p>L'ambassade est l'axe de <span>l'Aeroday</span> qui vise
                à <span>l'internationalisation</span>
                de l'événement soit par l'invitation des conférenciers, participants ou média internationaux.</p>,
            memberName: "Nourchene Bargaoui",
            memberOccupation: "AMBASSADRICE",
            cdc1: "1",
            cdc2: "0",
            cdes: "1",
            CDC1URL: "#",
            CDC2URL: "#",
            CDESURL: "#"
        },
    ]

    const challengesArray = [
        {
            titre: 'AEROCHALLENGE',
            description: <p>C'est une <span>compétition</span> ouverte aux étudiants et amateurs au cours de laquelle
                ils feront voler leurs <span>DRONES</span> dans un circuit bien déterminé tout en respectant <span>le cahier de charges</span>.
                Ce challenge aura pour but de réunir les passionnés de ce domaine lors d'une confrontation où le talent,
                les compétences et l'enthousiasme seront au rendez-vous pour couronner un vainqueur d'un <span>grand prix</span>.</p>,
            memberName: "Eya Ben Aziza",
            memberOccupation: "RESP. AEROCHALLENGE",
            cdc1: "1",
            cdc2: "0",
            cdes: "1",
            CDC1URL: "#",
            CDC2URL: "#",
            CDESURL: "#"
        },
        {
            titre: 'AÉROMODÉLISME',
            description: <p>Revient pour la cinquième année consécutive dans Le <span>Tunisian Aeroday</span>.
                Les participants devront construire leurs propres modèles de <span>planeur</span> de taille réduite,
                les présenter à un public de professionnels et d'amateurs et les faire voler.
                Cette compétition est ouverte pour <span>toutes</span> les personnes souhaitant partager leur <span>passion</span>
                avec les autres.</p>,
            memberName: "Haizem Dahech",
            memberOccupation: "RESP. AEROMODELISME",
            cdc1: "1",
            cdc2: "0",
            cdes: "1",
            CDC1URL: "#",
            CDC2URL: "#",
            CDESURL: "#"
        },
        {
            titre: 'VIDÉOGRAPHIE PAR DRONE',
            description: <p>Le nouveau challenge de vidéographie par drone est <span>né</span>.
                Ce challenge, comme son nom l'indique donne l'opportunité aux passionnés par la production visuelle
                par drone de présenter leurs oeuvres au <span>monde</span> et faire la course pour le premier prix,
                suivant un cahier des charges bien déterminé.</p>,
            memberName: "Ghassen Abida",
            memberOccupation: "RESP. VIDEOGRAPHIE PAR DRONE",
            cdc1: "1",
            cdc2: "0",
            cdes: "1",
            CDC1URL: "#",
            CDC2URL: "#",
            CDESURL: "#"
        },
        {
            titre: 'AEROENTREPRENEUR',
            description: <p>Le challenge <span>AeroEntrepreneur</span> est une compétition <span>24h</span> destinée
                aux jeunes ambitieux de l'entrepreneuriat et ceux qui ont des idées de projets dans le domaine <span>aéronautique </span>
                 et ses dérivés.
                Un cahier des charges sera distribué au équipes participantes contenant le(s) sujet(s) à traiter ainsi que les <span>critères de sélection</span>
                et les documents demandés et bien sûr Les participants vont présenter leur travail devant des juges experts dans le domaine de l'entrepreneuriat.</p>,
            memberName: "Ikram Rejeb",
            memberOccupation: "RESP. AEROENTREPRENEUR",
            cdc1: "1",
            cdc2: "0",
            cdes: "1",
            CDC1URL: "#",
            CDC2URL: "#",
            CDESURL: "#"
        },
        {
            titre: 'CAO',
            description: <p>Le challenge de CAO <span>(Conception Assistée par Ordinateur)</span> est une compétition
                destinée aux amateurs du <span>design</span> et du domaine <span>aéronautique</span> en même temps.
                Le challenge dure 24 heures au cours desquelles les participants vont donner naissance à un modèle <span>3D</span> valide et innovant d'un <span>engin volant</span> moyennant
                les logiciels récents de modélisation (SolidWorks et Catia).
                Les participants vont présenter leur travail devant des juges experts dans le domaine de CAD afin de l'évaluer selon des critères bien déterminés.</p>,
            memberName: "Mohamed Yassine Brahem",
            memberOccupation: "RESP. CAO",
            cdc1: "1",
            cdc2: "0",
            cdes: "1",
            CDC1URL: "#",
            CDC2URL: "#",
            CDESURL: "#"
        },
    ]

    useEffect(() => {

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 900) {
                $('.ac-box .dropdown-container').css('display', 'none')
                $('.ac-boxes .axes .title').css("display", 'flex')
                $('.ac-boxes .challenges .title').css("display", 'flex')
                $('.ac-box').css({
                    'max-height': 'unset',
                    'height': '40vw'
                })
            } else {
                $('.ac-box').css({'max-height': '300px'})
            }
        })
        // var transformSize = axes.getTitleHeight();
        // console.log('size', transformSize)
        $('#home').addClass('selected');
        $('.ac-boxes .axes').click(() => {
            $('.ac-boxes .ac-box.axes').css({
                'width': (window.innerWidth < 900) ? "80vw" : "75vw",
                'opacity': (window.innerWidth < 900) ? 1 : 0
            })
            $('.ac-boxes .ac-box.challenges').css({
                'opacity': 1,
                'width': (window.innerWidth > 900) ? "8vw" : "40vw"
            })
            $('.ac-boxes .ac-show.axes').addClass('translated')
            $('.ac-boxes .ac-show.challenges').removeClass('translated')

            if (window.innerWidth < 900) {
                var axeimg = $('.axes .ACimage')
                var challengeimg = $('.challenges .ACimage')
                if (axeimg.width() > window.outerWidth * 40 / 100) {
                    axeimg.addClass("expanded")
                    challengeimg.removeClass("expanded")
                }
                $('.ac-boxes .axes .title').css("display", 'none')
                $('.ac-boxes .challenges .title').css("display", 'flex')
                $('.challenges .dropdown-container').css({"opacity": 0, "z-index": -1})
                $('.axes .dropdown-container').css({"opacity": 1, "z-index": 0})
            }
        })
        $('.ac-boxes .challenges').click(() => {
            $('.ac-boxes .ac-box.axes').css({
                'width': (window.innerWidth > 900) ? "8vw" : "40vw",
                'opacity': 1
            })
            $('.ac-boxes .ac-box.challenges').css({
                'width': (window.innerWidth < 900) ? "80vw" : "75vw",
                'opacity': (window.innerWidth < 900) ? 1 : 0
            })
            $('.ac-boxes .ac-show.challenges').addClass('translated')
            $('.ac-boxes .ac-show.axes').removeClass('translated')
            if (window.innerWidth < 900) {
                var challengeimg = $('.challenges .ACimage')
                var axeimg = $('.axes .ACimage')
                //console.log('outer', window.outerWidth*40/100)
                if (challengeimg.width() > window.outerWidth * 40 / 100) {
                    challengeimg.addClass("expanded")
                    axeimg.removeClass("expanded")
                }
                $('.ac-boxes .axes .title').css("display", 'flex')
                $('.ac-boxes .challenges .title').css("display", 'none')
                $('.challenges .dropdown-container').css({"opacity": 1, "z-index": 0})
                $('.axes .dropdown-container').css({"opacity": 0, "z-index": -1})
            }
        })
        $(document).click((evt) => {

            var targeted
            var comparedHeight = (window.outerWidth * 80 / 100 < 300) ? window.outerWidth * 80 / 100 : 300
            if (window.innerWidth < 900) {
                $('.ac-box .dropdown-container').css('display', 'flex')
                if (['dropdown', 'arrow', 'droptitle'].includes(evt.target.className)) {//drop it
                    $('.dropdown-container .dropdown .arrow').removeClass('rotate')
                    $('.dropdown-container .dropdown .droptitle').removeClass('open')
                    $('.dropdown-container .dropdown').removeClass('open')
                    $('.ac-box').removeClass('open')
                    $('.dropdown-container .dropdown .dropdown-content').removeClass('open')
                    if (evt.target.className === 'dropdown') {
                        targeted = evt.target
                    } else if (evt.target.className === 'arrow') {
                        targeted = evt.target.parentElement
                    } else {
                        targeted = evt.target.parentElement
                    }
                    targeted.className = 'dropdown open'
                    targeted.children[0].className = 'droptitle open'
                    targeted.children[1].className = 'arrow rotate'
                    targeted.children[2].className = 'dropdown-content open'
                    targeted.parentElement.parentElement.className += ' open'
                    targeted.parentElement.parentElement.style.maxHeight = 'unset'
                    //console.log('targeted', targeted)
                } else { // close all
                    console.log(window.innerHeight)
                    $('.dropdown-container .dropdown .arrow').removeClass('rotate')
                    $('.dropdown-container .dropdown .droptitle').removeClass('open')
                    $('.dropdown-container .dropdown').removeClass('open')
                    $('.ac-box').removeClass('open').css('height', comparedHeight + 'px')
                    $('.dropdown-container .dropdown .dropdown-content').removeClass('open')
                    setTimeout(() => {
                        $('.ac-box').css({
                            'max-height': '300px',
                            'height': (window.innerWidth <= 310) ? '300px' : '80vw'
                        })
                    }, 500)

                }
            }
        })

    });

    return (
        <div className="home">
            <Preloader/>
            <Intro/>
            <div className="tenth-small">
                <img src= { process.env.PUBLIC_URL + "/assets/images/10th.png"} alt="ten" />
            </div>
            <div className="tenth-hover">
                <img src= { process.env.PUBLIC_URL + "/assets/images/10th_anniv.png"} alt="tenaniv" />
            </div>
            <div id={"axes&challenges"} className="section">
                <TitleBanner text={"Axes & Challenges"}/>
                <div className="ac-boxes">
                    <ACbox acArray={axesArray} ref={axes} AC={"Axes"}/>
                    <ACbox acArray={challengesArray} ref={challenges} AC={"Challenges"}/>
                </div>
            </div>
            <div className="section">
                <TitleBanner text="Aeroday Edition 2019"/>
                <Slide/>
            </div>
            <div className="section">
                <TitleBanner text="Aeroday Location"/>
                    <Suspense fallback={<p>loading gogle maps...</p>}>
                        <GoogleMaps/>
                    </Suspense>
            </div>
            <section className="aaa">
                <Suspense fallback={<p>loading Sponsors section...</p>}>
                    <Sponsors/>
                </Suspense>
            </section>
            {/*<div className="section">*/}
            {/*</div>*/}

        </div>
    );

}