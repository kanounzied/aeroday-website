import React, {useEffect, useState} from "react";
import "./ACbody.scss";
import ACheader from "../AC-header";
import MemberCard from "../Member";
import Button from "../button";
import $ from 'jquery'


export default function ACbody(props) {

    useEffect( () => {
        console.log(props)
    },[props])

    const style = {
        marginTop: (props.memberName === "Ghassen Abida") ? "0" : "10px",
    }

    return (
        <div className="ACbody">
            <div className="ac-details-container">
                <img className="--bgr--"
                     src={process.env.PUBLIC_URL + "/assets/images/background" + props.titleAC.toUpperCase() + ".webp"}
                     alt="bgr" width="100%" height="480px"/>
                <div className="member-and-button">
                    <MemberCard memberName={props.memberName} memberOccupation={props.memberOccupation}/>
                    {props.form && <Button className="formulaire" style={style} buttonText="FORMULAIRE" buttonURL={props.formLink}/>}
                </div>
                <div className="about-this-ac">
                    <h3>A Propos:</h3>
                    <div className="description-wrapper">
                        {props.description}
                    </div>
                </div>
                <div className="buttons-ac--">
                    {props.cdc1 === "1" && <div id="cdc1">
                        <Button
                            buttonText="CDC1" buttonURL={props.CDC1URL}/>
                    </div>}
                    {props.cdc2 === "1" && <div id="cdc2"><Button
                        buttonText="CDC2" buttonURL={props.CDC2URL}/></div>}
                    {props.cdes === "1" && <div id="cdes"><Button
                        buttonText="Cahier descriptif" buttonURL={props.CDESURL}/></div>}
                </div>
            </div>

        </div>
    )
}