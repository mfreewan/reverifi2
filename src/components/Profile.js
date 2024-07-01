import React from 'react';
import userData from '../data/user.json';
import '../css/Profile.css';
import Contact from './Contact';

const yellow = "text-yellow-300 font-bold "
const ProfileCard = () => {
    return (
        <div className="pt-16 mb-5">
            <div className="max-w-5xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md border border-gray-200">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-2/6 flex flex-col items-center mb-4 md:mb-0">
                        <img
                            src={userData.image}
                            alt="Profile"
                            className="rounded-lg"
                        />
                        <div className="mt-5 flex  items-center">
                            <button className="px-4 py-2 bg-yellow-300 text-white w-40 rounded-full " onClick={Contact}>Contact</button>
                            <div className="ml-4 flex space-x-4">
                                <a href="#" className={yellow}>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M23.994 12.001C23.994 5.372 18.627 0 12 0S.006 5.372.006 12.001a11.99 11.99 0 007.547 11.17c.553.097.756-.239.756-.534 0-.262-.01-.957-.014-1.879-3.071.671-3.715-1.48-3.715-1.48-.504-1.291-1.231-1.636-1.231-1.636-1.008-.686.076-.672.076-.672 1.113.08 1.698 1.147 1.698 1.147.992 1.7 2.602 1.209 3.236.925.101-.718.389-1.21.707-1.49-2.451-.278-5.029-1.225-5.029-5.454 0-1.204.428-2.189 1.132-2.959-.114-.279-.49-1.398.108-2.914 0 0 .923-.293 3.025 1.128a10.508 10.508 0 012.754-.369c.934.004 1.877.126 2.754.369 2.101-1.421 3.023-1.128 3.023-1.128.599 1.516.222 2.635.109 2.914.705.77 1.131 1.755 1.131 2.959 0 4.241-2.583 5.172-5.041 5.443.4.34.76 1.017.76 2.051 0 1.481-.014 2.675-.014 3.038 0 .297.201.634.761.527A12 12 0 0023.994 12z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" className={yellow}>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M24 4.557a9.832 9.832 0 01-2.828.775 4.93 4.93 0 002.165-2.724 9.872 9.872 0 01-3.127 1.195A4.916 4.916 0 0016.775 3c-2.722 0-4.928 2.206-4.928 4.928 0 .386.044.762.127 1.124C7.728 8.778 4.1 6.815 1.671 3.149a4.921 4.921 0 00-.666 2.477c0 1.71.87 3.216 2.188 4.101A4.92 4.92 0 01.964 9.68v.061c0 2.385 1.693 4.374 3.946 4.828a4.93 4.93 0 01-2.222.084 4.927 4.927 0 004.604 3.417 9.875 9.875 0 01-6.11 2.105c-.397 0-.79-.023-1.175-.068a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.504 14.01-14.01 0-.214-.005-.428-.014-.64A10.012 10.012 0 0024 4.557z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" className={yellow}>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M20.447 20.452H3.553a.91.91 0 01-.907-.912V3.554c0-.504.404-.911.907-.911h16.893c.503 0 .907.407.907.911v15.986c0 .505-.404.912-.907.912zM12 17.907a5.913 5.913 0 100-11.826 5.913 5.913 0 000 11.826zm0-9.712a3.8 3.8 0 110 7.602 3.8 3.8 0 010-7.602zm7.52-1.548a1.337 1.337 0 110-2.674 1.337 1.337 0 010 2.674z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" className={yellow}>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22.225 0H1.775C.79 0 0 .79 0 1.758v20.484C0 23.207.8 24 1.775 24h20.451c.975 0 1.774-.793 1.774-1.758V1.758C24 .79 23.2 0 22.225 0zM7.264 20.452H3.649V9.025h3.615v11.427zm-1.806-13.1a2.104 2.104 0 110-4.209 2.104 2.104 0 010 4.209zm15.47 13.1h-3.615v-5.63c0-1.342-.027-3.07-1.874-3.07-1.877 0-2.165 1.465-2.165 2.976v5.724h-3.615V9.025h3.469v1.56h.05c.482-.915 1.655-1.877 3.406-1.877 3.644 0 4.317 2.398 4.317 5.516v6.228z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 pl-4">
                        <div className="flex">
                            <div>
                                <h2 className="text-2xl font-bold">{userData.name}</h2>
                                <p className="text-sm text-gray-500">{userData.role}</p>
                                <p className="text-xs text-gray-400">NMLS {userData.nmls} </p>
                            </div>
                            <div>
                                    
                                    <i className='h-6 pl-3 text-2xl text-yellow-300 fa-solid fa-magnifying-glass'></i>
                            </div>
                        </div>
                        <div className="mt-16">
                            <p className={yellow}>About</p>
                            <p className="text-sm text-gray-600">{userData.about}</p>
                        </div>
                        <div className="mt-4 flex flex-wrap">
                            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                <p className={yellow}>Language</p>
                                <p className="text-gray-600">{userData.language}</p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <p className={yellow}>Service Area</p>
                                <p className="text-gray-600">{userData.serviceArea}</p>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-wrap">
                            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                <p className={yellow}>Phone</p>
                                <p className="text-gray-600">{userData.phone}</p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <p className={yellow}>Email</p>
                                <p className="text-gray-600">{userData.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
