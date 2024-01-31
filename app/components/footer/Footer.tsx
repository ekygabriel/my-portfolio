import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const links = [
  {
    href: "https://x.com/ekomgabriel",
    icon: <FaXTwitter />,
  },
  {
    href: "https://www.linkedin.com/in/ekomobong-udoaffah/",
    icon: <FaLinkedin />,
  },
];

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <footer
      className={`flex flex-col md:flex-row gap-5 items-center justify-between px-10 py-9 text-[#8F8F8F] text-sm ${
        className ? className : ""
      }`}
    >
      <div className="text-center">
        © Ekomobong Udo-affah {new Date().getFullYear()} | Designer |{" "}
        <Link href="mailto:ekygabriel@gmail.com">ekygabriel@gmail.com</Link>
      </div>
      <div className="flex gap-2 items-center">
        <p>Follow me on </p>
        <ul className="flex gap-2 items-center">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              target="_blank"
              className="w-5 h-5 -mb-1 text-base"
            >
              {link.icon}
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
