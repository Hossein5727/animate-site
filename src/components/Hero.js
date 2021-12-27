import React from 'react'

function Hero({ image }) {
    return (
        <section className='h-screen flex justify-start  items-end' style={{ background: `url(${image})`, marginTop: '-60px', objectFit: 'cover !importatn' }}>
            <div className='p-4 m-24 w-64 bg-gray-800 bg-transparent  backdrop-filter blur-0 rounded-lg text-white '>
                <h1 className='text-3xl mb-6'>Title</h1>
                <h1 className='text-2xl mb-6'>description</h1>
                <button className='text-xl mb-1 px-5 py-3 bg-orange-600 rounded-lg'>Learn More</button>
            </div>
        </section>
    )
}

export default Hero
