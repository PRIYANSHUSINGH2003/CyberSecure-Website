import React, { useEffect, useState } from 'react';
import Cytoscape from 'cytoscape';
import { FaInfoCircle, FaTimes } from 'react-icons/fa'; // Import close icon
import NodeDetails from './NodeDetails';
import 'animate.css';

const Graph = ({ data }) => {
    const [selectedNode, setSelectedNode] = useState(null);

    useEffect(() => {
        const cy = Cytoscape({
            container: document.getElementById('cy'),
            elements: data.nodes || [],
            style: [
                {
                    selector: 'node',
                    style: {
                        'background-color': '#4CAF50',
                        'label': 'data(name)',
                        'width': 50,
                        'height': 50,
                        'font-size': 12,
                        'color': '#fff',
                        'text-halign': 'center',
                        'text-valign': 'center',
                        'border-width': 3,
                        'border-color': '#fff',
                        'box-shadow': '0 6px 15px rgba(0, 0, 0, 0.3)',
                        'transition-property': 'background-color, width, height, transform',
                        'transition-duration': '0.3s',
                    },
                },
                {
                    selector: 'edge',
                    style: {
                        'width': 2,
                        'line-color': '#999',
                        'target-arrow-color': '#999',
                        'target-arrow-shape': 'triangle',
                        'curve-style': 'bezier',
                    },
                },
            ],
            layout: {
                name: 'concentric',
                padding: 20,
            },
            userZoomingEnabled: true,
            userPanningEnabled: true,
            boxSelectionEnabled: false, // Disable box selection (optional)
            autolock: true, // Prevent the nodes from being moved accidentally
        });

        cy.on('tap', 'node', (event) => {
            const node = event.target;
            const nodeData = node.data();
            setSelectedNode(nodeData);
        });

        return () => {
            cy.destroy();
        };
    }, [data]);

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-8 space-y-8">
            <h2 className="text-4xl font-bold text-white animate__animated animate__fadeIn">
                Cybersecurity Attack Graph
            </h2>

            <div
                id="cy"
                className="w-11/12 h-96 bg-gray-800 rounded-lg shadow-lg transition-transform duration-500"
            ></div>

            {selectedNode && (
                <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl space-y-6 animate__animated animate__fadeInUp relative">
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold text-gray-800">
                            Node Details
                        </h3>
                        <div className="flex space-x-4">
                            <FaInfoCircle
                                className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800 transition duration-300"
                                onClick={() => alert('View more details about this node.')}
                            />
                            <FaTimes
                                className="text-red-600 text-2xl cursor-pointer hover:text-red-800 transition duration-300"
                                onClick={() => setSelectedNode(null)}
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-gray-900">
                            <strong className="text-gray-900">Node ID:</strong> {selectedNode.id || 'N/A'}
                        </p>
                        <p className="text-gray-900">
                            <strong className="text-gray-900">Query:</strong> {selectedNode.query || 'N/A'}
                        </p>
                        <p className="text-gray-900">
                            <strong className="text-gray-900">Response:</strong> {selectedNode.response || 'N/A'}
                        </p>
                        <p className="text-gray-900">
                            <strong className="text-gray-900">Is Active:</strong> {selectedNode.is_active ? 'Yes' : 'No'}
                        </p>
                        <p className="text-gray-900">
                            <strong className="text-gray-900">Total Tokens:</strong> {selectedNode.total_tokens || 'N/A'}
                        </p>
                    </div>
                </div>
            )}

            <NodeDetails node={selectedNode} />
        </div>
    );
};

export default Graph;
