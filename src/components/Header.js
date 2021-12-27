import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className=' bg-transparent shadow-lg  flex justify-between z-10' style={{ height: '60px' }}>
            <h1 className='p-4 text-4xl text-white italic'>Hossein</h1>
            <div className='flex'>
                <Link to="/" className='p-5 text-white text-2xl'>Home</Link>
                <Link to="/about" className='p-5 text-white text-2xl'>About</Link>
                <Link to="/services" className='p-5 text-white text-2xl'>Services</Link>
            </div>
        </header>
    )
}

export default Header
