import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ component: Component, auth, ...rest }) => {
 
    let {isAuthenticated} = useSelector(state => state.user)

    return(
        <Route {...rest} render={(props) => (
            (localStorage.loginData && isAuthenticated )
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />
    )
        }

export default GuardedRoute;