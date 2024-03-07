import React from "react";

const Display =  (props) => {
    return (
        <div>
            <button onClick={e =>props.onInc(props)}>+</button>
            <button onClick={e => props.onDec(props)}>-</button>
        </div>
    )
}

export default Display;