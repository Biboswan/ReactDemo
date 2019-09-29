import React from  "react";
import "./index.css";

const Header = props => {
    const { title } = props;
    console.log('header render!');
    // const title = props.title;
    return <header>{title}</header>
};

export default React.memo(Header);