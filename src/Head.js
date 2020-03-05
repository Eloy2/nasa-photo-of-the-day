import React from "react";
import "./App.css";
import styled from 'styled-components';

////////////////////////////////////STYLES//////////////////////////////
const HeadStyle = styled.div`
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    border-bottom: 1px solid whitesmoke;
`;
////////////////////////////////////STYLES//////////////////////////////

function Head(props) {
    return (
        <HeadStyle>
            <h1>{props.Title}</h1>
            <h3>{props.Date}</h3>
        </HeadStyle>
    );
}

export default Head;