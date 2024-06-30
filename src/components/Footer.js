/** @format */
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700">
            <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-green-500 font-bold text-2xl mb-4">reverifi</h3>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-blue-500">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-blue-600">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" className="text-blue-400">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-gray-900 font-semibold mb-2">Company</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-green-500">FAQs</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-green-500">How we work</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-green-500">Closed Deals</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-gray-900 font-semibold mb-2">Contact</h3>
                    <ul>
                        <li className="mb-2"><a href="mailto:support@reverifi.com" className="hover:text-green-500">support@reverifi.com</a></li>
                        <li className="mb-2"><a href="mailto:sales@reverifi.com" className="hover:text-green-500">sales@reverifi.com</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-gray-900 font-semibold mb-2">Subscribe to our newsletter</h3>
                    <form className="flex space-x-2">
                        <input
                            type="email"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter email address"
                        />
                        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="bg-gray-800 text-gray-400 text-center py-4">
                <p>&copy; 2023 reverifi. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
