import React from 'react'
import Header from '../components/Header'

function Layout({ children }) {
    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            <Header />
            {children}
        </div>
    )
}

export default Layout
