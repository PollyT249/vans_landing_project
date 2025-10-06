import { FaTwitter, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

const socialLinks = [
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://tiktok.com", icon: <FaTiktok /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-brown-300 py-4 text-green-50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          &copy; Vans 2024. All rights reserved.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brown-400 transition-colors duration-500 ease-in-out hover:text-green-75"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
