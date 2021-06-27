import React, { Component } from "react";
import "./tenth.scss";

class Tenth extends Component{
    render(){
        return(
                <div className="tenth">
                    <div className="tenth-small">
                        <img src= { process.env.PUBLIC_URL + "/assets/images/10th.png"} alt="ten" />
                    </div>
                    <div className="tenth-hover">
                        <img src= { process.env.PUBLIC_URL + "/assets/images/10th_anniv.png"} alt="tenaniv" />
                    </div>
                </div>
        )
    }
}

export default Tenth