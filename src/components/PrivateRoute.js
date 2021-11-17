import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({component:Component, ...rest}) => {

    const navigate = useNavigate()

    return <Route {...rest} render={(props) => {
        if(localStorage.getItem('token')) {
            return <Component {...props} />
        } else {
            return navigate('/')
        }
    }} />
}

export default PrivateRoute