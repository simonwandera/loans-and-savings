import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useState } from 'react';

const AdminRoutes = ({ accessToken }) =>{

    return (
        (accessToken !== "USER" && accessToken !== "ROOT" && accessToken !== null && accessToken !== undefined) ? <Outlet/> : <Navigate to="/"/>
    )
}

export default AdminRoutes;