import React, { Component } from "react";
import "./memberStyles.scss";

class MemberCard extends Component{
    render(){
        return(
        <>
            
            <div className="member-card">
                <div className="member-image-container">
                    <img  src={ process.env.PUBLIC_URL + "/assets/images/MemberPhotos/" +this.props.memberName + ".webp" } alt="memberImg" />
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
export default MemberCard
