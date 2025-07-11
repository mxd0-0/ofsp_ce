import designElement from '../assets/Design-elements.svg';

const Innovation = () => {
    return (
        <section className="relative py-20 bg-card/50 md:py-28 overflow-hidden">
            {/* Icon positioned on the right */}
            <img
                src={designElement}
                alt="Design Element"
                className="absolute right-0 top-1/2 transform -translate-y-1/2  -translate-x-20 w-20 md:w-30 opacity-90 pointer-events-none select-none"
            />

            {/* Text content centered */}
            <div className="container px-4 mx-auto text-center max-w-3xl relative z-10">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    An Innovative Environment
                </h2>
                <p className="mt-6 text-lg text-text-muted">
                    Bitcoin is storming the Bastille, and we're up front. Bittrex Global's premier trading platform is designed for those who grasp the power of blockchain's promise, and want to be a part of the movement. With lightning-fast trades, dependable digital wallets and industry-leading security, we've created an exchange to lead this revolutionary technology.
                </p>
            </div>
        </section>
    );
};

export default Innovation;
