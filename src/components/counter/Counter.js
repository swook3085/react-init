import React, { Component } from "react";

const Counter = ({ age, onAgeUp, onAgeDown, httpSearch }) => {
    return (
        <div>
            <h1>{age}</h1>
            <button onClick={onAgeUp}>+</button>
            <button onClick={onAgeDown}>-</button>
            <button onClick={httpSearch}>조회</button>
        </div>
    );
};
export default Counter;