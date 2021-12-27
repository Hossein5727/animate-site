import React from 'react'
import Image from '../images/img-2.jpg'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'
import { animationTwo, transition } from '../animation'

function AboutPage() {
    return (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={animationTwo}
            transition={transition}
        >
            <Hero image={Image} />
        </ motion.div>
    )
}

export default AboutPage
