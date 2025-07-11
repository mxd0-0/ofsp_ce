// src/sections/Leader.jsx

const Leader = () => {
    return (
        <section className="py-20 bg-card/50 md:py-28">
            <div className="container grid gap-8 px-4 mx-auto max-w-7xl md:grid-cols-5 md:items-center">
                <div className="md:col-span-2">
                    <h2 className="text-4xl font-bold leading-tight text-center text-white md:text-5xl md:text-left">
                        Every Revolution Needs a Leader
                    </h2>
                </div>
                <div className="md:col-span-3">
                    <p className="text-lg text-center text-text-muted md:text-left">
                        Bitcoin is storming the Bastille, and we're up front. Bittrex Global's premier trading platform is designed for those who grasp the power of blockchain's promise, and want to be a part of the movement. With lightning-fast trades, dependable digital wallets and industry-leading security, we've created an exchange to lead this revolutionary technology.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Leader;