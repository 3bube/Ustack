import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 
import Image from '/assets/profile.png';

const NavBar = () => {
  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }


  return (
    <nav className="sticky top-0 z-50 bg-[#0f0f0f] text-white py-3 shadow-md">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
          <img className="h-auto w-28 mr-2" src={Image} alt="Logo" />
        </div>
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:text-amber-500 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleNavBar}
            className="text-white focus:outline-none"
            aria-label={mobileDrawerOpen ? "Close menu" : "Open menu"}
          >
            {mobileDrawerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {mobileDrawerOpen && (
        <div className="lg:hidden absolute right-0 top-16 z-20 bg-[#0f0f0f] w-full p-6 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col items-center space-y-6 py-4">
            {navItems.map((item, index) => (
              <li key={index} className="py-2">
                <a
                  href={item.href}
                  className="hover:text-amber-500 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
