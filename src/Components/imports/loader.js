import React from "react";

import './loader.css';
import vloader from '../../Img/valorant-loading0001-0096-unscreen.gif';

const Loader = () =>{
    return(
        <div className="loader-img">
        <img src={vloader} alt = "loaderImg" typeof="gif/img"/>
        </div>
    )
}

export default Loader;