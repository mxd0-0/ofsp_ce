// src/sections/Markets.jsx
import cryptoCards from '../assets/crypto-cards.svg';

// src/sections/Markets.jsx

import { motion } from 'framer-motion';

// Animation variants for the container to orchestrate staggered animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// Variants for text elements (fade in from bottom)
const textItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

// Variant for the image (slide in from left)
const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: [0.17, 0.55, 0.55, 1] },
    },
};

const Markets = () => {
    return (
        <motion.section
            className="py-20 md:py-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the section is in view
            variants={containerVariants}
        >
            <div className="container grid items-center gap-16 px-4 mx-auto max-w-7xl lg:grid-cols-2">
                {/* Image Column */}
                <motion.div className="lg:order-1" variants={imageVariants}>
                    <img
                        src={cryptoCards} // Using standard placeholder
                        alt="Cryptocurrency price cards for Dogecoin, Bitcoin, Ethereum, and Tether"
                        className="w-full h-auto max-w-lg mx-auto"
                    />
                </motion.div>

                {/* Text Column */}
                <div className="flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-left">
                    <motion.h2
                        className="text-4xl font-bold tracking-tight text-white lg:text-5xl"
                        variants={textItemVariants}
                    >
                        Your Access to the Top Coin Markets
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-lg max-w-prose text-text-muted"
                        variants={textItemVariants}
                    >
                        Capitalize on trends and trade with confidence through our expansive marketplace listings.
                    </motion.p>
                    <motion.p
                        className="mt-4 text-lg font-semibold text-accent"
                        variants={textItemVariants}
                    >
                        Buy, sell and trade over 500 markets
                    </motion.p>
                    <motion.div variants={textItemVariants}>
                        <a
                            href="#"
                            className="inline-block px-8 py-3 mt-8 font-semibold text-black transition-transform duration-300 rounded-md bg-accent hover:bg-accent/90 hover:-translate-y-1"
                        >
                            View Markets
                        </a>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Markets;