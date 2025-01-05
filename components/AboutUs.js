import { FaShieldAlt, FaUserShield, FaLock, FaNetworkWired } from "react-icons/fa";

export default function AboutUs() {
    return (
        <section
            id="about"
            className="bg-gradient-to-b from-indigo-900 to-gray-900 text-white py-16 px-6 md:px-20 lg:px-40"
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
                    About Us
                </h2>
                <p className="text-lg text-gray-300 animate__animated animate__fadeInUp">
                    At CyberSecure, we are committed to providing top-notch cybersecurity solutions
                    to safeguard your digital world. Our expertise in web security, network protection,
                    and data encryption ensures your business stays secure in an ever-evolving threat landscape.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Feature 1 */}
                <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn">
                    <FaShieldAlt className="text-yellow-400 text-6xl mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Web Security</h3>
                    <p className="text-gray-300">
                        Protect your website from cyber threats with our state-of-the-art solutions.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn animate__delay-1s">
                    <FaUserShield className="text-yellow-400 text-6xl mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Network Protection</h3>
                    <p className="text-gray-300">
                        Secure your business network with advanced firewalls and monitoring tools.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn animate__delay-2s">
                    <FaLock className="text-yellow-400 text-6xl mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Data Encryption</h3>
                    <p className="text-gray-300">
                        Keep your sensitive data safe with robust encryption and security measures.
                    </p>
                </div>

                {/* Feature 4 */}
                <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn animate__delay-3s">
                    <FaNetworkWired className="text-yellow-400 text-6xl mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Threat Monitoring</h3>
                    <p className="text-gray-300">
                        Monitor and respond to potential threats in real-time with our 24/7 services.
                    </p>
                </div>
            </div>
        </section>
    );
}
