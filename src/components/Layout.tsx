import React, { ReactNode, useState } from 'react'

import Navbar from './Navigation/Navbar'
import Sidebar from './Navigation/Sidebar'

type Props = {
    children?: ReactNode;
    hasNavbar?: boolean;
    showLives?: boolean;
};

const Layout = ({ children }: Props) => {

    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="layout">
            <Navbar click={() => setShowSidebar(!showSidebar)} />
            <main className='main_content'>
                <Sidebar showSidebar={showSidebar} click={() => setShowSidebar(false)} />
                <div>
                    <div className="top_box"></div>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout