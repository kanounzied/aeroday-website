import React from "react";
import './footerStyles.css';
import {ReactComponent as Logo} from '../Navbar/Logo.svg';

export default function Footer() {
    return (
        <div id="footer-container">
            <div id="footer">
                <div id="footer-description-container">
                    <div id="logo-footer"><Logo classNameName="logo-svg" height="auto" width="190px" color={"#ffffff"}/>
                    </div>
                    <div id="footer-description">Tunisian Aeroday est l'unique journée nationale consacrée entièrement à
                        l'Aéronautique en Tunisie, elle est fondée par le club Aerobotix insat en collaboration avec
                        l'association des techniques de robotique (ATR). Cette journée est basée sur plusieurs axes et
                        sur des différents challenges et elle opte pour la vulgarisation du domaine aéronautique chez le
                        grand public ainsi que sur la découverte de nouveaux potentiels dont disposent les jeunes.
                    </div>
                </div>
                <div id="keep-in-touch">
                    <div id="kit-title">KEEP IN TOUCH</div>
                    <div id="footer-contact-block">
                        <div id="footer-contact-description">
                            <div className="footer-contact">
                                <div className="footer-contact-logo">
                                    <svg width="28" height="20" viewBox="0 0 28 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.5605 10.1435L28 16.111V3.92395L18.5605 10.1435Z" fill="#519DA6"/>
                                        <path d="M0 3.92395V16.111L9.4395 10.1435L0 3.92395Z" fill="#519DA6"/>
                                        <path
                                            d="M26.25 0.375H1.74999C0.87674 0.375 0.18374 1.026 0.0524902 1.86425L14 11.0535L27.9475 1.86425C27.8162 1.026 27.1232 0.375 26.25 0.375Z"
                                            fill="#519DA6"/>
                                        <path
                                            d="M16.9575 11.2005L14.4813 12.8315C14.3343 12.9277 14.168 12.975 14 12.975C13.832 12.975 13.6658 12.9277 13.5188 12.8315L11.0425 11.1987L0.0560303 18.148C0.19078 18.9792 0.88028 19.625 1.75003 19.625H26.25C27.1198 19.625 27.8093 18.9792 27.944 18.148L16.9575 11.2005Z"
                                            fill="#519DA6"/>
                                    </svg>
                                </div>
                                <div className="footer-info">Contact@aeroday.tn</div>
                            </div>
                            <div className="footer-contact">
                                <div className="footer-contact-logo">
                                    <svg width="20" height="30" viewBox="0 0 20 30" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.99999 0C4.48608 0 -3.05176e-05 4.48611 -3.05176e-05 10C-3.05176e-05 11.6553 0.413817 13.2965 1.20056 14.7522L9.45313 29.6777C9.563 29.8767 9.77235 30 9.99999 30C10.2276 30 10.437 29.8767 10.5468 29.6777L18.8025 14.7473C19.5862 13.2965 20 11.6552 20 9.99996C20 4.48611 15.5139 0 9.99999 0ZM9.99999 15C7.24304 15 5.00001 12.757 5.00001 10C5.00001 7.24307 7.24304 5.00004 9.99999 5.00004C12.7569 5.00004 15 7.24307 15 10C15 12.757 12.7569 15 9.99999 15Z"
                                            fill="#519DA6"/>
                                    </svg>
                                </div>
                                <div className="footer-info">INSAT Centre Urbain Nord BP 676 - 1080 Tunis Cedex</div>
                            </div>
                            <div className="footer-contact">
                                <div className="footer-contact-logo">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M25.265 19.0814L21.6367 15.453C20.3408 14.1572 18.1379 14.6755 17.6195 16.3601C17.2308 17.5264 15.9349 18.1743 14.7687 17.9151C12.177 17.2672 8.67818 13.898 8.03026 11.1767C7.6415 10.0104 8.41901 8.71453 9.58527 8.32583C11.2699 7.80749 11.7882 5.60455 10.4924 4.3087L6.86399 0.680321C5.82731 -0.226774 4.27229 -0.226774 3.3652 0.680321L0.903086 3.14243C-1.55903 5.73413 1.16226 12.6021 7.25275 18.6926C13.3432 24.7831 20.2112 27.634 22.8029 25.0423L25.265 22.5802C26.1722 21.5435 26.1722 19.9885 25.265 19.0814Z"
                                            fill="#519DA6"/>
                                    </svg>
                                </div>
                                <div className="footer-info"><p>+216 23 815 004 +216 26 916 372</p></div>
                                <div className="footer-info"> +216 28 455 462</div>
                            </div>
                        </div>
                        <div id="footer-social-onside">
                            <a href="https://www.facebook.com/TunAeroday" target="_blank">
                                <div id="footer-fb">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M26 13C26 5.81953 20.1805 0 13 0C5.81953 0 0 5.81953 0 13C0 20.1805 5.81953 26 13 26C13.0762 26 13.1523 26 13.2285 25.9949V15.8793H10.4355V12.6242H13.2285V10.2273C13.2285 7.44961 14.9246 5.93633 17.4027 5.93633C18.591 5.93633 19.6117 6.02266 19.9062 6.06328V8.96797H18.2C16.8543 8.96797 16.5902 9.60781 16.5902 10.5473V12.6191H19.8148L19.3934 15.8742H16.5902V25.4973C22.0238 23.9383 26 18.9363 26 13Z"
                                            fill="#D95252"/>
                                    </svg>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/tunisian_aeroday/" target="_blank">
                                <div id="footer-ig">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.962 0H7.03795C3.15716 0 0 3.15716 0 7.03795V18.9622C0 22.8428 3.15716 26 7.03795 26H18.9622C22.8428 26 26 22.8428 26 18.9622V7.03795C26 3.15716 22.8428 0 18.962 0V0ZM13 20.1091C9.07991 20.1091 5.89081 16.92 5.89081 13C5.89081 9.07991 9.07991 5.89081 13       5.89081C16.92 5.89081 20.1091 9.07991 20.1091 13C20.1091 16.92 16.92 20.1091 13 20.1091ZM20.2791 7.56738C19.1207 7.56738 18.1785 6.62515 18.1785 5.46671C18.1785 4.30827 19.1207 3.36584 20.2791 3.36584C21.4376 3.36584 22.38 4.30827 22.38 5.46671C22.38 6.62515 21.4376 7.56738 20.2791 7.56738Z"
                                            fill="#D95252"/>
                                        <path
                                            d="M13 7.41504C9.92057 7.41504 7.41504 9.92037 7.41504 13C7.41504 16.0794 9.92057 18.5849 13 18.5849C16.0796 18.5849 18.5849 16.0794 18.5849 13C18.5849 9.92037 16.0796 7.41504 13 7.41504Z"
                                            fill="#D95252"/>
                                        <path
                                            d="M20.2791 4.89026C19.9613 4.89026 19.7026 5.14893 19.7026 5.4667C19.7026 5.78448 19.9613 6.04315 20.2791 6.04315C20.5971 6.04315 20.8557 5.78468 20.8557 5.4667C20.8557 5.14873 20.5971 4.89026 20.2791 4.89026Z"
                                            fill="#D95252"/>
                                    </svg>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/company/tunisian-aeroday/about/" target="_blank">
                                <div id="footer-li">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23.4 0H2.6C1.17 0 0 1.17 0 2.6V23.4C0 24.83 1.17 26 2.6 26H23.4C24.83 26 26 24.83 26 23.4V2.6C26 1.17 24.83 0 23.4 0ZM7.8 22.1H3.9V10.4H7.8V22.1ZM5.85 8.19C4.55 8.19 3.51 7.15 3.51 5.85C3.51 4.55 4.55 3.51 5.85 3.51C7.15 3.51 8.19 4.55 8.19 5.85C8.19 7.15 7.15 8.19 5.85 8.19ZM22.1 22.1H18.2V15.21C18.2 14.1701 17.29 13.26 16.25 13.26C15.21 13.26 14.3 14.1701 14.3 15.21V22.1H10.4V10.4H14.3V11.96C14.95 10.92 16.38 10.14 17.55 10.14C20.02 10.14 22.1 12.22 22.1 14.69V22.1Z"
                                            fill="#D95252"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer-copyright"><p> Copyright Aeroday ©2021 All rights reserved </p></div>
        </div>
    );
}