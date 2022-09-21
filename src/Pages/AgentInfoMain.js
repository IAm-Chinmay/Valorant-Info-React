import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
import AgentInfoPage from "./AgentInfoPage";

const AgentInfoMain = () =>{
    const uuid = useParams().uuid;

    const [agentData , setAgentData] = useState();

    // console.log(uuid)

    const DUMMY_CLONE = [
        
            {
                uid : "u1",
                charcImg : 'https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png',
                roleImg : "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png",
                charName : "Jett",
                roleName : "Duelist",
                roleDesciption : "  Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.",
                voiceLine : 'https://media.valorant-api.com/sounds/204662687.wav'
            },
            {
                uid : "u2",
                charcImg : 'https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png',
                roleImg : "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png",
                charName : " Chamber",
                roleName : "Sentinal",
                roleDesciption : "  Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.",
                voiceLine : 'https://media.valorant-api.com/sounds/204662687.wav'
            }
        ]

        const filterAbilites =  () =>{
            
            console.log(agentData);
        }
        useEffect(()=>{
            const filterDetails = async () =>{
                const responseData = await fetch('https://valorant-api.com/v1/agents');
                const parsedData = await responseData.json();
                console.log(parsedData.data);
                setAgentData(parsedData.data.filter(uid => uid.uuid === uuid));
            }
            filterDetails();
        },[ ])
    
        console.log(agentData)

    return(
        <>
       {agentData && <AgentInfoPage detailAgentData={agentData}/>}
       </>
    );
}

export default AgentInfoMain;