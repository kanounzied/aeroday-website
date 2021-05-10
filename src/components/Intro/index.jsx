import React, {useEffect, useRef} from "react";
import "./intro.scss"

export default function Intro() {

    const desc1 = useRef();
    const desc2 = useRef();

    useEffect(() => {
        // console.log('height', desc1.current.clientHeight)
        if (desc1.current.clientHeight >= desc2.current.clientHeight){
            desc2.current.style.height = desc1.current.clientHeight+"px"
        }
        else {
            desc1.current.style.height = desc2.current.clientHeight+"px"
        }
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