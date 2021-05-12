import React, { Component } from "react";
import "./ACbody.scss";
import ACheader from "../AC Header"
import MemberCard from "../Member"
class ACbody extends Component{
    render(){
        return(
        <div className="ACbody">
                <ACheader name="AXES" displayed="Aeroday"/>
            <div className="ac-details-container">
                <div className="about-this-ac">
                    <h3>A Propos:</h3>
                    <p>{this.props.description}</p>
                </div>
                <MemberCard memberName="Khouloud Hamrouni" memberOccupation="PRESIDENT"/>
            </div>
            
    
        </div>
    )}
}

export default ACbody