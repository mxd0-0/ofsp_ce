// src/sections/MobileApp.jsx

import { motion } from 'framer-motion';

// Using your specified import method
import mobileMockup from "../assets/mobile-app-mockup.png"; // Use png for photo-like mockups
import googlePlayBadge from "../assets/google-play-badge.svg";
import appStoreBadge from "../assets/app-store-badge.svg";

// Animation variants
const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2,
        },
    },
};

const textVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const imageVariants = {
    hidden: { x: 50, opacity: 0, rotate: 5 },
    visible: {
        x: 0,
        opacity: 1,
        rotate: -5, // Slight angle to match design
        transition: { duration: 0.8, ease: [0.17, 0.55, 0.55, 1], delay: 0.2 },
    },
};

const FloatingShape = ({ className, delay }) => (
    <motion.div
        className={className}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }}
        aria-hidden="true"
    />
);


const MobileApp = () => {
    return (
        <section className="relative py-12 md:py-20 overflow-hidden">
            {/* Decorative Background Elements */}
            <motion.div
                className="container grid items-center gap-12 px-4 mx-auto max-w-7xl md:grid-cols-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={sectionVariants}
            >
                {/* Left Column: Text Content */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <motion.h2
                        className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:leading-tight"
                        variants={textVariants}
                    >
                        Bittrex Global Mobile App Available Now
                    </motion.h2>
                    <motion.p
                        className="mt-6 text-lg max-w-xl text-text-muted"
                        variants={textVariants}
                    >
                        Get the security, trading, and capabilities of the best-in-class regulated cryptocurrency exchange Bittrex Global, directly on your smartphone.
                    </motion.p>
                    <motion.div
                        className="flex flex-wrap items-center justify-center gap-4 mt-8 md:justify-start"
                        variants={textVariants}
                    >
                        <a href="#" aria-label="Download on the App Store">
                            <img src={appStoreBadge} alt="App Store" className="h-22 transition-opacity duration-300 hover:opacity-80" />
                        </a>
                        <a href="#" aria-label="Get it on Google Play">
                            <img src={googlePlayBadge} alt="Google Play" className="h-22 transition-opacity duration-300 hover:opacity-80" />
                        </a>
                    </motion.div>
                </div>

                {/* Right Column: Mobile Mockup */}
                <motion.div
                    className="flex justify-center"
                    variants={imageVariants}
                >
                    <img
                        src={mobileMockup}
                        alt="Mobile app on a smartphone"
                        className=" w-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default MobileApp;