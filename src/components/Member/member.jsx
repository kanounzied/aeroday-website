import React from "react";

export default function Member(memberName, memberOccupation,memeberPNG){
    return(
        <div className="memberCard">
            <div className="memberImageContainer">
                <div className="memberImage">
                <img  src={memeberPNG + ".png"} alt="memberImg" width=" 242" height=" 242 "/>
                </div>
                <div className="foreground_m" > 
                <img src="foregroundDotted.png" alt="foreground_m" width=" 242"height=" 242 "/>
                </div>
            </div>
            <div className="memberDescription"> 
                <div className="memberName"> 
                    {memberName}
                </div>
                <div className="memberOccupation"> 
                    {memberOccupation}   
                </div>
            </div>
      </div>
);
}
