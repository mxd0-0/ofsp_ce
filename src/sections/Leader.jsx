// src/sections/Leader.jsx

import { motion } from 'framer-motion';

// Import your icon assets
import iconSecurityFirst from '../assets/icon-security-first.svg';
import iconGreatTrading from '../assets/icon-great-trading.svg';
import iconRobustTech from '../assets/icon-robust-tech.svg';

const coreValues = [
    {
        icon: iconSecurityFirst,
        title: "Security First",
        description: "When choosing an exchange, trust matters. That's why security has been and will always be our top consideration.",
    },
    {
        icon: iconGreatTrading,
        title: "Great Trading",
        description: "We believe in the potential of blockchain to provide groundbreaking solutions across industries and beyond crypto.",
    },
    {
        icon: iconRobustTech,
        title: "Robust Technology",
        description: "When choosing an exchange, trust matters. That's why security has been and will always be our top consideration.",
    },
];

// Reusable component for the floating decorative shapes
const FloatingShape = ({ className, delay, duration }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 1, 1, 0], y: [10, 0, -10, 10] }}
        transition={{
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }}
        aria-hidden="true"
    />
);

// Animation Variants for scroll reveal
const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        },
    },
};

const Leader = () => {
    return (
        <motion.section
            // Changed background to solid card color to match design
            className="py-20  md:py-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="container px-4 mx-auto max-w-7xl">
                {/* Top Section: "Every Revolution Needs a Leader" */}
                <motion.div
                    className="grid gap-8 mb-20 md:grid-cols-5 md:items-center"
                    variants={sectionVariants}
                >
                    <div className="relative md:col-span-2">
                        {/* Animated Decorative elements */}
                        <div className="absolute -top-8 -left-4" aria-hidden="true">
                            <FloatingShape
                                className="w-3 h-3 bg-primary rounded-sm rotate-45"
                                delay={0}
                                duration={5}
                            />
                            <FloatingShape
                                className="w-2.5 h-2.5 bg-accent rounded-full ml-6 -mt-1"
                                delay={0.5}
                                duration={4}
                            />
                        </div>
                        <motion.h2
                            className="text-4xl font-bold leading-tight text-center text-white md:text-5xl md:text-left"
                            variants={itemVariants}
                        >
                            Every Revolution <br /> Needs a Leader
                        </motion.h2>
                    </div>
                    <motion.div className="md:col-span-3" variants={itemVariants}>
                        <p className="text-lg text-center text-text-muted md:text-left">
                            Bitcoin is storming the Bastille, and we're up front. Bittrex Global's premier trading platform is designed for those who grasp the power of blockchain's promise, and want to be a part of the movement. With lightning-fast trades, dependable digital wallets and industry-leading security, we've created an exchange to lead this revolutionary technology.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Bottom Section: Core Values */}
                <motion.div
                    className="grid gap-12 md:grid-cols-3"
                    variants={sectionVariants}
                >
                    {coreValues.map((value) => (
                        <motion.div
                            key={value.title}
                            className="flex flex-col items-center text-center"
                            variants={itemVariants}
                        >
                            <img src={value.icon} alt="" className="w-20 h-20 mb-6" />
                            <h3 className="mb-3 text-2xl font-bold text-white">{value.title}</h3>
                            <p className="max-w-xs text-text-muted">{value.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Leader;