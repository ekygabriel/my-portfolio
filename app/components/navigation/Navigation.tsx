"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../../assets/eua-logo.svg";
import SideNav from "./SideNav";

const links = [
  { label: "Work", href: "/work" },
  { label: "About me", href: "/about" },
  { label: "Contact", href: "/contact" },
];
const Navigation = () => {
  const [ActiveLink, setActiveLink] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <nav className="py-2 px-10 h-[60px] flex items-center justify-between fixed bg-white w-full z-40 text-sm">
      <Link href="/">
        <Image src={Logo} width={60} height={30} alt="EUA Logo" />
      </Link>
      <ul className="hidden sm:flex gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-yellow-500 transition ${
              ActiveLink.includes(link.href) ? "text-yellow-500" : ""
            }`}
            onClick={() => setActiveLink(link.href)}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <SideNav ActiveLink={ActiveLink} />
    </nav>
  );
};

export default Navigation;
