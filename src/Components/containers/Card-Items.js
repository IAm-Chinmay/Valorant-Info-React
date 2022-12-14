import React from "react";
import {Link} from 'react-router-dom';

import './Card-Item.css'

const CardItem = props =>{
  const uuid = props.uuid;
    return(
        <React.Fragment>
  <Link to = {`/agentinfo/${uuid}`} >
        <div className="" onTouchStart="this.classList.toggle('hover');">
        <div className="container-ag">
          <div className="front" style={{
            backgroundImage :
            `url(${props.displayIcon})`}}>
            <div className="inner">
              <p>{props.frontTitle}</p>
              <span>{props.frontSubtitle}</span>
            </div>
          </div>
          <div className="back"  >
            <div className="inner">
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
      </Link>
        </React.Fragment>
    )
}

export default CardItem;