import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
import AgentInfoPage from "./AgentInfoPage";
import Loader from "../Components/imports/loader";

const AgentInfoMain = () =>{
    const uuid = useParams().uuid;

    const [agentData , setAgentData] = useState();
    const [isLoading , setIsLoading] = useState(false);

    // console.log(uuid)

        useEffect(()=>{
            const filterDetails = async () =>{
               setIsLoading(true)
                const responseData = await fetch('https://valorant-api.com/v1/agents');
                const parsedData = await responseData.json();
            
                console.log(parsedData.data);
                setAgentData(parsedData.data.filter(uid => uid.uuid === uuid));
                setIsLoading(false);
            }
            filterDetails();
        },[uuid])
    
        console.log(agentData)

    return(
        <>
        {isLoading && <Loader/>}
       {agentData && <AgentInfoPage detailAgentData={agentData}/>}
       </>
    );
}

export default AgentInfoMain;