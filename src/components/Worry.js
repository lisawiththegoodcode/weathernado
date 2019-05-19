import React from 'react'

const worry = ({condition}) => {
    if (condition.includes("tornado")){
        return "RUN!!";
    } else {
        return "Don't Worry, Be Happy"      
    }
};

const Worry = ({condition}) => (
    <h2>{worry({condition})}</h2>
);

export default Worry;