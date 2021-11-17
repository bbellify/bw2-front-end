import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = () => {      
    
    const navigate = useNavigate();
    useEffect(()=> {

        axiosWithAuth()
            .post('/logout')
            .then(resp => {
                localStorage.removeItem('token');
                navigate('/login');
            });
    }, []);  
    return(<div></div>);
}

export default Logout;