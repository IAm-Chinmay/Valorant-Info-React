import React from "react";

import "./MapCard.css";

const MapCard = props => {
  return (
      <li className="map-li">
        {/* <div className="main-container"> */}
        <div className="in-container">
          <div className="map-img">
            <img src={props.splashimg} alt ="map-img"/>
            
          </div>
          <div className="footer">
            <div className="map-name">
              <h2>{props.mapname}</h2>
            </div>
            <div className="overview-map">
              <input
                class="modal-btn"
                type="checkbox"
                id="modal-btn"
                name="modal-btn"
              />
              <label for="modal-btn">
                Map Overview <i class="uil uil-expand-arrows"></i>
              </label>
              <div class="modal">
                <div class="modal-wrap">
                  <img src={props.mapoverview} alt="map-overview" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </li>
  );
};

export default MapCard;
