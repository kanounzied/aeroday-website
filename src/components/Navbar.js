import React from "react";
import {Component} from "react/cjs/react.production.min";
import "../App.css";
import $ from 'jquery'

class Navbar extends Component {

    componentDidMount() {
        var navItem = $(".nav-items")
        var logo = $('.logo img')
        console.log(navItem.width())
        $(window).scroll(function (){
            if ($(window).scrollTop() >= 500){
                $('.navbar').css({
                    'height': '65px',
                    'background-color': 'var(--white-aeroday)'
                })
                $('.logo').css({
                    'transform': 'translateX(-100%)'
                })
                logo.attr('src', logo.attr('src').replace('White', 'Black')).css('height', '35px')
                //navItem.css('transform', 'translateX('+navItem.width()+'px)')
                $('.navbar .nav-items ul li a').css('color', 'var(--dark-color)')

            }
        })
    }

    render() {
        const brandStyle = {
            height: "50px",
        }
        return (
            <>
                <div className="navbar">
                    <a href="/" className={"logo"}><img src={process.env.PUBLIC_URL + "/assests/images/LogoWhite.png"}
                                                        alt="aeroday logo" style={brandStyle}/></a>
                    <div className="nav-items">
                        <ul>
                            <li className={"nav-item"} id={"home"}><a href="/">Acceuil</a></li>
                            <li className={"nav-item"} id={"axes"}><a href="/#axes&challenges">Axes & Challenges</a></li>
                            <li className={"nav-item"} id={"about"}><a href="/about">A Propos De Nous</a></li>
                            <li className={"nav-item"} id={"contact"}><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar