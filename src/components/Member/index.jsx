import React, { Component } from "react";
import "./memberStyles.scss";

console.log(process.env.PUBLIC_URL + "/assets/images/Memberphotos/" + ".png");
class MemberCard extends Component{
    render(){
        return(
        <>
            
            <div className="member-card">
                <div className="member-image-container">
                    <img  src={ process.env.PUBLIC_URL + "/assets/images/Memberphotos/" +this.props.memberName + ".png" } alt="memberImg" />
                </div>
                <div className="member-description"> 
                    <div className="member-name">{this.props.memberName}</div>
                    <div className="member-occupation">{this.props.memberOccupation}</div>
                </div>
            </div> 
        </>
    )
    }
}
// url("../../styles/MemberPhotos/") + this.props.memberName + ".png"
export default MemberCard
