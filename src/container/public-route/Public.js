import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function PublicRoute({ component:Component, restricted=false, ...rest  }) {
    const auth = useSelector((state) => state.Auth)
    return (
        <Route 
        {...rest} render={props => (
            auth.data !== null && restricted ? 
            <Redirect to={"/"} />         
            : 
            <Component {...props}/> 
        )}
        />
    );
}

export default PublicRoute;