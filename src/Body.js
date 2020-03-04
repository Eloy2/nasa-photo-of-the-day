import React from "react";
import "./App.css";

function Body(props) {
    return (
        <div className="Body">
            <img
            alt="space"
            src={props.imageUrl}
            />
            <p>{props.Text}</p>
        </div>
    );
}

export default Body;