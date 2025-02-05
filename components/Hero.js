import { FaShieldAlt, FaLaptopCode, FaUsers } from 'react-icons/fa'; // Icons for the hero section

export default function Hero() {
    return (
        <section className="relative w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 py-20 text-white overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="container mx-auto px-6 lg:px-20 text-center relative z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-yellow-400 mb-6">
                    Protect Your Digital World with Advanced Cybersecurity Solutions
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                    Real-time threat monitoring, attack prevention, and actionable insights to safeguard your network.
                </p>

                <div className="flex flex-wrap justify-center space-y-6 md:space-y-0 md:space-x-12 mb-8">
                    {/* Threat Protection */}
                    <div className="flex flex-col items-center transform hover:scale-110 transition duration-300">
                        <FaShieldAlt className="text-5xl md:text-6xl text-yellow-400 mb-4" />
                        <h3 className="text-lg md:text-xl font-semibold">Threat Protection</h3>
                        <p className="text-gray-300 text-sm md:text-base text-center">
                            24/7 monitoring to shield your network from cyber threats.
                        </p>
                    </div>

                    {/* Code Security */}
                    <div className="flex flex-col items-center transform hover:scale-110 transition duration-300">
                        <FaLaptopCode className="text-5xl md:text-6xl text-yellow-400 mb-4" />
                        <h3 className="text-lg md:text-xl font-semibold">Code Security</h3>
                        <p className="text-gray-300 text-sm md:text-base text-center">
                            Secure your applications with state-of-the-art code security tools.
                        </p>
                    </div>

                    {/* Team Collaboration */}
                    <div className="flex flex-col items-center transform hover:scale-110 transition duration-300">
                        <FaUsers className="text-5xl md:text-6xl text-yellow-400 mb-4" />
                        <h3 className="text-lg md:text-xl font-semibold">Team Collaboration</h3>
                        <p className="text-gray-300 text-sm md:text-base text-center">
                            Work together efficiently with our secure platform and tools.
                        </p>
                    </div>
                </div>

                <a
                    href="#services"
                    className="px-8 py-3 bg-yellow-500 text-black text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
                >
                    Explore Our Services
                </a>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute bottom-0 left-0 w-full h-full opacity-20 animate-pulse">
                <svg className="absolute w-full h-full" viewBox="0 0 1440 320">
                    <path
                        fill="currentColor"
                        d="M0,320L48,320C96,320,192,320,288,277.3C384,234,480,160,576,144C672,128,768,160,864,192C960,224,1056,256,1152,213.3C1248,170,1344,64,1392,16L1440,0V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
