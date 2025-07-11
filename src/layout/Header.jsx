import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/ofspce.svg'; 

const NavLinks = () => (
  <>
    <a href="#" className="transition text-sm md:text-md lg:text-lg  text-text-muted hover:text-text-light">Instant Buy & Sell</a>
    <a href="#" className="transition text-sm md:text-md lg:text-lg text-text-muted hover:text-text-light">Markets</a>
    <a href="#" className="transition text-sm md:text-md lg:text-lg text-text-muted hover:text-text-light">Discover</a>
  </>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <a href="#">
            <img src={logo} alt="OFSP Logo" className="h-8 w-auto" />
          </a>

          <nav className="items-center hidden gap-8 md:flex">
            <NavLinks />
          </nav>

          <div className="items-center hidden gap-4 md:flex">
            <a href="#" className="transition text-text-muted hover:text-text-light">Sign Up</a>
            <a href="#" className="px-4 py-2 font-semibold transition border rounded-md text-text-light border-border hover:bg-card">Log In</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col gap-4 mt-6 md:hidden">
            <NavLinks />
            <div className="flex flex-col gap-4 pt-4 border-t border-border">
              <a href="#" className="transition text-text-muted hover:text-text-light">Sign Up</a>
              <a href="#" className="px-4 py-2 font-semibold text-center transition border rounded-md text-text-light border-border hover:bg-card">Log In</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
