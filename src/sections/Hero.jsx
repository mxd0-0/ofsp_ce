import { motion } from 'framer-motion';
import dashboardPreview from "../assets/dashboard-preview.png";
import heroBg from "../assets/bg_hero.svg";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
      ease: 'easeOut',
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden pt-20 pb-32 md:pt-28 md:pb-40 bg-no-repeat bg-cover bg-top"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <motion.div
        className="container grid items-center gap-12 px-4 mx-auto max-w-7xl md:grid-cols-2"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.h1
            className=" font-bold leading-tight tracking-tighter text-white text-4xl md:text-4xl lg:text-6xl"
            variants={itemVariants}
          >
            Upgrade to <br /> Bittrex Global
          </motion.h1>
          <motion.p
            className="mt-6 text-md md:text-lg max-w-prose text-text-muted"
            variants={itemVariants}
          >
            Bittrex Global is the most trusted cryptocurrency exchange known for its next-level security.
          </motion.p>
          <motion.div
            className="flex flex-col gap-4 mt-8 sm:flex-row"
            variants={itemVariants}
          >
            <a
              href="#"
              className="px-8 py-3 font-semibold text-white transition-transform duration-300 rounded-md bg-primary hover:bg-primary/90 hover:-translate-y-1"
            >
              Open Free Account
            </a>
            <a
              href="#"
              className="px-8 py-3 font-semibold transition-transform duration-300 border rounded-md text-text-light border-border hover:bg-card hover:-translate-y-1"
            >
              View Markets
            </a>
          </motion.div>
        </div>

        <motion.div className="flex justify-center" variants={imageVariants}>
          <img
              src={dashboardPreview}
            alt="Bittrex Global Dashboard Preview"
            className="rounded-lg shadow-2xl shadow-primary/10 max-w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Hero;
