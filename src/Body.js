import React from "react";
import "./App.css";
import styled from 'styled-components';

////////////////////////////////////STYLES//////////////////////////////
const BodyStyle = styled.div`
    background-color: #3a4b6b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50%;
`;

const TextStyle = styled.p`
    color: whitesmoke;
    width: 36%;
    background-color: #282c34;
    border: 1px solid whitesmoke;
    border-radius: 20px;
    padding: 2%;
`;

const ImageStyle = styled.img`
    margin-top: 2%;
    width: 40%;
    border: 1px solid whitesmoke;
    border-radius: 20px;
`;
////////////////////////////////////STYLES//////////////////////////////

function Body(props) {
    return (
        <BodyStyle>
            <ImageStyle
            alt="space"
            src={props.imageUrl}
            />
            <TextStyle>{props.Text}</TextStyle>
        </BodyStyle>
    );
}

export default Body;