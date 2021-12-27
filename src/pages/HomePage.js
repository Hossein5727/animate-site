import React from 'react'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'
import Image from '../images/img-1.jpg'
import { animationOne, transition } from '../animation'

function HomePage() {
    return (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={animationOne}
            transition={transition}
        >
            <Hero image={Image} />
        </motion.div>
    )
}

export default HomePage
