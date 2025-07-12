import logo from '../assets/ofspce.svg';
import bgFooter from "../assets/bg_footer.svg";

const FooterLink = ({ href, children }) => (
    <a href={href} className="transition text-text-muted hover:text-text-light">
        {children}
    </a>
);

const Footer = () => {
    return (
        <footer
            className="relative py-16 border-t border-border bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url(${bgFooter})`,
                backgroundPosition: 'center top',
                backgroundSize: 'cover',
            }}
        >
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="grid gap-12 md:grid-cols-5">
                    <div className="md:col-span-2">
                        <a href="#">
                            <img src={logo} alt="OFSP Logo" className="h-8 w-auto" />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:col-span-3">
                        <div>
                            <h4 className="mb-4 font-semibold text-white">About</h4>
                            <div className="flex flex-col gap-2">
                                <FooterLink href="#">Our story</FooterLink>
                                <FooterLink href="#">Our customers</FooterLink>
                                <FooterLink href="#">Blog</FooterLink>
                                <FooterLink href="#">Legal documents</FooterLink>
                            </div>
                        </div>
                        <div>
                            <h4 className="mb-4 font-semibold text-white">Useful Links</h4>
                            <div className="flex flex-col gap-2">
                                <FooterLink href="#">Cookies</FooterLink>
                                <FooterLink href="#">Term</FooterLink>
                                <FooterLink href="#">Privacy</FooterLink>
                                <FooterLink href="#">Fees</FooterLink>
                                <FooterLink href="#">Website Status</FooterLink>
                            </div>
                        </div>
                        <div>
                            <h4 className="mb-4 font-semibold text-white">Help</h4>
                            <div className="flex flex-col gap-2">
                                <FooterLink href="#">Banking</FooterLink>
                                <FooterLink href="#">Comparators</FooterLink>
                                <FooterLink href="#">Customer support</FooterLink>
                                <FooterLink href="#">Security</FooterLink>
                            </div>
                        </div>
                        <div>
                            <h4 className="mb-4 font-semibold text-white">Social</h4>
                            <div className="flex flex-col gap-2">
                                <FooterLink href="#">Facebook</FooterLink>
                                <FooterLink href="#">Twitter</FooterLink>
                                <FooterLink href="#">Instagram</FooterLink>
                                <FooterLink href="#">Pinterest</FooterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
