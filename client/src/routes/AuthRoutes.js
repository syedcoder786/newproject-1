import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';

const AuthRoutes = () => {
    return (
        <div>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element = {<Login/>}/>
            </Routes>
        </BrowserRouter>
        </div>         
    )
}

export default AuthRoutes;
