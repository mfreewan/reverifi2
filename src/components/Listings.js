/** @format */
import React, { useState } from "react";
import products from "../data/listings.json";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "tailwindcss/tailwind.css";
import '../css/Listings.css'
import closedImage from '../images/closed-stamp-1.png';
import { IoLocationOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";



const ProductListing = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - itemsPerPage : 0
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerPage < products.length
                ? prevIndex + itemsPerPage
                : prevIndex
        );
    };

    return (
        <div className='relative container mx-auto px-4'>
            <h2 className='text-2xl font-bold my-4'>Listings</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {products
                    .slice(currentIndex, currentIndex + itemsPerPage)
                    .map((product) => (
                        <div
                            key={product.id}
                            className='border rounded-lg shadow-lg overflow-hidden'>
                            <div className='relative'>
                                <img
                                    src={product.image}
                                    alt={product.location}
                                    className='w-full h-48 object-cover'
                                />
                                {product.status === "closed" && (
                                    <div className='absolute top-0 left-0  p-7'>
                                        <img src={closedImage} alt="Closed"></img>
                                    </div>
                                )}
                                <div className='absolute bottom-0 w-40 flex left-0 bg-black bg-opacity-20 text-white p-1'>
                                    <IoLocationOutline />
                                    {product.location}
                                </div>
                            </div>
                            <div className='p-4'>
                                <h3 className='text-yellow-300 text-xl font-bold'>
                                    {product.price}
                                </h3>
                                <p className='text-gray-600'>
                                    {product.daysOnMarket} days on reverifi
                                </p>
                                <div className='flex justify-start p-2 text-gray-600 mt-2'>
                                    <div>
                                        <span className='pr-2'>{product.beds}</span>
                                        <i className='fas fa-bed'></i>
                                    </div>
                                    <div>
                                        <span className='pr-2'>{product.baths}</span>
                                        <i className='fas fa-bath'></i>
                                    </div>
                                    <div>
                                        <span className='pr-2'>{product.sqft}</span>
                                        <i className='fas fa-ruler-combined'></i>
                                    </div>
                                </div>
                                <div className='flex justify-between mt-3'>
                                <div className='flex p-2 text-gray-600 mt-2'>
                                    <div>
                                        <i className='fas fa-heart'></i>
                                        <span className='pr-3'>{product.reaction}</span>
                                    </div>
                                    <div>
                                        <span className='pr-3'>{product.views} views</span>
                                        <i className='fas fa-comment'></i>
                                    </div>
                                    </div>
                                    <button className='px-5 py-2 bg-yellow-300 text-white rounded-full '>
                                        View Listing
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <button
                onClick={handlePrevious}
                className='absolute left-0 top-1/2 transform -translate-y-1/2 text-white rounded-full h-10 w-10 flex items-center justify-center'>
                <i className='fas fa-chevron-left'></i>
            </button>
            <button
                onClick={handleNext}
                className='absolute right-0 top-1/2 transform -translate-y-1/2 text-white rounded-full h-10 w-10 flex items-center justify-center'>
                <i className='fas fa-chevron-right'></i>
            </button>
        </div>
    );
};

export default ProductListing;
