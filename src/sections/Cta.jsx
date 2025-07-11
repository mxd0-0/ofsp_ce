// src/sections/Cta.jsx

import { ArrowRight } from 'lucide-react';

const CtaCard = ({ image, title, linkText, href }) => (
    <div className="flex flex-col items-center p-8 text-center transition-all duration-300 rounded-lg bg-card hover:bg-card/80 sm:flex-row sm:text-left">
        <img src={image} alt="" className="flex-shrink-0 w-32 h-32 mb-6 sm:mb-0 sm:mr-8" />
        <div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <a href={href} className="inline-flex items-center gap-2 mt-4 font-semibold transition text-accent hover:text-accent/90">
                {linkText} <ArrowRight size={16} />
            </a>
        </div>
    </div>
);

const Cta = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="container grid gap-8 px-4 mx-auto max-w-5xl md:grid-cols-1 lg:grid-cols-2">
                <CtaCard
                    image="/assets/cta-create-account.png"
                    title="Create Your Account to Get Started."
                    linkText="Join Today"
                    href="#"
                />
                <CtaCard
                    image="/assets/cta-submit-token.png"
                    title="Submit Your Token for Listing."
                    linkText="Join Today"
                    href="#"
                />
            </div>
        </section>
    );
};

export default Cta;