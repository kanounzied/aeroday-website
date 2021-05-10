import React, {useEffect} from "react";
import "../../App.css";
import $ from 'jquery';
import { ReactComponent as Logo } from './Logo.svg';

export default function Navbar() {
    useEffect(() => {
        var navItem = $(".nav-items")
        console.log(navItem.width())
        $('.logo-svg g').attr('fill','#ffffff')

        $(window).scroll(function (){
            if ($(window).scrollTop() >= 100) {
                $('.navbar').addClass('smaller')
                $('.logo-svg g').attr('fill','#000000')
                //logo.attr('src', logo.attr('src').replace('White', 'Black'))
            } else {
                //logo.attr('src', logo.attr('src').replace('Black', 'White'))
                $('.navbar').removeClass('smaller')
                $('.logo-svg g').attr('fill','#ffffff')
            }
        })
    }, [])

        return (
            <>
                <div className="navbar">
                    <a href="/" className={"logo"}><Logo className="logo-svg" height="auto" width="190px" color={"#ffffff"}/>
                        {/*<img src={process.env.PUBLIC_URL + "/assests/images/LogoWhite.png"}*/}
                        {/*                                alt="aeroday logo" style={brandStyle}/>*/}
                    </a>
                    <div className="nav-items">
                        <ul>
                            <li className={"nav-item"} id={"home"}><a href="/">Acceuil</a></li>
                            <li className={"nav-item"} id={"axes"}><a href="/#axes&challenges">Axes & Challenges</a></li>
                            <li className={"nav-item"} id={"about"}><a href="/about">A Propos De Nous</a></li>
                            <li className={"nav-item"} id={"contact"}><a href="/contact">Contact Us</a></li>
                        </ul>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ☰
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/">Acceuil</a>
                                <a className="dropdown-item" href="/#axes&challenges">Axes & Challenges</a>
                                <a className="dropdown-item" href="/about">A Propos De Nous</a>
                                <a className="dropdown-item" href="/contact">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
}

