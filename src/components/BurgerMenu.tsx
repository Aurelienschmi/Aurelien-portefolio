import React, { useState } from "react";

interface BurgerMenuProps {
  about: boolean;
  resume: boolean;
  works: boolean;
  contact: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ about, resume, works, contact }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-white bg-gray-800 p-2 rounded-lg focus:outline-none"
      >
        Menu
      </button>
      {isOpen && (
        <nav className="bg-gray-800 p-4 rounded-lg shadow-lg absolute top-12 right-0 w-48">
          <ul className="space-y-4">
            <li>
              <a
                href="#about"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#works"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Works
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default BurgerMenu;