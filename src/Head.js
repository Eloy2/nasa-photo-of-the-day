import React from "react";
import "./App.css";

function Head(props) {
    return (
        <div className="App-header">
            <h1>{props.Title}</h1>
            <h3>{props.Date}</h3>
        </div>
    );
}

export default Head;