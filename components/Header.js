import { FaShieldAlt, FaPhoneAlt, FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-800 text-white fixed top-0 w-full z-50 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <FaShieldAlt className="text-yellow-400 text-3xl animate__animated animate__bounce" />
                    <span className="text-2xl font-bold">CyberSecure</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/" legacyBehavior>
                        <a className="text-lg hover:text-yellow-400 transition duration-300">
                            Home
                        </a>
                    </Link>
                    <Link href="/services" legacyBehavior>
                        <a className="text-lg hover:text-yellow-400 transition duration-300">
                            Services
                        </a>
                    </Link>
                    <Link href="/about-us" legacyBehavior>
                        <a className="text-lg hover:text-yellow-400 transition duration-300">
                            About Us
                        </a>
                    </Link>
                    <Link href="/accessControl" legacyBehavior>
                        <a className="text-lg hover:text-yellow-400 transition duration-300">
                            Access Control
                        </a>
                    </Link>
                    <Link href="/contact" legacyBehavior>
                        <a className="text-lg hover:text-yellow-400 transition duration-300">
                            Contact
                        </a>
                    </Link>
                    <button
                        onClick={() => window.location.href = "tel:+16302966932"}
                        className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold transition-transform transform hover:scale-105 hover:bg-yellow-400"
                        aria-label="Call Us"
                    >
                        <FaPhoneAlt className="inline-block mr-2" /> Call Us
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-2xl md:hidden focus:outline-none"
                    aria-label="Toggle Navigation Menu"
                >
                    <FaBars />
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div
                    className="md:hidden bg-indigo-900 text-white transition-all duration-300"
                    role="menu"
                >
                    <Link href="/" legacyBehavior>
                        <a
                            className="block px-4 py-2 hover:bg-indigo-800"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </a>
                    </Link>
                    <Link href="/services" legacyBehavior>
                        <a
                            className="block px-4 py-2 hover:bg-indigo-800"
                            onClick={() => setIsOpen(false)}
                        >
                            Services
                        </a>
                    </Link>
                    <Link href="/about-us" legacyBehavior>
                        <a
                            className="block px-4 py-2 hover:bg-indigo-800"
                            onClick={() => setIsOpen(false)}
                        >
                            About Us
                        </a>
                    </Link>
                    <Link href="/accessControl" legacyBehavior>
                        <a
                            className="block px-4 py-2 hover:bg-indigo-800"
                            onClick={() => setIsOpen(false)}
                        >
                            Access Control
                        </a>
                    </Link>
                    <Link href="/contact" legacyBehavior>
                        <a
                            className="block px-4 py-2 hover:bg-indigo-800"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </a>
                    </Link>
                    <button
                        onClick={() => window.location.href = "tel:+919971196062"}
                        className="w-full bg-yellow-500 text-gray-900 py-2 font-semibold hover:bg-yellow-400"
                        aria-label="Call Us"
                    >
                        <FaPhoneAlt className="inline-block mr-2" /> Call Us
                    </button>
                </div>
            )}
        </header>
    );
}
