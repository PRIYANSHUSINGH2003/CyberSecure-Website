import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-16 relative">
            {/* Footer Background Animation */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center opacity-10 z-0" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Footer Content */}
                <div className="grid md:grid-cols-3 grid-cols-1 gap-12 text-center md:text-left">
                    {/* About Us Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-yellow-400 mb-4 animate__animated animate__fadeIn">
                            About CyberSecure
                        </h3>
                        <p className="text-gray-300 mb-4 animate__animated animate__fadeIn animate__delay-1s">
                            CyberSecure is dedicated to providing cutting-edge cybersecurity services to protect your business and data.
                        </p>
                        <Link href="/about-us" legacyBehavior>
                            <a className="text-yellow-500 hover:text-yellow-400 font-semibold animate__animated animate__fadeIn animate__delay-2s">Learn More</a>
                        </Link>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-yellow-400 mb-4 animate__animated animate__fadeIn">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href="/services" legacyBehavior>
                                    <a className="hover:text-yellow-500 animate__animated animate__fadeIn animate__delay-1s">Services</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" legacyBehavior>
                                    <a className="hover:text-yellow-500 animate__animated animate__fadeIn animate__delay-1s">Contact</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" legacyBehavior>
                                    <a className="hover:text-yellow-500 animate__animated animate__fadeIn animate__delay-1s">Privacy Policy</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" legacyBehavior>
                                    <a className="hover:text-yellow-500 animate__animated animate__fadeIn animate__delay-1s">Terms of Service</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-yellow-400 mb-4 animate__animated animate__fadeIn">
                            Follow Us
                        </h3>
                        <div className="flex justify-center md:justify-start space-x-6">
                            <a
                                href="https://www.facebook.com/"
                                className="text-2xl text-gray-300 hover:text-yellow-500 transition duration-300 animate__animated animate__fadeIn animate__delay-2s"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://twitter.com/"
                                className="text-2xl text-gray-300 hover:text-yellow-500 transition duration-300 animate__animated animate__fadeIn animate__delay-3s"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://www.linkedin.com/"
                                className="text-2xl text-gray-300 hover:text-yellow-500 transition duration-300 animate__animated animate__fadeIn animate__delay-4s"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                className="text-2xl text-gray-300 hover:text-yellow-500 transition duration-300 animate__animated animate__fadeIn animate__delay-5s"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 text-center text-gray-400">
                    <p className="text-sm animate__animated animate__fadeIn animate__delay-6s">
                        &copy; 2025 CyberSecure. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
