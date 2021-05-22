import React, { Component } from "react";
import "./ACbody.scss";
import ACheader from "../AC-header";
import MemberCard from "../Member";
import Button from "../button";


class ACbody extends Component{
    render(){
        const style={
            marginTop: (this.props.memberName === "Ghassen Abida") ? "0" : "10px",
        }
        return(
        <div className="ACbody">
            <div className="ac-details-container" >
                <img className="--bgr--" src={process.env.PUBLIC_URL + "/assets/images/background"+this.props.titleAC.toUpperCase()+".png"} alt="bgr" width="100%" height="480px"/>
                <div className="member-and-button" >
                    <MemberCard memberName={this.props.memberName} memberOccupation={this.props.memberOccupation}/>
                    {/* <div id="formulaire">FORMULAIRE</div> */}
                    <Button className="formulaire" style={style} buttonText="FORMULAIRE" buttonURL=""/>
                </div>
                <div className="about-this-ac">
                    <h3>A Propos:</h3>
                    {this.props.description}
                    {/*<div className="buttons-ac--">*/}
                    {/*    <div id="cdc1" style={{display: this.props.cdc1==="0"?"none":"auto"}}><Button buttonText="CDC1" buttonURL={this.props.CDC1URL}/></div>*/}
                    {/*    <div id="cdc2" style={{display: this.props.cdc2==="0"?"none":"auto"}}><Button buttonText="CDC2" buttonURL={this.props.CDC2URL}/></div>*/}
                    {/*    <div id="cdes" style={{display: this.props.cdes==="0"?"none":"auto"}}><Button buttonText="Cahier descriptif" buttonURL={this.props.CDESURL}/></div>*/}
                    {/*</div>*/}
                </div>
                <div className="buttons-ac--">
                    <div id="cdc1" style={{display: this.props.cdc1==="0"?"none":"auto"}}><Button buttonText="CDC1" buttonURL={this.props.CDC1URL}/></div>
                    <div id="cdc2" style={{display: this.props.cdc2==="0"?"none":"auto"}}><Button buttonText="CDC2" buttonURL={this.props.CDC2URL}/></div>
                    <div id="cdes" style={{display: this.props.cdes==="0"?"none":"auto"}}><Button buttonText="Cahier descriptif" buttonURL={this.props.CDESURL}/></div>
                </div>
            </div>
            
        </div>
    )}
}

export default ACbody