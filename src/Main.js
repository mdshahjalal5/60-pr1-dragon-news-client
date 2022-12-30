import React from 'react';
import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;