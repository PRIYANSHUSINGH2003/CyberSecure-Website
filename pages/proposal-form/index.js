import { FaPaperPlane, FaUserAlt, FaEnvelope, FaPhone, FaClipboardList } from "react-icons/fa";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ProposalForm() {
    return (
        <><Header />
        <section
            id="proposal-form"
            className="bg-gray-900 text-white py-16 px-6 md:px-20 lg:px-40"
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
                    Get A Proposal
                </h2>
                <p className="text-lg text-gray-300 animate__animated animate__fadeInUp">
                    Need a reliable website partner for your business? Share your details below, and we’ll craft a customized solution tailored to your needs.
                </p>
            </div>
            <form
                className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6 max-w-3xl mx-auto animate__animated animate__zoomIn"
                action="#"
            >
                <div className="flex items-center bg-gray-700 rounded-md p-3">
                    <FaUserAlt className="text-yellow-400 text-2xl mr-3" />
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
                    />
                </div>
                <div className="flex items-center bg-gray-700 rounded-md p-3">
                    <FaEnvelope className="text-yellow-400 text-2xl mr-3" />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
                    />
                </div>
                <div className="flex items-center bg-gray-700 rounded-md p-3">
                    <FaPhone className="text-yellow-400 text-2xl mr-3" />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
                    />
                </div>
                <div className="flex items-center bg-gray-700 rounded-md p-3">
                    <FaClipboardList className="text-yellow-400 text-2xl mr-3" />
                    <textarea
                        placeholder="Your Requirements"
                        className="w-full bg-transparent text-white placeholder-gray-400 outline-none resize-none h-24"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-yellow-400 text-gray-900 py-3 rounded-md font-semibold text-lg shadow-lg hover:bg-yellow-500 hover:shadow-2xl transition duration-300 flex items-center justify-center"
                >
                    <FaPaperPlane className="text-gray-900 text-xl mr-3" />
                    Send Proposal
                </button>
            </form>
        </section>
        <Footer />
        </>
    );
}
