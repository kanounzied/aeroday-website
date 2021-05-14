import React, {useEffect, useRef, useState} from "react";
import './box.scss'
import $ from 'jquery'

export default function ACbox(props){

    const img = useRef()

    useEffect(() => {
        $('.ac-box').click(() => {
            var title = $('.ac-box .title')
            title.css('transform', "translate(-37.5%, calc(50% - 20vw)) rotate(90deg)")
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
            <div className={classname} >
                <img className={"ACimage"} src={process.env.PUBLIC_URL + "/assests/images/IMG_"+ props.AC.toLowerCase()+".jpg"} alt={props.AC.toUpperCase()} />
                <div className="title">
                    <h1>{props.AC.toUpperCase()}</h1>
                </div>
            </div>
        </>
    );
}