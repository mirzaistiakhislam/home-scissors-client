import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Home from '../pages/Home/Home/Home';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <NavBar></NavBar>
            {/* <Home></Home> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;