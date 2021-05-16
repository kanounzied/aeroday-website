import React, { Component } from "react";
import "./ACheader.scss";

class ACheader extends Component{
    render(){return(
    <div className="ac-header">
        <h2>{this.props.name}</h2>
        <h3>{this.props.displayed}</h3>
    </div>
    )}
}

export default ACheader