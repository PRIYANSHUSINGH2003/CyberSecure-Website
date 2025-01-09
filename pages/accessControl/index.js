import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AccessControl from './accessControl';

const AccessControlPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-grow p-8">
                <AccessControl />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AccessControlPage;
