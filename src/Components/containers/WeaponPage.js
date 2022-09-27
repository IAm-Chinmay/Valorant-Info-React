import React from "react";
import WeaponCard from "../imports/weaponsCard";
import './WeaponCard.css'

const WeaponPage = props =>{


    return(
        <>
        {/* {console.log(props.gunstats.map(a => a.category))} */}
        {/* { props.gunstats.map( stData => ( */}
        <WeaponCard 
        weaponImg = {props.displayIcon}
        gunName = {props.displayName}
        guncost = {props.guncost.cost}
        gunCategory = {props.category.category}
        headDmg = {props.headDmg.headDamage}
        bodyDmg = {props.bodyDmg.bodyDamage}
        />
        {/* ) ) */}
    {/* } */}
      
        </>
    )
}

export default WeaponPage