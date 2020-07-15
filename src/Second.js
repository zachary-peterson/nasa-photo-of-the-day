import React, { useState, useEffect } from "react";
import App from "./App";
import "./App.css";

function Second (props){
    const data = props.props;

    return (
        <div className="second-content">
            <div className="sec-img">
                <img src={data.photos[3]['img_src']}/>
                <p>{data.camera}</p>
            </div>
            <div className="sec-img">
                <img src={data.photos[1]['img_src']}/>
                <p>{data['full_name']}</p>
            </div>
        </div>
    )
}

export default Second