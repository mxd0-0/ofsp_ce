
const featureItems = [
    {
        icon: "/src/assets/icon-security.svg",
        title: "Unmatched Security",
        description: "Don't wait. Invite your friend and get free crypto.",
    },
    {
        icon: "/src/assets/icon-wealth.svg",
        title: "The Wealth",
        description: "Don't wait. Invite your friend and get free crypto.",
    },
    {
        icon: "/src/assets/icon-token.svg",
        title: "Leveraged Token",
        description: "Don't wait. Invite your friend and get free crypto.",
    },
];

const Features = () => {
    return (
        <section className="py-16 bg-card/50">
            <div className="container grid gap-12 px-4 mx-auto max-w-7xl md:grid-cols-3">
                {featureItems.map((item) => (
                    <div key={item.title} className="flex flex-col items-center p-6 text-center transition-transform duration-300 transform rounded-lg hover:-translate-y-2">
                        <img src={item.icon} alt={`${item.title} icon`} className="w-16 h-16 mb-6" />
                        <h3 className="mb-2 text-lg md:text-xl lg:text-2xl font-bold text-white">{item.title}</h3>
                        <p className="text-text-muted text-sm  md:text-lg lg:text-xl">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;