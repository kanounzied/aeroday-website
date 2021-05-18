import React, {useEffect, useRef} from "react";
import "./home.scss";
import $ from 'jquery'
import AeroButton from "../../components/AeroButton";
import TitleBanner from "../../components/TitleBanner";
import AeroForm from "../../components/Formulaire";
import Intro from "../../components/Intro";
import ACbox from "../../components/AC-box";
import GoogleMaps from './../../components/GoogleMaps/GoogleMaps'
import Slide from "../../components/Slide";
import Preloader from "./../../components/Preloader/Preloader";
import Sponsors from "./../../components/Sponsors";

export default function Home() {

    const axes = useRef();
    const challenges = useRef();

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
            $('.ac-boxes .axes').css({
                'width': (window.innerWidth < 900) ? "80vw" : "75vw",
                'opacity': (window.innerWidth < 900) ? 1 : 0
            })
            $('.ac-boxes .challenges').css({
                'opacity': 1,
                'width': (window.innerWidth > 900) ? "10vw" : "40vw"
            })
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
            $('.ac-boxes .axes').css({
                'width': (window.innerWidth > 900) ? "10vw" : "40vw",
                'opacity': 1
            })
            $('.ac-boxes .challenges').css({
                'width': (window.innerWidth < 900) ? "80vw" : "75vw",
                'opacity': (window.innerWidth < 900) ? 1 : 0
            })
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
                    console.log('targeted', targeted)
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
                            'height': '80vw'
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
            <div className="section">
                <TitleBanner text={"Axes & Challenges"}/>
                <div className="ac-boxes">
                    <ACbox ref={axes} AC={"AXES"}/>
                    <ACbox ref={challenges} AC={"Challenges"}/>
                </div>
            </div>
            <div className="section">
                <TitleBanner text="Aeroday Edition 2019"/>
                <Slide/>
            </div>
            <div className="section">
                <TitleBanner text="Aeroday Location"/>
                <GoogleMaps/>
            </div>
            <section className="aaa">
                <Sponsors />
            </section>
            {/*<div className="section">*/}
            {/*</div>*/}

        </div>
    );

}