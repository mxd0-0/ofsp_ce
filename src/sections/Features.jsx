// src/sections/Features.jsx

import { motion } from 'framer-motion';

// I'll assume you will create these SVGs in the assets folder.
// For now, I'm using placeholder strings, but you can replace them with your imports.
import securityIcon from '../assets/icon-security.svg';
import wealthIcon from '../assets/icon-wealth.svg';
import tokenIcon from '../assets/icon-token.svg';

const featureItems = [
    {
        icon: securityIcon,
        title: "Unmatched Security",
        description: "Don't wait. Invite your friend and get free crypto.",
    },
    {
        icon: wealthIcon,
        title: "The Wealth",
        description: "Don't wait. Invite your friend and get free crypto.",
    },
    {
        icon: tokenIcon,
        title: "Leveraged Token", // Corrected "Tocken" to "Token"
        description: "Don't wait. Invite your friend and get free crypto.",
    },
];

// Animation for the container to orchestrate children's animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
        },
    },
};

// Animation for each feature card
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        },
    },
};

const Features = () => {
    return (
        <section className="py-20 bg-card/50 md:py-24">
            <motion.div
                className="container grid gap-12 px-4 mx-auto max-w-7xl md:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }} // Trigger when 50% is in view
                variants={containerVariants}
            >
                {featureItems.map((item) => (
                    <motion.div
                        key={item.title}
                        className="flex flex-col items-center p-6 text-center transition-transform duration-300 transform rounded-lg hover:-translate-y-2"
                        variants={itemVariants}
                    >
                        <img src={item.icon} alt={`${item.title} icon`} className="w-auto h-50 mb-8" />
                        <h3 className="mb-2 text-2xl font-bold text-white">{item.title}</h3>
                        <p className="text-text-muted">{item.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Features;