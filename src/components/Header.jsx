import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants";
import Dropdown from "./Dropdown";

const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <header>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <Link to="/">
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-xl tracking-tight">
                Daiana
              </span>
            </Link>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => {
                if (item.label === "Masculino") {
                  return (
                    <li 
											key={index} 
											className="flex items-center"
											onMouseEnter={() => setDropdown(true)}
											onMouseLeave={() => setDropdown(false)}
										>
                      <Link 
												to={item.path}
											>
                        <a
                          className="text-neutral-800 hover:text-red-800"
                          href={item.href}
                        >
                          {item.label}
                        </a>
                      </Link>
                      {dropdown && <Dropdown />}
                    </li>
                  );
                }

                return (
                  <li key={index}>
                    <Link to={item.path}>
                      <a
                        className="text-neutral-800 hover:text-red-800"
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-orange-300 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-neutral-800 hover:text-red-800"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
