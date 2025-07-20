import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom"; // 🧭 import Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Display", path: "/display" },
    { name: "Add", path: "/add" },
    { name: "Update", path: "/update" },
    { name: "Delete", path: "/delete" }
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-500 text-white">
      <div className="max-w-screen-xl p-4 flex items-center justify-between relative">
        <div className="text-xl font-bold p-2">Employee System</div>

        <ul className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link to={link.path} className="font-semibold">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-blue-400 p-4 flex flex-col items-start gap-2 z-10">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="block w-full"
                onClick={handleNavClick}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
