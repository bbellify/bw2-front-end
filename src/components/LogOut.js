/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//component will remove auth token and push user back to '/login'

const LogOut = (props) => {

    const navigate = useNavigate();

    useEffect(()=>{
        localStorage.removeItem('token');
        navigate('/')
    }, [])

    return(
        <div>LogOut</div> 
    )
};

export default LogOut;