import NavLink from "./NavLink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverlay from "./MenuOverlay";

export interface INavLink {
  title: string;
  path: string;
}

const navLinks: INavLink[] = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4">
        <a href="/" className="md:text-5xl text-2xl text-white font-semibold">
          LOGO
        </a>

        <div className="mobile-menu block md:hidden">
          <div>
            {navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(false)}
                className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(true)}
                className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 px-4">
            {navLinks.map((link, index) => (
              <li key={index} className="inline-block">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  );
}

export default Navbar;
