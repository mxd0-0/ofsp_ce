// src/sections/MobileApp.jsx

const MobileApp = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="container grid items-center gap-12 px-4 mx-auto max-w-7xl md:grid-cols-2">
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Bittrex Global Mobile App Available Now
                    </h2>
                    <p className="mt-4 text-lg max-w-prose text-text-muted">
                        Get the security, trading, and capabilities of the best-in-class regulated cryptocurrency exchange Bittrex Global, directly on your smartphone.
                    </p>
                    <div className="flex items-center gap-4 mt-8">
                        <a href="#" aria-label="Download on the App Store">
                            <img src="/src/assets/app-store-badge.svg" alt="App Store" className="h-12 transition-opacity hover:opacity-80" />
                        </a>
                        <a href="#" aria-label="Get it on Google Play">
                            <img src="/src/assets/google-play-badge.svg" alt="Google Play" className="h-12 transition-opacity hover:opacity-80" />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        src="/src/assets/mobile-app-mockup.svg"
                        alt="Mobile app on a smartphone"
                        className="w-full max-w-sm h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default MobileApp;