import React, {useEffect, useState} from "react";
import './box.scss'
import $ from 'jquery'
import ACdropdown from "../ACdropdown";
import ACbody from "../AC-body";
import ACnav from "../AC-nav";
import ACheader from "../AC-header";
// import { ReactComponent as LeftACNav } from '../../styles/images/left-nav.svg'

export default function ACbox(props) {

    //const [axesId, setAxesId] = useState(0);
    const axesId = 0;


    useEffect(() => {
        var acBox = $('.ac-box')
        acBox.click(() => {
            var title = $('.ac-box .title')
            title.addClass('rotate')
            acBox.addClass('clicked')
            // if (window.innerWidth > 900) {
            //     title.css('transform', "translate(-37.5%, calc(50% - 20vw)) rotate(90deg)")
            // }
            //$('.dropdown').css('z-index', 0)
        })
    }, [])

    var classname = "ac-box " + props.AC.toLowerCase()
    return (
        <>
            <div className={classname}
                 style={{backgroundImage: "url(http://localhost:3000/assests/images/IMG_" + props.AC.toLowerCase() + ".jpg)"}}>
                <img className={"ACimage"}
                     src={process.env.PUBLIC_URL + "/assests/images/IMG_" + props.AC.toLowerCase() + ".jpg"}
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
            <div className="axes-show">
                <div className="AC">
                    <ACheader name={"testing"} displayed={'testing zeda'}/>
                    <ACbody titleAC={props.AC} acType={props.acArray[axesId].titre} description={props.acArray[axesId].description}
                            memberName={props.acArray[axesId].memberName} memberOccupation={props.acArray[axesId].memberOccupation}
                            cdc1={props.acArray[axesId].cdc1} cdc2={props.acArray[axesId].cdc2} cdes={props.acArray[axesId].cdes}
                            CDC1URL={props.acArray[axesId].CDC1URL} CDC2URL={props.acArray[axesId].CDC2URL} CDESURL={props.acArray[axesId].CDESURL}/>
                </div>
                <div className="axes-navigation" >
                    {/*onClick={setAxesId(1)}*/}
                    <ACnav />
                </div>
            </div>
            <div className="challenges-show"></div>
        </>
    );
}