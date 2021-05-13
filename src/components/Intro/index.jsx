import React, {useEffect, useRef} from "react";
import "./intro.scss"

export default function Intro() {

    const desc1 = useRef();
    const desc2 = useRef();

    useEffect(() => {
        var heigh;
        if (desc1.current.clientHeight >= desc2.current.clientHeight){
            heigh = desc1.current.clientHeight+"px"
            desc1.current.style.height = heigh
            desc2.current.style.height = heigh
        }
        else {
            heigh = desc2.current.clientHeight+"px"
            desc1.current.style.height = heigh
            desc2.current.style.height = heigh
        }
        window.addEventListener('resize', function(event) {
            desc1.current.style.height = "unset";
            desc2.current.style.height = "unset";
            if (desc1.current.clientHeight >= desc2.current.clientHeight){
                desc2.current.style.height = desc1.current.clientHeight+"px"
            }
            else {
                desc1.current.style.height = desc2.current.clientHeight+"px"
            }
        }, true);
        console.log('height', desc1.current.style)
        // desc1.current.style.transform = "translateX(-90%)"
        // desc2.current.style.transform = "translateX(90%)"
        desc1.current.style.width = "2%"
        desc2.current.style.width = "2%"
        desc1.current.children[0].style.opacity = 0
        desc2.current.children[0].style.opacity = 0
        window.addEventListener('scroll', () => {

            if(window.scrollY >= 100){
                desc1.current.style.transition = "all 1s cubic-bezier(0.18, 0.89, 0.32, 1.28)"
                desc2.current.style.transition = "all 1s cubic-bezier(0.18, 0.89, 0.32, 1.28)"

                var wid = (window.innerWidth > 900) ? "40%" : "80%"
                desc1.current.style.width = wid
                desc1.current.children[0].style.opacity = 1
                setTimeout(() => {
                    desc2.current.children[0].style.opacity = 1
                    desc2.current.style.width = wid
                }, 200)
            }
        })
    }, [])

    return (
        <div className="acceuil">
            <div className="title"><h1>TUNISIAN AERODAY 2021</h1></div>
            <div className="description">
                <div ref={desc1} id="desc1"><p>Tunisian Aeoroday est l’unique <span>journée nationale</span> consacrée entiérement à l’Aeronautique en Tunisie, elle est fondé par le club <span>Aerobotix INSAT</span> en collaboration avec l’Assocation                    de techniques de robotiques <span>(ATR)</span></p></div>
                <div ref={desc2} id="desc2"><p>Cette journée est basée sur plusieurs <span>axes</span> et sur des différents <span>challenges</span> et elle opte pour la vulgarisation du domaine <span>aéronautique</span> chez le grand public ainsi que sur la découverte de nouveaux potentiels dont disposent les jeunes.</p></div>
            </div>
        </div>
    );
}