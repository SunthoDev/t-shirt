import React from 'react';
import "./Home.css"

const Home = () => {
    return (

        <div>
            <Header></Header>
            <Outlet></Outlet>

        </div>

    );
};
import "./Home.css"
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

export default Home;