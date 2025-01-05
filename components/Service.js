import { FaShieldAlt, FaLock, FaChartLine, FaSearch } from 'react-icons/fa'; // Importing icons for services

export default function Service() {
    return (
        <section className="py-20 bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-yellow-400 mb-8">
                    Our Cybersecurity Services
                </h2>
                <p className="text-xl text-gray-300 mb-12">
                    Explore the cutting-edge cybersecurity solutions we offer to keep your network safe and secure.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Service 1 */}
                    <div className="service-card bg-gray-900 p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                        <FaShieldAlt className="text-5xl text-yellow-400 mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Threat Protection</h3>
                        <p className="text-gray-300 mb-4">
                            We provide 24/7 monitoring and proactive defense strategies to protect your network from malicious threats.
                        </p>
                        <a href="#learn-more" className="text-yellow-500 hover:text-yellow-300 font-medium transition duration-300">
                            Learn More
                        </a>
                    </div>

                    {/* Service 2 */}
                    <div className="service-card bg-gray-900 p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                        <FaLock className="text-5xl text-yellow-400 mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Data Encryption</h3>
                        <p className="text-gray-300 mb-4">
                            Our advanced encryption solutions ensure that your sensitive data remains secure and protected from unauthorized access.
                        </p>
                        <a href="#learn-more" className="text-yellow-500 hover:text-yellow-300 font-medium transition duration-300">
                            Learn More
                        </a>
                    </div>

                    {/* Service 3 */}
                    <div className="service-card bg-gray-900 p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                        <FaChartLine className="text-5xl text-yellow-400 mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Network Monitoring</h3>
                        <p className="text-gray-300 mb-4">
                            Real-time network monitoring and performance analysis to detect and respond to threats before they escalate.
                        </p>
                        <a href="#learn-more" className="text-yellow-500 hover:text-yellow-300 font-medium transition duration-300">
                            Learn More
                        </a>
                    </div>

                    {/* Service 4 */}
                    <div className="service-card bg-gray-900 p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                        <FaSearch className="text-5xl text-yellow-400 mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Vulnerability Assessment</h3>
                        <p className="text-gray-300 mb-4">
                            Identify potential vulnerabilities within your system with our comprehensive vulnerability assessments.
                        </p>
                        <a href="#learn-more" className="text-yellow-500 hover:text-yellow-300 font-medium transition duration-300">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
