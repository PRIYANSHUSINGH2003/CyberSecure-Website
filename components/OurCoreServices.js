import { FaShieldAlt, FaUserShield, FaLock, FaNetworkWired } from "react-icons/fa";

export default function OurCoreServices() {
    return (
        <section
            id="services"
            className="bg-gradient-to-b from-indigo-900 to-gray-900 text-white py-16 px-6 md:px-20 lg:px-40"
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
                    Our Core Services
                </h2>
                <p className="text-lg text-gray-300 animate__animated animate__fadeInUp">
                    From web security to threat monitoring, we offer comprehensive cybersecurity solutions to protect your business.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn">
                    <FaShieldAlt className="text-yellow-400 text-6xl mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Web Security</h3>
                    <p className="text-gray-300">Safeguard your digital presence against malicious attacks.</p>
                </div>
                <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn animate__delay-1s">
                    <FaUserShield className="text-yellow-400 text-6xl mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Data Protection</h3>
                    <p className="text-gray-300">Ensure the security of your sensitive data with robust encryption.</p>
                </div>
                <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn animate__delay-2s">
                    <FaLock className="text-yellow-400 text-6xl mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Network Security</h3>
                    <p className="text-gray-300">Monitor and protect your network from potential threats.</p>
                </div>
                <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn animate__delay-3s">
                    <FaNetworkWired className="text-yellow-400 text-6xl mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Threat Analysis</h3>
                    <p className="text-gray-300">Identify and mitigate risks with real-time analysis and reporting.</p>
                </div>
            </div>
        </section>
    );
}
