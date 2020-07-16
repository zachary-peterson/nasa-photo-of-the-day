import React, { useState, useEffect } from "react";
import App from "./App";
import "./App.css";

function Second (props){
    const data = props.data;
    console.log(data);
    if(!data[3]['img_src']) return <div> Loading </div>
    return (
        <div className="second-content">
            <div className="sec-img">
                <img alt="Mars" src={data[3]['img_src']}/>
                <p>{data[3]['camera']['full_name']}</p>
            </div>
            <div className="sec-img">
                <img alt="Mars" src={data[1]['img_src']}/>
                <p>{data[1]['camera']['full_name']}</p>
            </div>
        </div>
    )
}

export default Second