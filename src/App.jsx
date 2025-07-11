// src/App.jsx

import Header from './layout/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Markets from './sections/Markets';
import MobileApp from './sections/MobileApp';
import Leader from './sections/Leader';
import CoreValues from './sections/CoreValues';
import Innovation from './sections/Innovation';
import Cta from './sections/Cta';
import Footer from './layout/Footer';

function App() {
    return (
        <div className="overflow-x-hidden bg-background">
            <Header />
            <main>
                <Hero />
                <Features />
                <Markets />
                <MobileApp />
                <Leader />
                <CoreValues />
                <Innovation />
                <Cta />
            </main>
            <Footer />
        </div>
    );
}

export default App;