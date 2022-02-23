import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useState } from 'react';

const PrivateRoute = ({ currentUser }) =>{

    return (
        (currentUser !== "" && currentUser !== undefined && currentUser !== null) ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoute;