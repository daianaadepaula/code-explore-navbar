import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems } from "../constants";

const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isItemOpen, setIsItemOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleItem = () => {
    setIsItemOpen(!isItemOpen);
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
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 transition-all"
                >
                  <Link
                    to={item.path}
                    className="relative group px-2 py-3 transition-all"
                  >
                    <a
                      className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-red-800"
                      href={item.href ?? "#"}
                    >
                      <span>{item.label}</span>
                      {item.subNav && (
                        <ChevronDown className="rotate-180 transition-all group-hover:rotate-0" />
                      )}
                    </a>

                    {item.subNav && (
                      <ul className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                        {item.subNav.map((item, index) => (
                          <li key={index}>
                            <Link
                              to={item.subPath}
                              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                            >
                              <a
                                href={item.href ?? "#"}
                                className="whitespace-nowrap pl-3"
                              >
                                {item.subTitle}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {mobileDrawerOpen && (
            <div className="fixed left-0 top-12 flex h-full min-h-screen w-full justify-end bg-black/60 lg:hidden">
              <div className="w-[65%] h-full bg-white px-4 py-4">
                <ul className="flex flex-col text-base gap-4 transition-all">
                  {navItems.map((item, index) => (
                    <li key={index} className="flex flex-col">
                      <Link
                        onClick={toggleItem}
                        to={item.path}
                        className="relative px-2 py-3 transition-all"
                      >
                        <a
                          className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-red-800"
                          href={item.href ?? "#"}
                        >
                          <span>{item.label}</span>
                          {item.subNav && (
                            <ChevronDown
                              className={`text-xs transition-all ${
                                isItemOpen && "rotate-180"
                              }`}
                            />
                          )}
                        </a>

                        {isItemOpen && item.subNav && (
                          <ul className="w-auto flex-col gap-1 bg-white py-3 transition-all flex">
                            {item.subNav.map((item, index) => (
                              <li key={index}>
                                <Link
                                  to={item.subPath}
                                  className="flex cursor-pointer py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                                >
                                  <a
                                    href={item.href ?? "#"}
                                    className="whitespace-nowrap pl-3"
                                  >
                                    {item.subTitle}
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}


        </div>
      </nav>
    </header>
  );
};

export default Header;
