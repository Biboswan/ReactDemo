import React from "react";
import "./index.css";

const Button = ({value, onClick }) => {
    console.log('button calling:',value);
    return <button onClick={onClick}>{value}</button>
};

export default React.memo(Button);