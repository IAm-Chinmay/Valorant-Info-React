import React from "react";
import AgentInfo from "../Components/AgentInfoPage/AgentInfo";
import './AgentInfoPage.css'

const AgentInfoPage = props =>{
    return( 
        props.detailAgentData.map(data => (
            console.log(data.abilities.slice(0,4)),
        <AgentInfo
        charImg ={data.fullPortrait}
        charName = {data.displayName}
        roleImg = {data.role.displayIcon}
        roleName = {data.role.displayName}
        roleDesciption = {data.role.description}
        voiceline = {data.voiceLine.mediaList.map((audio => audio.wave))}
        uuid = {data.uuid}
        abilities = {data.abilities.slice(0,4)}
        number = {data.abilities.findIndex(a => a.displayName) + 1}
        />
        ))  
        )
    
}

export default AgentInfoPage;