import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import "./dashboard.css"

const layout = ({ children }) => {
    return (
        <div className=''>
            <div className='fixed top-0 inset-x-0 z-20'>
                <Header />
            </div>
            <div>
                <div className='fixed inset-y-0 left-0 w-[240px]'>
                    <Sidebar />
                </div>
                <div className='ml-auto bg-pink-300 calc'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout