import { FaRocket, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import Link from "next/link";

export default function GetAProposal() {
    return (
        <section className="py-20 bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 text-white relative overflow-hidden">
            {/* Background Rocket Image */}
            <div
                className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center opacity-20 z-0"
                style={{ backgroundImage: 'url(/rocket-image.png)' }}
            ></div>

            {/* Content */}
            <div className="container mx-auto text-center relative z-10 px-6">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-6 animate__animated animate__fadeIn">
                    Need a Reliable Website Partner for Your Business?
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 mb-12 animate__animated animate__fadeIn animate__delay-1s">
                    For the very best in web design, branding, and digital marketing, call CyberOptik at (+91) 9971196062.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 animate__animated animate__fadeIn animate__delay-2s">
                    {/* Call Now Button */}
                    <button
                        onClick={() => window.location.href = "tel:+919971196062"}
                        className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg sm:text-2xl font-semibold transition-transform transform hover:scale-105 hover:bg-yellow-400 focus:outline-none"
                    >
                        <FaPhoneAlt className="inline-block mr-3" /> Call Now
                    </button>

                    {/* Get A Proposal Button */}
                    <Link href="/proposal-form" legacyBehavior>
                        <a className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg text-lg sm:text-2xl font-semibold transition-transform transform hover:scale-105 hover:bg-yellow-500 hover:text-gray-900 focus:outline-none">
                            <FaPaperPlane className="inline-block mr-3" /> Get A Proposal
                        </a>
                    </Link>
                </div>
            </div>

            {/* Floating Animation Icons */}
            <div className="absolute inset-0 flex justify-around items-center pointer-events-none opacity-30 z-0">
                <FaRocket className="text-9xl text-yellow-400 animate-bounce" />
            </div>
        </section>
    );
}
