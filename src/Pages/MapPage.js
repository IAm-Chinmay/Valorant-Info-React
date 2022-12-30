import React, { useEffect, useState } from "react";
import './MapPage.css'

import MapCard from "../Components/imports/MapCard";
import Loader from "../Components/imports/loader";

const MapPage = () =>{

    const [isLoading , setIsLoading] = useState(false);
    const [maps ,setMaps] = useState();

    useEffect(() =>{
        const fetchMaps = async () =>{
            setIsLoading(true);
            const fetchedData = await fetch('https://valorant-api.com/v1/maps');
            setIsLoading(true);
            const parsedData = await fetchedData.json();
            setIsLoading(true);
            setMaps(parsedData.data);
            setIsLoading(false);
        }
        fetchMaps();
    },[ ])



    return(
      
        <div className="map-list">
            <ul>
                {isLoading && <Loader/>}
       {maps && maps.map( mapInfo => (
        <MapCard
        splashimg = {mapInfo.splash}
        mapname = {mapInfo.displayName}
        mapoverview ={mapInfo.displayIcon}
        />
        )) }
        </ul>
        </div>
    )
}

export default MapPage;