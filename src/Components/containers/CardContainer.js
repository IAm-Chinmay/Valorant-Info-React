import React , {useEffect} from "react";
import CardItem from "./Card-Items";
import './CardContainer.css'

const CardContainer = props =>{

useEffect(()=>{
    console.log()
},[])
// if(props.agents.length !== 0){
    return(
        <>
        <div className="cards">
       {

           props.agents.map(agent => (
            <CardItem 
            uuid = {agent.uuid}
            frontTitle = {agent.displayName}
            frontSubtitle = {agent.role.displayName} 
            description = {agent.description} 
            displayIcon = {agent.displayIcon ? agent.displayIcon : "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png"}
            // backColor = {agent.backColor}
            />

           ))
       }
        </div>
        </>
    )
// }
}   

export default CardContainer;