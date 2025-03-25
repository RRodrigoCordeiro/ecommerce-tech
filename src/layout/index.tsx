import { Outlet} from 'react-router-dom';
import React from 'react';
import Header from '../components/Header';

export function Layout(){
    return(
        <>
            <Header />
            <Outlet/>
        </>
    )
}