import React, {useEffect, useRef} from "react";
import './box.scss'
import $ from 'jquery'
import ACdropdown from "../ACdropdown";

export default function ACbox(props){

    const img = useRef()

    useEffect(() => {
        $('.ac-box').click(() => {
            var title = $('.ac-box .title')
            if (window.innerWidth > 900) {
                title.css('transform', "translate(-37.5%, calc(50% - 20vw)) rotate(90deg)")
            }
            //$('.dropdown').css('z-index', 0)
        })
        // box.current.addEventListener('click', () => {
        //     let width = box.current.clientWidth
        //     title.current.style.transform = "translate(-37.5%, calc(50% - var(--20))) rotate(90deg)"
        //     //if (width == 400) title.current.style.transform = "translate(0, 0) rotate(0)"
        // })
    }, [])

    var classname = "ac-box " + props.AC.toLowerCase()
    return(
        <>
            <div className={classname} style={{backgroundImage : "url(http://localhost:3000/assests/images/IMG_"+ props.AC.toLowerCase() + ".jpg)"}} >
                <img className={"ACimage"} src={process.env.PUBLIC_URL + "/assests/images/IMG_"+ props.AC.toLowerCase()+".jpg"} alt={props.AC.toUpperCase()} />
                <div className="title">
                    <h1>{props.AC.toUpperCase()}</h1>
                </div>
                <div className="dropdown-container">
                    <ACdropdown titre={'dropdown 1'}/>
                    <ACdropdown titre={'dropdown 2'}/>
                    <ACdropdown titre={'dropdown 3'}/>
                    <ACdropdown titre={'dropdown 4'}/>
                    <ACdropdown titre={'dropdown 5'}/>
                </div>
            </div>
        </>
    );
}