import React,{useEffect} from "react";
import $ from 'jquery';
import './Acnav.scss';
import img1 from '../../styles/images/nav-pics/coupe1-axes/1.webp';
import img2 from '../../styles/images/nav-pics/coupe1-axes/2.webp';
import img3 from '../../styles/images/nav-pics/coupe1-axes/3.webp';
import img4 from '../../styles/images/nav-pics/coupe1-axes/4.webp';
import img5 from '../../styles/images/nav-pics/coupe1-axes/5.webp';
import img1r from '../../styles/images/nav-pics/coupe2-challenges/1.webp';
import img2r from '../../styles/images/nav-pics/coupe2-challenges/2.webp';
import img3r from '../../styles/images/nav-pics/coupe2-challenges/3.webp';
import img4r from '../../styles/images/nav-pics/coupe2-challenges/4.webp';
import img5r from '../../styles/images/nav-pics/coupe2-challenges/5.webp';


export default function ACnav(props) {

       if(props.direction)
    return (
        <svg className={"navsvg"} width="136" height="715" viewBox="0 0 136 715" fill="none" xmlns="http://www.w3.org/2000/svg">
            <image className={"svgImage"} xlinkHref={img1} onClick={() => props.clickImage(0)} height={170} x={-30} y={0} />
            <image className={"svgImage"} xlinkHref={img2} onClick={() => props.clickImage(1)} height={170} x={-30} y={130} />
            <image className={"svgImage"} xlinkHref={img3} onClick={() => props.clickImage(2)} height={170} x={-30} y={267} />
            <image className={"svgImage"} xlinkHref={img4} onClick={() => props.clickImage(3)} height={170} x={-30} y={407} />
            <image className={"svgImage"} xlinkHref={img5} onClick={() => props.clickImage(4)} height={170} x={-30} y={542} />
            <path d="M3.64545 130.6L133.495 168.266" stroke="url(#paint0_linear)" strokeWidth="5"/>
            <line x1="1.65268" y1="265.601" x2="134.653" y2="304.601" stroke="#519DA6" strokeWidth="5"/>
            <line x1="1.65268" y1="401.601" x2="134.653" y2="440.601" stroke="#519DA6" strokeWidth="5"/>
            <path d="M3.49023 541L133.004 579" stroke="#519DA6" strokeWidth="5"/>
            <path d="M3.44043 571.907V3.5L39.1066 14.337C95.1378 31.3619 133.441 83.0318 133.441 141.592V711.002L94.6737 698.179C40.2151 680.165 3.44043 629.267 3.44043 571.907Z" stroke="url(#paint1_linear)" stroke-width="5"/>
            <defs>
                <linearGradient id="paint0_linear" x1="2.9481" y1="133" x2="133.948" y2="171" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B7E83"/>
                    <stop offset="1" stopColor="#728C92"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="68.4405" y1="3.5" x2="68.4405" y2="711.002" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D95252"/>
                    <stop offset="0.322917" stopColor="#519DA6"/>
                </linearGradient>
            </defs>
        </svg>
    )
    else
        return (
            <svg className={"navsvg"} width="136" height="715" viewBox="0 0 136 715" fill="none" xmlns="http://www.w3.org/2000/svg">
                <image className={"svgImage"} xlinkHref={img1r} onClick={() => props.clickImage(0)} height={170} x={-30} y={0} />
                <image className={"svgImage"} xlinkHref={img2r} onClick={() => props.clickImage(1)} height={170} x={-30} y={130} />
                <image className={"svgImage"} xlinkHref={img3r} onClick={() => props.clickImage(2)} height={170} x={-30} y={267} />
                <image className={"svgImage"} xlinkHref={img4r} onClick={() => props.clickImage(3)} height={170} x={-30} y={404} />
                <image className={"svgImage"} xlinkHref={img5r} onClick={() => props.clickImage(4)} height={170} x={-30} y={542} />
                <path d="M132.303 130.59L2.49895 167.991" stroke="url(#paint0_linear)" strokeWidth="5"/>
                <line y1="-2.5" x2="138.6" y2="-2.5" transform="matrix(-0.959595 0.281385 0.281385 0.959595 134.999 267.99)" stroke="#519DA6" strokeWidth="5"/>
                <line y1="-2.5" x2="138.6" y2="-2.5" transform="matrix(-0.959595 0.281385 0.281385 0.959595 134.999 403.99)" stroke="#519DA6" strokeWidth="5"/>
                <path d="M132.5 541L2.49979 578.999" stroke="#519DA6" strokeWidth="5"/>
                <path d="M132.508 571.897V3.49023L96.8416 14.3273C40.8104 31.3521 2.50761 83.0221 2.50761 141.583V710.992L41.2745 698.169C95.7331 680.156 132.508 629.258 132.508 571.897Z" stroke="url(#paint1_linear)" stroke-width="5"/>
                <defs>
                    <linearGradient id="paint0_linear" x1="133" y1="133" x2="2.00018" y2="171" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8B7E83"/>
                        <stop offset="1" stopColor="#728C92"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="67.5077" y1="3.49023" x2="67.5077" y2="710.992" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D95252"/>
                        <stop offset="0.322917" stopColor="#519DA6"/>
                    </linearGradient>
                </defs>
            </svg>

        )
}