import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Footer from "./Footer";

function SideMenu({ isOpen, isPinned, setIsOpen }) {
  function handleMouseEnter() {
    if (!isPinned) setIsOpen(true);
  }

  function handleMouseLeave() {
    if (!isPinned) setIsOpen(false);
  }

  return (
    <nav
      className={`side-menu ${isOpen ? "expanded" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/joanna-lynn-yosdorus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
            {isOpen && <span>LinkedIn</span>}
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/62895701697678"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
            {isOpen && <span>WhatsApp</span>}
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/cinnaced/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
            {isOpen && <span>Instagram</span>}
          </a>
        </li>
      </ul>
      <div className="side-menu-footer">
        <Footer />
      </div>
    </nav>
  );
}

export default SideMenu;