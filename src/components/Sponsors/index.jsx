import React, {useEffect, useRef} from "react";
import './spons.scss'
import ontt from './img/ONTT.png'
import planB from './img/PlanB.png'
import hutch from './img/Hutchinson.png'
import sogip from './img/Sogip.png'
import stb from './img/STB.png'
import zen from './img/ZENHOST.png'
import bg from './img/carousel-bg.jpg'

export default function Sponsors(props) {
    return (
        <>
            <div className="spons-container" style={{
                backgroundImage: 'url('+bg+')'
            }}>
                <figure className="container">
                    <div className="title-list">
                        <div className="title"><h2>ONTT</h2><span>Partenaire</span></div>
                        <div className="title"><h2>Plan B</h2><span>Premium Sponsor</span></div>
                        <div className="title"><h2>Hustchinson</h2><span>Silver Sponsor</span></div>
                        <div className="title"><h2>Sogip</h2><span>Bronze Sponsor</span></div>
                        <div className="title"><h2>STB finance</h2><span>Bronze Sponsor</span></div>
                        <div className="title"><h2>Zenhost</h2><span>Bronze Sponsor</span></div>
                        <div className="title"><h2>ONTT</h2><span>Partenaire</span></div>
                    </div>
                    <div className="logo-list">
                        <div className="logo"><img src={ontt} alt=""/></div>
                        <div className="logo"><img src={planB} alt=""/></div>
                        <div className="logo"><img src={hutch} alt=""/></div>
                        <div className="logo"><img src={sogip} alt=""/></div>
                        <div className="logo"><img src={stb} alt=""/></div>
                        <div className="logo"><img src={zen} alt=""/></div>
                        <div className="logo"><img src={ontt} alt=""/></div>
                    </div>
                    <div className="indexes">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </figure>
            </div>
        </>
    )
}