import React, { useState } from 'react';
import { FaTimes, FaInfoCircle, FaShieldAlt, FaBug } from 'react-icons/fa'; // Importing more icons

const NodeDetails = ({ node }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleClose = () => setShowDetails(false);
    const handleOpen = () => setShowDetails(true);

    if (!node) {
        return null;
    }

    return (
        <div className="relative">
            {/* Button to open details with wave effect */}
            <button
                onClick={handleOpen}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-lg shadow-lg flex items-center space-x-3 transform hover:scale-105 transition-all duration-300"
            >
                <FaInfoCircle className="text-xl animate-pulse" />
                <span className="font-semibold text-lg">View Node Info</span>
            </button>

            {/* Modal Popup for Node Details */}
            {showDetails && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-80 flex justify-center items-center z-50 transition-all duration-300">
                    <div className="bg-gradient-to-r from-gray-800 to-gray-600 p-8 rounded-lg shadow-2xl w-96 max-w-full transform scale-100 hover:scale-105 transition-all duration-300 ease-in-out animate__animated animate__fadeIn">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                                <FaShieldAlt className="text-yellow-400" />
                                <span>Node Details</span>
                            </h2>
                            <button
                                onClick={handleClose}
                                className="text-white hover:text-red-600 p-2 rounded-full transition-all duration-300"
                            >
                                <FaTimes className="text-2xl" />
                            </button>
                        </div>

                        {/* Display the Node's Details with animation */}
                        <div className="space-y-4 text-white">
                            <p className="flex items-center space-x-2">
                                <FaBug className="text-red-500" />
                                <strong>Node ID:</strong> {node.id || 'N/A'}
                            </p>
                            <p className="flex items-center space-x-2">
                                <FaShieldAlt className="text-green-500" />
                                <strong>Query:</strong> {node.query || 'N/A'}
                            </p>
                            <p className="flex items-center space-x-2">
                                <FaShieldAlt className="text-green-500" />
                                <strong>Response:</strong> {node.response || 'N/A'}
                            </p>
                            <p className="flex items-center space-x-2">
                                <FaShieldAlt className="text-yellow-500" />
                                <strong>Is Active:</strong> {node.is_active ? 'Yes' : 'No'}
                            </p>
                            <p className="flex items-center space-x-2">
                                <FaShieldAlt className="text-blue-500" />
                                <strong>Total Tokens:</strong> {node.total_tokens || 'N/A'}
                            </p>
                        </div>

                        {/* Close Button with animation */}
                        <div className="mt-6">
                            <button
                                onClick={handleClose}
                                className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NodeDetails;
