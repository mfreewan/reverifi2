import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 mt-4 w-full">
            <div className="flex space-x-4 text-2xl justify-center py-4">
                <a href="#" className="text-blue-500 hover:text-blue-600">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-500">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
            <div className="py-8 flex justify-center">
                <div className="w-full sm:w-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="flex flex-col items-center sm:items-start mb-4">
                        <h3 className="font-bold text-2xl text-lime-500">reverifi</h3>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="text-gray-900 font-semibold mb-2 text-lime-500">Company</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="underline">FAQs</a></li>
                            <li className="mb-2"><a href="#" className="underline">Privacy Policy</a></li>
                            <li className="mb-2"><a href="#" className="underline">How we work</a></li>
                            <li className="mb-2"><a href="#" className="underline">Closed Deals</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="font-semibold mb-2 text-lime-500">Contact</h3>
                        <ul>
                            <li className="mb-2"><a href="mailto:support@reverifi.com" className="underline">support@reverifi.com</a></li>
                            <li className="mb-2"><a href="mailto:sales@reverifi.com" className="underline">sales@reverifi.com</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex justify-center lg:justify-end">
                        <div>
                            <h3 className="text-lime-500 font-semibold mb-2">Subscribe to our newsletter</h3>
                            <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-0 items-center">
                                <input
                                    type="email"
                                    className="flex-1 sm:w-auto px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-lime-600"
                                    placeholder="Enter email address"
                                />
                                <button className="sm:w-auto px-6 py-2 bg-lime-500 text-white rounded-r-full hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-600">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-800 text-white text-center py-4">
                <p>&copy; 2023 reverifi. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
