import React, { useEffect, useState } from "react";
import WeaponPage from "./WeaponPage";
import './WeaponCard.css'

const WeaponLoader = () =>{


const [loadedData , setLoadedData] = useState();

useEffect(()=>{
    const fetchWeapons = async () =>{
        const fetchedData = await fetch('https://valorant-api.com/v1/weapons');
        const parsedData = await fetchedData.json();
        // console.log(parsedData.data)
        // {parsedData && setLoadedData(parsedData.data);}
        const filteredShopData = parsedData.data;
        setLoadedData(filteredShopData.filter(ele => ele.shopData !== null))
    }
    fetchWeapons();
},[]);
// {loadedData && console.log(loadedData.map(a => a.weaponStats.damageRanges[0]))}
// {shopData && console.log(shopData.cost ?shopData.cost : '0')}
// loadedData.map(a => a.shopData);
// console.log(a.filter(ele => {
//     return ele !== null;
// }))


    return(
        <>
        <div className="main-div">
    {loadedData && 
    loadedData.map(weap => (
        <WeaponPage 
        displayIcon = {weap.displayIcon}
        displayName = {weap.displayName}
        guncost = {weap.shopData}
        category ={weap.shopData}
        headDmg = {weap.weaponStats.damageRanges[0]}
        bodyDmg = {weap.weaponStats.damageRanges[0]}
        />
        ))
}
</div>
        </>
    )
}

export default WeaponLoader;