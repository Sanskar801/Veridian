import React from 'react'
import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router'
import Footer from './Footer';

const Layout = () => {
    const location = useLocation();
    const noFooterRoutes = ["/", "/contact"];

    const shouldShowFooter = !noFooterRoutes.includes(location.pathname);

    return (
        <>
            <Navbar />
            <main className="w-full h-fit">
                <Outlet />
            </main>
            {shouldShowFooter && <Footer />}
        </>
    )
}

export default Layout