import React from 'react'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'
import Image from '../images/img-3.jpg'
import { animationThree, transition } from '../animation'


function ServicesPage() {
    return (
        <motion.div
            initial='out'
            animate='end'
            exit='out'
            variants={animationThree}
            transition={transition}
        >
            <Hero image={Image} />
        </motion.div>
    )
}

export default ServicesPage
