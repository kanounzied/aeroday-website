import React, {useEffect} from "react";
import "./formStyle.scss";
import $ from 'jquery'
import AeroInput from "./Input";
import AeroButton from "../AeroButton";

export default function AeroForm(props) {

    useEffect(() => {
    });

    return (
        <div className="formulaire">
            <form action="/" method="POST">
                <div className={"verticals"}>
                    <AeroInput type="normal" label={"Nom et Prenom"}/>
                    <AeroInput type="normal" label={"Email"}/>
                    <AeroButton path={"/"} text={"envoyer"}/>
                </div>
                <AeroInput type="big" label={"Entrez Votre Message"}/>
            </form>
        </div>
    );
}