import { NAV_LINKS } from "@/app/consts";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const NavLink = (link: { href: string; key: string; label: string }) => (
    <Link
      key={link.key}
      href={link.href}
      className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
    >
      {link.label}
    </Link>
  );

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="./images/hilink-logo.svg"
          alt="logo"
          width="74"
          height="29"
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">{NAV_LINKS.map(NavLink)}</ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/images/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src="./images/menu.svg"
        alt="menu"
        width="32"
        height="32"
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
