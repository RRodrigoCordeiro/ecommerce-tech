import { Outlet } from 'react-router-dom';
import React from 'react';
import Footer from '../components/Footer'; 

export function Layout() {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
}
