// src/sections/Markets.jsx

const Markets = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="container grid items-center gap-16 px-4 mx-auto max-w-7xl lg:grid-cols-2">
                <div className="lg:order-last">
                    <img
                        src="/src/assets/crypto-cards.svg"
                        alt="Cryptocurrency price cards for Dogecoin, Bitcoin, Ethereum, and Tether"
                        className="w-full h-auto max-w-lg mx-auto"
                    />
                </div>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Your Access to the Top Coin Markets
                    </h2>
                    <p className="mt-4 text-lg max-w-prose text-text-muted">
                        Capitalize on trends and trade with confidence through our expansive marketplace listings.
                    </p>
                    <p className="mt-4 text-lg font-semibold text-accent">
                        Buy, sell and trade over 500 markets
                    </p>
                    <a
                        href="#"
                        className="px-8 py-3 mt-8 font-semibold text-black transition rounded-md bg-accent hover:bg-accent/90"
                    >
                        View Markets
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Markets;