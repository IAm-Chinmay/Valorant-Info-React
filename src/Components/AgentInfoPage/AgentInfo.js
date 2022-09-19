import React from "react";

import Ability from "../containers/Abilites-Cards/Ability";
import "./AgentInfo.css";

const AgentInfo = () => {
  return (
    <React.Fragment>
      <main>
      <div className="main-agentinfo">
        <img src="https://wallpaperaccess.com/full/5785159.png" style={{
          img : 'no-repeat center center fixed' 
        }}
         className="back-AgentInfo" />
        <div className="agent-img">
          <img
            src="https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png"
            alt="charc-img"
          />
        </div>
        <div className="agent-title-css">
          <h2>CHAMBER</h2>
          <img
            src="https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png"
            alt="role-img"
          />
        </div>
        <div className="role-name-css">
          <h3>Role : Sentinals</h3>
        </div>
        <div className="agent-info-para">
          <p>
            Sentinels are defensive experts who can lock down areas and watch
            flanks, both on attacker and defender rounds.
          </p>
        </div>
        <div className="audio-control-css">
          <h4>Look what agent says : </h4>
          <audio controls>
            <source
              src="https://media.valorant-api.com/sounds/204662687.wav"
              type="audio/wav"
            />
          </audio>
        </div>
        <div className="abilities-text-css">
          <h2>Abilites :</h2>
        </div>
        <div className="abilities-cards-css">
          <Ability />
        </div>
      </div>
      </main>
    </React.Fragment>
  );
};

export default AgentInfo;
