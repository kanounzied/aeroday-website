import React from "react"
import "./GoogleMaps.css"

function GoogleMaps (){
    return(
        <div className="map">
            <iframe title='Google Maps' id='mapframe'
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDQ9WL0Yuk5dEBSI7dO4bjcqq2OvQikVs8&q=Institut national des sciences appliquées et de technologie, INSAT Centre Urbain Nord BP، Tunis Cedex">
            </iframe>
        </div>
    );
}

export default GoogleMaps;