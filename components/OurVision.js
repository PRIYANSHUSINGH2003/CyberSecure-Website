import { FaEye, FaLightbulb, FaRocket } from "react-icons/fa";

export default function OurVision() {
    return (
        <section
            id="vision"
            className="bg-gray-900 text-white py-16 px-6 md:px-20 lg:px-40"
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
                    Our Vision
                </h2>
                <p className="text-lg text-gray-300 animate__animated animate__fadeInUp">
                    At CyberSecure, we envision a world where businesses and individuals can thrive in a secure digital environment.
                    Our mission is to empower clients with cutting-edge cybersecurity solutions that ensure resilience against evolving threats.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn">
                    <FaEye className="text-yellow-400 text-6xl mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Clarity</h3>
                    <p className="text-gray-300">Delivering crystal-clear solutions for your security challenges.</p>
                </div>
                <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn animate__delay-1s">
                    <FaLightbulb className="text-yellow-400 text-6xl mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
                    <p className="text-gray-300">Developing innovative tools to counter evolving cyber threats.</p>
                </div>
                <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn animate__delay-2s">
                    <FaRocket className="text-yellow-400 text-6xl mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Growth</h3>
                    <p className="text-gray-300">Empowering businesses to scale securely and confidently.</p>
                </div>
            </div>
        </section>
    );
}
