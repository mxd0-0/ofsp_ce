// src/sections/CoreValues.jsx

const values = [
    {
        icon: "/assets/icon-security-first.svg",
        title: "Security First",
        description: "When choosing an exchange, trust matters. That's why security has been and will always be our top consideration.",
    },
    {
        icon: "/assets/icon-great-trading.svg",
        title: "Great Trading",
        description: "We believe in the power and potential of blockchain to provide groundbreaking solutions across industries and beyond crypto.",
    },
    {
        icon: "/assets/icon-robust-tech.svg",
        title: "Robust Technology",
        description: "When choosing an exchange, trust matters. That's why security has been and will always be our top consideration.",
    },
];

const CoreValues = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="container grid gap-12 px-4 mx-auto max-w-7xl md:grid-cols-3">
                {values.map((value) => (
                    <div key={value.title} className="flex flex-col items-center p-6 text-center">
                        <img src={value.icon} alt={`${value.title} icon`} className="w-16 h-16 mb-6" />
                        <h3 className="mb-2 text-2xl font-bold text-white">{value.title}</h3>
                        <p className="text-text-muted">{value.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CoreValues;