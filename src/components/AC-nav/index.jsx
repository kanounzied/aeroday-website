import React from "react";
import img1 from '../../styles/images/nav-pics/1.jpg';
import img2 from '../../styles/images/nav-pics/52872222-plan-de-moteur-d-avion-vecteur-de-contour-de-style-modèle.jpg';
import img3 from '../../styles/images/nav-pics/57209191_1557662491032275_7207597039910125568_o.jpg';
import img4 from '../../styles/images/nav-pics/86348831_176415983788233_6949551844238557184_n.png';
import img5 from '../../styles/images/nav-pics/Aeromodelisme1.jpg';


export default function ACnav() {
    return (
        <svg width="137" height="715" viewBox="0 0 137 715" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.948242 0L68.4482 20.75V20.75C108.568 33.083 135.948 70.145 135.948 112.117V714.5L68.4482 692.25V692.25C28.1647 678.971 0.948242 641.343 0.948242 598.927V0Z" fill="#C4C4C4"/>
            {/*<image xlinkHref={img1} height={150} x={5} y={5} />*/}
            <line x1="3.64472" y1="130.599" x2="134.645" y2="168.599" stroke="url(#paint0_linear)" stroke-width="5"/>
            <line x1="1.6517" y1="265.601" x2="134.652" y2="304.601" stroke="#519DA6" stroke-width="5"/>
            <line x1="1.6517" y1="401.601" x2="134.652" y2="440.601" stroke="#519DA6" stroke-width="5"/>
            <line x1="2.6517" y1="540.601" x2="135.652" y2="579.601" stroke="#519DA6" stroke-width="5"/>
            <path d="M3.43945 600.085V3.5L66.7675 22.742C106.368 34.7745 133.44 71.2932 133.44 112.682V711.002L67.9201 689.33C29.4306 676.599 3.43945 640.626 3.43945 600.085Z" stroke="url(#paint1_linear)" stroke-width="5"/>
            <defs>
                <linearGradient id="paint0_linear" x1="2.94824" y1="133" x2="133.948" y2="171" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8B7E83"/>
                    <stop offset="1" stop-color="#728C92"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="68.4396" y1="3.5" x2="68.4396" y2="711.002" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D95252"/>
                    <stop offset="0.322917" stop-color="#519DA6"/>
                </linearGradient>
            </defs>
        </svg>

    )
}