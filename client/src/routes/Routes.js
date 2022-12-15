import React from 'react';
import AuthRoutes from './AuthRoutes';
import DashboardRoutes from './DashboardRoutes'
import { useSelector } from 'react-redux'
 

const Routes = (props) => {
    const { token } = useSelector((state) => state.auth)
    if(token){
        return(
            <DashboardRoutes/>
        )
    }else{
        return(
            <AuthRoutes/>
        )
    }
}

export default Routes;
