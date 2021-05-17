import React, {useEffect} from "react";
import './footerStyles.scss';
import { ReactComponent as Logo } from '../../styles/images/Logo.svg';
import $ from "jquery";

export default function Footer() {

    useEffect(() =>{
        $('#footer-logo g').attr('fill','#ffffff')
    }, [])

    return(
        <div id="footer-">
            <div id="footer-container">
                {/*<div className="--separator--"></div>*/}
                <div id="footer-left">
                    <div><Logo id="footer-logo" height="auto" width="209px" length="auto"/></div>
                    <p>Tunisian Aeroday est l'unique journée nationale consacrée entièrement à l'Aéronautique en Tunisie, elle est fondée par le club Aerobotix insat en collaboration avec l'association des techniques de robotique (ATR). Cette journée est basée sur plusieurs axes et sur des différents challenges et elle opte pour la vulgarisation du domaine aéronautique chez le grand public ainsi que sur la découverte de nouveaux potentiels dont disposent les jeunes.</p>
                </div>
                {/*<div className="--separator--" ></div>*/}
                <div id="footer-right">
                    <h2>KEEP IN TOUCH</h2>
                    <div id="contact-us-box">
                        <div id="footer-email">
                            <svg width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4.77344V18.2662L10.4509 11.6593L0 4.77344Z" fill="#519DA6"/><path d="M20.5488 11.6593L30.9997 18.2662V4.77344L20.5488 11.6593Z" fill="#519DA6"/><path d="M29.063 0.84375H1.93797C0.971156 0.84375 0.203906 1.5645 0.0585938 2.49256L15.5005 12.6664L30.9424 2.49256C30.797 1.5645 30.0298 0.84375 29.063 0.84375Z" fill="#519DA6"/><path d="M18.7749 12.8301L16.0333 14.6358C15.8706 14.7424 15.6865 14.7947 15.5005 14.7947C15.3145 14.7947 15.1304 14.7424 14.9677 14.6358L12.2261 12.8281L0.0625 20.5219C0.211688 21.4422 0.975063 22.1572 1.938 22.1572H29.063C30.0259 22.1572 30.7893 21.4422 30.9385 20.5219L18.7749 12.8301Z" fill="#519DA6"/></svg>
                            <div id="aeroday-mail--" >contact@aeroday.tn</div>
                        </div>
                        <div id="footer-location">
                            <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.48611 0 0 4.48611 0 10C0 11.6553 0.413848 13.2965 1.20059 14.7522L9.45317 29.6777C9.56303 29.8767 9.77238 30 10 30C10.2277 30 10.437 29.8767 10.5469 29.6777L18.8025 14.7473C19.5862 13.2965 20 11.6552 20 9.99996C20 4.48611 15.5139 0 10 0ZM10 15C7.24307 15 5.00004 12.757 5.00004 10C5.00004 7.24307 7.24307 5.00004 10 5.00004C12.757 5.00004 15 7.24307 15 10C15 12.757 12.757 15 10 15Z" fill="#519DA6"/></svg>
                            <div id="insat-location--">INSAT Centre Urbain Nord BP 676 -1080 Tunis Cedex</div>
                        </div>
                        <div id = "footer-phone">
                            <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.8615 20.4786L20.4347 16.5846C19.2108 15.1938 17.1302 15.7502 16.6407 17.5581C16.2735 18.8098 15.0497 19.5052 13.9482 19.227C11.5005 18.5316 8.19607 14.9157 7.58414 11.9951C7.21698 10.7434 7.9513 9.35267 9.05277 8.93551C10.6438 8.37921 11.1333 6.01495 9.90947 4.62421L6.48267 0.730139C5.50358 -0.24338 4.03495 -0.24338 3.17825 0.730139L0.852916 3.37255C-1.47242 6.15403 1.09769 13.5249 6.84983 20.0614C12.602 26.5979 19.0884 29.6576 21.5361 26.8761L23.8615 24.2336C24.7182 23.1211 24.7182 21.4522 23.8615 20.4786Z" fill="#519DA6"/></svg>
                            <div id="aeroday-phones"><span><i>+216</i> 28 169 089</span><span><i>+216</i> 50 720 345</span></div>{/*<span><i>+216</i> 28 455 462</span>*/}
                        </div>
                        <div id="footer-social">
                            <a href="https://www.facebook.com/TunAeroday" target="_blank"><div id="fb---"><svg width="26" height="26" viewBox="0 0 26 26" fill="#519DA6" xmlns="http://www.w3.org/2000/svg"><path d="M26 13C26 5.81953 20.1805 0 13 0C5.81953 0 0 5.81953 0 13C0 20.1805 5.81953 26 13 26C13.0762 26 13.1523 26 13.2285 25.9949V15.8793H10.4355V12.6242H13.2285V10.2273C13.2285 7.44961 14.9246 5.93633 17.4027 5.93633C18.591 5.93633 19.6117 6.02266 19.9062 6.06328V8.96797H18.2C16.8543 8.96797 16.5902 9.60781 16.5902 10.5473V12.6191H19.8148L19.3934 15.8742H16.5902V25.4973C22.0238 23.9383 26 18.9363 26 13Z" /></svg></div></a>
                            <a href="https://www.instagram.com/tunisian_aeroday/" target="_blank"><div id="in---"><svg width="26" height="26" viewBox="0 0 26 26" fill="#519DA6" xmlns="http://www.w3.org/2000/svg"><path d="M18.962 0H7.03796C3.15717 0 0 3.15717 0 7.03796V18.9622C0 22.8428 3.15717 26 7.03796 26H18.9622C22.8428 26 26 22.8428 26 18.9622V7.03796C26 3.15717 22.8428 0 18.962 0V0ZM13 20.1092C9.07993 20.1092 5.89082 16.9201 5.89082 13C5.89082 9.07993 9.07993 5.89082 13 5.89082C16.9201 5.89082 20.1092 9.07993 20.1092 13C20.1092 16.9201 16.9201 20.1092 13 20.1092V20.1092ZM20.2792 7.5674C19.1207 7.5674 18.1785 6.62517 18.1785 5.46672C18.1785 4.30827 19.1207 3.36584 20.2792 3.36584C21.4376 3.36584 22.3801 4.30827 22.3801 5.46672C22.3801 6.62517 21.4376 7.5674 20.2792 7.5674Z" /><path d="M13 7C9.69174 7 7 9.69153 7 13C7 16.3083 9.69174 19 13 19C16.3085 19 19 16.3083 19 13C19 9.69153 16.3085 7 13 7Z" /><path d="M20.4999 5C20.2243 5 20 5.22436 20 5.5C20 5.77564 20.2243 6 20.4999 6C20.7757 6 21 5.77581 21 5.5C21 5.22419 20.7757 5 20.4999 5Z" /></svg></div></a>
                            <a href="https://www.linkedin.com/company/tunisian-aeroday/" target="_blank"><div id="li---"><svg width="26" height="26" viewBox="0 0 26 26" fill="#519DA6" xmlns="http://www.w3.org/2000/svg"><path d="M23.4 0H2.6C1.17 0 0 1.17 0 2.6V23.4C0 24.83 1.17 26 2.6 26H23.4C24.83 26 26 24.83 26 23.4V2.6C26 1.17 24.83 0 23.4 0ZM7.8 22.1H3.9V10.4H7.8V22.1ZM5.85 8.19C4.55 8.19 3.51 7.15 3.51 5.85C3.51 4.55 4.55 3.51 5.85 3.51C7.15 3.51 8.19 4.55 8.19 5.85C8.19 7.15 7.15 8.19 5.85 8.19ZM22.1 22.1H18.2V15.21C18.2 14.1701 17.29 13.26 16.25 13.26C15.21 13.26 14.3 14.1701 14.3 15.21V22.1H10.4V10.4H14.3V11.96C14.95 10.92 16.38 10.14 17.55 10.14C20.02 10.14 22.1 12.22 22.1 14.69V22.1Z" /></svg></div></a>
                        </div>
                    </div>
                </div>
                
            </div>
            <div id="footer-copyright"> Copyright Aeroday ©2021 All rights reserved</div>
        </div>
    );
}