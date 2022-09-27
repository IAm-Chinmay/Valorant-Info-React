import React from "react";
import "./weaponsCards.css";



const WeaponCard = props => {


  return (
    <ul className="weapon-list">
      <li>
    <div className="main-container">
    <div className="container">
      <div className="card">
        <div className="imgBx">
          <img src={props.weaponImg} alt = {"Weapon-Img"} />
        </div>
        <div className="contentBx">
          <h2>{props.gunName}</h2>
          <div className="size">
            <h3>
              <strong>Cost :</strong>
            </h3>
            <span>{props.guncost}</span>
          </div>
          <div className="color">
            <h3>
              <strong>Category :</strong>
            </h3>
            <span>
              <strong>{props.gunCategory.substring(0,7)}</strong>
            </span>
          </div>
          <div className="dm-sec">
            <strong> Damage :</strong>
          </div>
        <div className="dmg">
          <h5>Head : {props.headDmg}</h5> 
          <h5>body : {props.bodyDmg}</h5>
        </div>
        </div>
      </div>
    </div>
    </div>
    </li>
    </ul>
  );
};

export default WeaponCard
