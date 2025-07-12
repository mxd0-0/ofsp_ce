// src/sections/Innovation.jsx

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Import assets as requested
import createAccountImg from '../assets/cta-create-account.svg';
import submitTokenImg from '../assets/cta-submit-token.svg';

// A small component for the floating shapes to keep the code clean
const FloatingShape = ({ className, delay }) => (
    <motion.div
        className={className}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, 10, 0], opacity: [0, 1, 1, 0] }}
        transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }}
        aria-hidden="true"
    />
);

const CtaCard = ({ image, title, linkText, href, variants }) => (
    <motion.div
        className="flex flex-col items-center p-8 text-center transition-transform duration-300 rounded-lg bg-card sm:flex-row sm:text-left hover:-translate-y-2"
        variants={variants}
    >
        <img src={image} alt="" className="flex-shrink-0 w-32 h-32 mb-6 sm:w-40 sm:h-40 sm:mb-0 sm:mr-8" />
        <div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <a
                href={href}
                className="inline-flex items-center gap-2 mt-4 font-semibold transition-colors duration-300 text-accent hover:text-accent/80"
            >
                {linkText} <ArrowRight size={16} />
            </a>
        </div>
    </motion.div>
);

// Animation variants
const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};


const Innovation = () => {
    return (
        <motion.section
            className="relative py-20 overflow-hidden md:py-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="container px-4 mx-auto">
                {/* Top Section: "An Innovative Environment" */}
                <div className="relative mb-20 text-center max-w-3xl mx-auto">
                    {/* Decorative elements */}
                    <FloatingShape className="absolute w-4 h-4 bg-yellow-400/80 rounded-sm -top-8 right-8 rotate-45" delay={0} />
                    <FloatingShape className="absolute w-5 h-5 bg-primary rounded-full -top-4 right-0" delay={0.5} />
                    <FloatingShape className="absolute w-3 h-3 bg-accent rounded-full top-0 right-16" delay={1} />

                    <motion.h2
                        className="text-4xl font-bold tracking-tight text-white md:text-5xl"
                        variants={textVariants}
                    >
                        An Innovative Environment
                    </motion.h2>
                    <motion.p
                        className="mt-6 text-lg text-text-muted"
                        variants={textVariants}
                    >
                        Bitcoin is storming the Bastille, and we're up front. Bittrex Global's premier trading platform is designed for those who grasp the power of blockchain's promise, and want to be a part of the movement. With lightning-fast trades, dependable digital wallets and industry-leading security, we've created an exchange to lead this revolutionary technology.
                    </motion.p>
                </div>

                {/* Bottom Section: CTA Cards */}
                <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-1 lg:grid-cols-2">
                    <CtaCard
                        image={createAccountImg}
                        title="Create Your Account to Get Started."
                        linkText="Join Today"
                        href="#"
                        variants={cardVariants}
                    />
                    <CtaCard
                        image={submitTokenImg}
                        title="Submit Your Token for Listing."
                        linkText="Join Today"
                        href="#"
                        variants={cardVariants}
                    />
                </div>
            </div>
        </motion.section>
    );
};

export default Innovation;