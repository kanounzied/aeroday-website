import React, {useEffect, useRef} from "react";
import './dropdown.scss'
import $ from 'jquery'
import ACbody from "../AC-body";

export default function ACdropdown(props){

    const dropdown = useRef()

    useEffect(() => {
    })

    return(
        <>
            <div ref={dropdown} className="dropdown">
                <div className="droptitle">{props.titre}</div>
                <img src={process.env.PUBLIC_URL + "/assests/images/arrow.png"} className="arrow"/>
                <div className="dropdown-content">
                    {/*<h1>testing 1 2 !!</h1>*/}
                    <ACbody titleAC="CHALLENGES" acType="Aeromodelisme" description={
                        <p>Revient pour la cinquième année consécutive dans <span>Le Tunisian Aeroday</span>. Les participants devront <span>construire</span> leurs
                            propres <span>modèles</span></p>
                    }
                            memberName="Haizem Dahech" memberOccupation="RESP. AEROMODELISME"
                            cdc1="1"   cdc2="0"   cdes="1"
                            CDC1URL="https://www.facebook.com/" CDC2URL="https://www.facebook.com/" CDESURL="https://www.facebook.com/" />

                </div>
            </div>
        </>
    )
}