import React, { useEffect, useState } from "react";

import Ability from "../containers/Abilites-Cards/Ability";
import "./AgentInfo.css";

const AgentInfo = (props) => {
  // const uuid = props.uuid;

  // const [loadedAbility, setLoadedAbility] = useState();

  // console.log(uuid);

  // useEffect(() => {
  //   const fetchAbility = async () => {
  //     try {
  //       const responseData = await fetch("https://valorant-api.com/v1/agents");
  //       const parsedData = await responseData.json();
  //       console.log(parsedData.data);
  //       const abilityData = parsedData.data.filter((uid) => uid.uuid === uuid);
  //       console.log(abilityData);
  //       setLoadedAbility(abilityData.map((a) => a.abilities));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchAbility();
  // }, []);

  // console.log(loadedAbility.map(a => a.displayName));

  return (
    <React.Fragment>
      <main>
        <div className="main-agentinfo">
          <img
            src="https://wallpaperaccess.com/full/5785159.png"
            style={{
              img: "no-repeat center center fixed",
            }}
            className="back-AgentInfo"
          />
          <div className="agent-img">
            <img src={props.charImg} alt="charc-img" />
          </div>
          <div className="agent-title-css">
            <h1>{props.charName}</h1>
            <img src={props.roleImg} alt="role-img" />
          </div>
          <div className="role-name-css">
            <h3>
              <strong>Role : {props.roleName}</strong>
            </h3>
          </div>
          <div className="agent-info-para">
            <p>{props.roleDesciption}</p>
          </div>
          <div className="audio-control-css">
            {/* <h4>Look what agent says : </h4> */}
            <audio hidden controls autoPlay>
              <source src={props.voiceline} type="audio/wav" />
            </audio>
          </div>
          <div className="abilities-text-css">
            <h1>Abilites :</h1>
          </div>
          <div className="abilities-cards-css">
            {props.abilities.map((data,index) => (
              <Ability
                abilityName={data.displayName}
                abilityImg={data.displayIcon}
                abilityDescription={data.description}
                number = {1 + index}
              />
            ))}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default AgentInfo;
