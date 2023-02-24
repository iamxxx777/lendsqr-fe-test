import React, { ReactNode } from 'react'

import Navbar from './Navigation/Navbar'
import Sidebar from './Navigation/Sidebar'

type Props = {
    children?: ReactNode;
    hasNavbar?: boolean;
    showLives?: boolean;
};

const Layout = ({ children }: Props) => {
    return (
        <div className="layout">
            <Navbar />
            <main className='main_content'>
                <Sidebar />
                <div>
                    <div className="top_box"></div>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout