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
                <div className="droptitle">{props.ac.titre}</div>
                <img src={process.env.PUBLIC_URL + "/assests/images/arrow.png"} className="arrow"/>
                <div className="dropdown-content">
                    {/*<h1>testing 1 2 !!</h1>*/}
                    <ACbody titleAC={props.ac.titre} acType={props.ac.titre} description={props.ac.description}
                            memberName={props.ac.memberName} memberOccupation={props.ac.memberOccupation}
                            cdc1={props.ac.cdc1}   cdc2={props.ac.cdc2}   cdes={props.ac.cdes}
                            CDC1URL={props.ac.CDC1URL} CDC2URL={props.ac.CDC2URL} CDESURL={props.ac.CDESURL} />

                </div>
            </div>
        </>
    )
}