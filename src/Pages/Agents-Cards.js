import React , {useState , useEffect} from "react";
import CardContainer from "../CardContainer";
import Ability from "../Components/containers/Abilites-Cards/Ability";
// import './Agents-Cards.css'

const AgentCards = () =>{

     const [loadedAgents , setLoadedAgents] = useState();

     useEffect(() => {
       const fetchAgents =  async () =>{
        try{
            const responseData = await fetch(
                'https://valorant-api.com/v1/agents'
            );
            const parsedData = await responseData.json();
            //  await parsedData.data.splice(7,1);
// console.log(parsedData.data);
             const newData = parsedData.data.filter(data => data.isPlayableCharacter === true);
            console.log(newData);
            setLoadedAgents(newData);
            // console.log(loadedAgents)
            // setDescription
            // setRoleName
            // setDescription
            // setDisplayIcon
        }catch(err){
            console.log(err)
        }
       }
       fetchAgents();
     }, [ ])
     
    return(
        <>
        <div className="loadedAgents-css">
        {loadedAgents && <CardContainer agents={loadedAgents} /> }
        
        </div>
        </>
    )
}

export default AgentCards;