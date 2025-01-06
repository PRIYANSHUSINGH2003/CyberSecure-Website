import { useEffect, useState } from 'react';
import Graph from '../components/Graph';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Hero from '../components/Hero';
import Service from '../components/Service';
import OurVision from '../components/OurVision';
import OurCoreServices from '../components/OurCoreServices';
import WhatOurClientsSay from '../components/WhatOurClientsSay';
import GetAProposal from '../components/GetAProposal';
import Footer from '../components/Footer';




export default function Home() {
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    const socketUrl = process.env.NEXT_PUBLIC_WS_URL || 'ws://cybersecurepro.onrender.com:8080'; // Dynamic WebSocket URL

    const socket = new WebSocket(socketUrl);

    socket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    socket.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setGraphData(newData);
    };

    socket.onerror = (error) => {
      console.log('WebSocket error:', error);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-800 via-purple-800 to-blue-800 text-white flex flex-col">
      {/* Header Section */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Main Content */}
      <main className="flex-1 p-8 space-y-8">
        <div className="bg-gray-900 p-6 rounded-lg shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4">Real-time Graph Visualization</h2>
          <p className="text-lg text-gray-300 mb-4">Monitoring the latest attack patterns in the network.</p>

          {graphData ? (
            <Graph data={graphData} />
          ) : (
            <div className="flex justify-center items-center space-x-2">
              <span className="text-white">Loading graph...</span>
              <div className="w-4 h-4 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </main>
      {/* AboutUs Section */}
      <AboutUs />
      {/* Services Section */}
      <Service />
      {/* OurVision Section */}
      <OurVision />
      {/* OurCoreServices Section */}
      <OurCoreServices />
      {/* WhatOurClientsSay Section */}
      <WhatOurClientsSay />
      {/* GetAProposal Section*/}
      <GetAProposal />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
