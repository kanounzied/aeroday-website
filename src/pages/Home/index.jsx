import React, {useEffect} from "react";
import "./home.css";
import $ from 'jquery'

export default function Home() {

    useEffect(() => {
        $('#home').addClass('selected');
    });

    return (
        <div className="home">Aeroday Home page</div>
    );
}