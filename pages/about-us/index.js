import { FaShieldAlt, FaUserTie, FaChartLine, FaUsers } from "react-icons/fa";

export default function AboutUs() {
    return (
        <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6 md:px-20 lg:px-40">
            {/* Page Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-yellow-400 animate__animated animate__fadeInDown">
                    About Us
                </h1>
                <p className="text-lg text-gray-300 mt-4 animate__animated animate__fadeInUp animate__delay-1s">
                    Discover our mission, vision, and the dedicated team behind CyberOptik.
                </p>
            </div>

            {/* Our Mission and Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-6 animate__animated animate__fadeInLeft">
                    <h2 className="text-4xl font-semibold text-yellow-400">Our Mission</h2>
                    <p className="text-gray-300 text-lg">
                        To provide world-class cybersecurity solutions and services that empower businesses to operate
                        securely in an increasingly digital world.
                    </p>
                    <FaShieldAlt className="text-yellow-400 text-6xl" />
                </div>
                <div className="space-y-6 animate__animated animate__fadeInRight">
                    <h2 className="text-4xl font-semibold text-yellow-400">Our Vision</h2>
                    <p className="text-gray-300 text-lg">
                        To become a global leader in cybersecurity, ensuring a safer digital environment for all.
                    </p>
                    <FaChartLine className="text-yellow-400 text-6xl" />
                </div>
            </div>

            {/* Our Core Values Section */}
            <div className="bg-gray-800 p-10 rounded-lg shadow-lg mb-16 animate__animated animate__fadeInUp">
                <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">Our Core Values</h2>
                <ul className="space-y-4 text-lg text-gray-300">
                    <li>🔒 Integrity in safeguarding data and digital assets.</li>
                    <li>🚀 Innovation to stay ahead in cybersecurity solutions.</li>
                    <li>🤝 Commitment to building trust with clients and partners.</li>
                    <li>💡 Excellence in delivering top-notch services.</li>
                </ul>
            </div>

            {/* Our Team Section */}
            <div className="text-center">
                <h2 className="text-4xl font-bold text-yellow-400 mb-6 animate__animated animate__fadeInDown">
                    Meet Our Team
                </h2>
                <p className="text-lg text-gray-300 mb-12 animate__animated animate__fadeInUp">
                    A team of highly skilled professionals dedicated to keeping you secure.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg text-center animate__animated animate__zoomIn">
                        <FaUserTie className="text-yellow-400 text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-white">John Doe</h3>
                        <p className="text-gray-400 text-sm">CEO & Founder</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg text-center animate__animated animate__zoomIn animate__delay-1s">
                        <FaUserTie className="text-yellow-400 text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-white">Jane Smith</h3>
                        <p className="text-gray-400 text-sm">CTO</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg text-center animate__animated animate__zoomIn animate__delay-2s">
                        <FaUserTie className="text-yellow-400 text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-white">Alex Johnson</h3>
                        <p className="text-gray-400 text-sm">Head of Security</p>
                    </div>
                </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="mt-16 text-center animate__animated animate__fadeInUp">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                    Ready to Secure Your Business?
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                    Partner with us today to protect your digital assets.
                </p>
                <a
                    href="/contact"
                    className="bg-yellow-500 text-gray-900 py-3 px-8 rounded-lg text-xl font-semibold transition-transform transform hover:scale-105 hover:bg-yellow-400 focus:outline-none"
                >
                    Contact Us
                </a>
            </div>
        </section>
    );
}
