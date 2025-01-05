import { FaQuoteLeft, FaQuoteRight, FaUserCircle } from "react-icons/fa";

export default function WhatOurClientsSay() {
    return (
        <section
            id="testimonials"
            className="bg-gray-900 text-white py-16 px-6 md:px-20 lg:px-40"
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
                    What Our Clients Say
                </h2>
                <p className="text-lg text-gray-300 animate__animated animate__fadeInUp">
                    Discover why our clients trust us to secure their digital landscape.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn">
                    <FaQuoteLeft className="text-yellow-400 text-3xl mb-4" />
                    <p className="text-gray-300 italic mb-4">
                        "CyberSecure's team was incredibly thorough and professional in their approach. They transformed our web security."
                    </p>
                    <div className="flex items-center gap-3">
                        <FaUserCircle className="text-yellow-400 text-4xl" />
                        <span className="text-gray-200">John Doe, CEO</span>
                    </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn animate__delay-1s">
                    <FaQuoteLeft className="text-yellow-400 text-3xl mb-4" />
                    <p className="text-gray-300 italic mb-4">
                        "Thanks to CyberSecure, we’ve reduced our security breaches by 90%."
                    </p>
                    <div className="flex items-center gap-3">
                        <FaUserCircle className="text-yellow-400 text-4xl" />
                        <span className="text-gray-200">Jane Smith, IT Manager</span>
                    </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn animate__delay-2s">
                    <FaQuoteLeft className="text-yellow-400 text-3xl mb-4" />
                    <p className="text-gray-300 italic mb-4">
                        "Their real-time threat analysis tools are top-notch and easy to use."
                    </p>
                    <div className="flex items-center gap-3">
                        <FaUserCircle className="text-yellow-400 text-4xl" />
                        <span className="text-gray-200">Sarah Lee, CTO</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
