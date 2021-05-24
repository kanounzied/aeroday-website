import React, {useEffect, useState} from "react";
import './box.scss'
import $ from 'jquery'
import ACdropdown from "../ACdropdown";
import ACbody from "../AC-body";
import ACnav from "../AC-nav";
import ACheader from "../AC-header";
import * as url from "url";

// import { ReactComponent as LeftACNav } from '../../styles/images/left-nav.svg'



export default function ACbox(props) {


    const [axeId, setAxeId] = useState(0);
    const handleAxesIdChange= (id) =>
    {
        setAxeId(id);
        console.log(id);
    }

    const [challengeId, setChallengeId] = useState(0);
    const handleChallengesIdChange= (id) =>
    {
        setChallengeId(id);
        console.log(id);
    }


    useEffect(() => {
        //setAxeId("axes", 1)
        console.log("axeid", axeId);
        var acBox = $('.ac-box')
        acBox.click(() => {
            var title = $('.ac-box .title')
            title.addClass('rotate')
            title.css('width', acBox.css('height'))
            acBox.addClass('clicked')
            acBox.css('background', process.env.PUBLIC_URL  + "/assets/images/IMG_" + props.AC.toLowerCase() + ".webp")
        })
    }, [])

    var classname = "ac-box " + props.AC.toLowerCase()
    var show = "ac-show " + props.AC.toLowerCase()
    var navigation = "ac-navigation " + props.AC.toLowerCase()
    var ac = (props.AC.toLowerCase() === 'axes') ?
        <div className={show}>
            <div className="AC">
                <ACheader name={props.AC} displayed={props.acArray[axeId].titre}/>
                <ACbody
                titleAC={props.AC} acType={props.acArray[axeId].titre}
                        description={props.acArray[axeId].description}
                        memberName={props.acArray[axeId].memberName}
                        memberOccupation={props.acArray[axeId].memberOccupation}
                        cdc1={props.acArray[axeId].cdc1} cdc2={props.acArray[axeId].cdc2}
                        cdes={props.acArray[axeId].cdes}
                        CDC1URL={props.acArray[axeId].CDC1URL} CDC2URL={props.acArray[axeId].CDC2URL}
                        CDESURL={props.acArray[axeId].CDESURL}/>
            </div>
            <div className={navigation}>
                <ACnav direction={true} clickImage={handleAxesIdChange}/>

            </div>
        </div>
        :
        <div className={show}>
            <div className="AC">
                <ACheader name={props.AC} displayed={props.acArray[challengeId].titre}/>
                <ACbody titleAC={props.AC} acType={props.acArray[challengeId].titre}
                        description={props.acArray[challengeId].description}
                        memberName={props.acArray[challengeId].memberName}
                        memberOccupation={props.acArray[challengeId].memberOccupation}
                        cdc1={props.acArray[challengeId].cdc1} cdc2={props.acArray[challengeId].cdc2}
                        cdes={props.acArray[challengeId].cdes}
                        CDC1URL={props.acArray[challengeId].CDC1URL} CDC2URL={props.acArray[challengeId].CDC2URL}
                        CDESURL={props.acArray[challengeId].CDESURL}/>
            </div>
            <div className={navigation}>
                <ACnav direction={false} clickImage={handleChallengesIdChange}/>
            </div>
        </div>;

    return (
        <>
            <div className="ac-container">
                <div className={classname} style={{background: "url(" + process.env.PUBLIC_URL  + "/assets/images/IMG_" + props.AC.toLowerCase() + ".webp)"}}>
                    <img className={"ACimage"}
                         src={process.env.PUBLIC_URL + "/assets/images/IMG_" + props.AC.toLowerCase() + ".webp"}
                         alt={props.AC.toUpperCase()}/>
                    <div className="title">
                        <h1>{props.AC.toUpperCase()}</h1>
                    </div>
                    <div className="dropdown-container">
                        <ACdropdown ac={props.acArray[0]}/>
                        <ACdropdown ac={props.acArray[1]}/>
                        <ACdropdown ac={props.acArray[2]}/>
                        <ACdropdown ac={props.acArray[3]}/>
                        <ACdropdown ac={props.acArray[4]}/>
                    </div>
                </div>
                    {ac}
            </div>

        </>
    );
}