import React, { useState, useEffect } from "react";
import App from "./App";
import "./App.css";

export default function Photo (props) {
    const data = props;
    console.log(data);
    return (
        <div className="main-content">
        <div className="main-img-cont">
          <img src={data.url} alt={data.date}/>
        </div>
        <div className="main-text-cont">
            <p>Photo of the day</p>
            <p>{data.date}</p>
            <p>{data.explanation}</p>
        </div>
      </div>
    )
}
