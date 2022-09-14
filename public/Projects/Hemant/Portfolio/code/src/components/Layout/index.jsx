import React from 'react'
import Sidebar from '../Sidebar'
import './index.scss'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation()
    return (
        <div className="App">
            <Sidebar />
            <div className="page">
                <span className="tags top-tags">
                    <span className='bottom-tag-html'>&lt;html&gt;</span>
                    <br />
                    &lt;body&gt;
                </span>

                <Outlet />
                <span className={`tags ${location.pathname === '/' ? 'bottom-tags-home' : location.pathname === '/about' ? 'bottom-tags-about' : location.pathname === '/contact' ? 'bottom-tags-contact' : location.pathname === '/projects' ? 'bottom-tags-projects' : ''}  `}>
                    &lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout