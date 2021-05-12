import React from 'react'
import './Preloader.css'

function Preloader(){
    return (
        <div id='preloader'>
			<div class="jetdiv">
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