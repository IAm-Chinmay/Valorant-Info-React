import React from "react";

import './Ability.css';

const Ability = props =>{
    return(<React.Fragment>
             <ul class="tilesWrap">
	<li>
		<h2>{ 0 + props.number}</h2>
		<h3>{props.abilityName}</h3>
		<img className="ability-show-css" src={props.abilityImg} alt="ability"/>
		<p className="p-css">
        {props.abilityDescription}
		</p>
	</li>
    </ul>
    </React.Fragment>)
}

export default Ability;