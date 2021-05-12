import React from 'react'
import './Preloader.css'

function Preloader(){
    return (
        
        <div id='loader'>
			<div class="body">
			<span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			  </span>
			  <i class="fa fa-fighter-jet"></i>
			</div>


			<div class="longfazers">
			  <span></span>
			  <span></span>
			  <span></span>
			  <span></span>
			</div>
		</div>
    );
}

export default Preloader;