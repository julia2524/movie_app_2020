import React from "react";
import { useLocation } from "react-router-dom";

function Detail(){
    const location = useLocation();
    console.log('state', location.state);
    return <span>{location.state.title}</span>;
}

export default Detail;