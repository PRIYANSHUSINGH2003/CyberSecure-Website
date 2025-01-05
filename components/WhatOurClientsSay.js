import { FaQuoteLeft, FaQuoteRight, FaUserCircle } from "react-icons/fa";

export default function WhatOurClientsSay() {
    return (
        <section
            id="testimonials"
            className="bg-gray-900 text-white py-16 px-6 md:px-20 lg:px-40"
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-yellow-400 mb-4 animate__animated animate__fadeInDown">
                    What Our Clients Say
                </h2>
                <p className="text-lg text-gray-300 animate__animated animate__fadeInUp">
                    Discover why our clients trust us to secure their digital landscape.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn">
                    <FaQuoteLeft className="text-yellow-400 text-4xl mb-4 animate__animated animate__fadeInLeft" />
                    <p className="text-gray-300 italic mb-4">
                        &quot;CyberSecure&apos;s team was incredibly thorough and professional in their approach. They transformed our web security.&quot;
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                        <FaUserCircle className="text-yellow-400 text-5xl" />
                        <span className="text-gray-200 text-lg font-semibold">John Doe, CEO</span>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn animate__delay-1s">
                    <FaQuoteLeft className="text-yellow-400 text-4xl mb-4 animate__animated animate__fadeInLeft" />
                    <p className="text-gray-300 italic mb-4">
                        &quot;Thanks to CyberSecure, we&rsquo;ve reduced our security breaches by 90%.&quot;
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                        <FaUserCircle className="text-yellow-400 text-5xl" />
                        <span className="text-gray-200 text-lg font-semibold">Jane Smith, IT Manager</span>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn animate__delay-2s">
                    <FaQuoteLeft className="text-yellow-400 text-4xl mb-4 animate__animated animate__fadeInLeft" />
                    <p className="text-gray-300 italic mb-4">
                        &quot;Their real-time threat analysis tools are top-notch and easy to use.&quot;
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                        <FaUserCircle className="text-yellow-400 text-5xl" />
                        <span className="text-gray-200 text-lg font-semibold">Sarah Lee, CTO</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
