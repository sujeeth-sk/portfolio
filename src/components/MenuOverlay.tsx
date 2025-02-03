import { INavLink } from "./Navbar";
import NavLink from "./NavLink";

interface MenuOverlayProps {
  links: INavLink[];
}

const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index} className="py-2">
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
