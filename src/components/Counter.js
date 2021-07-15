import React from "react";

function Counter(number, onIncrease, onDecrease) {
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-!</button>
        </div>
    );
}

export default Counter;