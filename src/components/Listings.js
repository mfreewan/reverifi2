/** @format */
import React from "react";
import products from "../data/lisitings.json";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "tailwindcss/tailwind.css";


const ProductListing = () => {
    return (
        <div className='container mx-auto px-4'>
            <h2 className='text-2xl font-bold my-4'>Listings</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {products.map((product) => (
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
                                <div className='absolute top-0 left-0 bg-red-500 text-white p-1'>
                                    CLOSED
                                </div>
                            )}
                        </div>
                        <div className='p-4'>
                            <h3 className='text-xl font-bold'>{product.price}</h3>
                            <p className='text-gray-600'>
                                {product.daysOnMarket} days on market
                            </p>
                            <p className='text-gray-600'>{product.location}</p>
                            <div className='flex justify-between text-gray-600 mt-2'>
                                <div>
                                    <i className='fas fa-bed'></i> {product.beds} Beds
                                </div>
                                <div>
                                    <i className='fas fa-bath'></i> {product.baths} Baths
                                </div>
                                <div>
                                    <i className='fas fa-ruler-combined'></i> {product.sqft} Sqft
                                </div>
                            </div>
                            <button className='mt-3 px-4 py-2 bg-green-500 text-white rounded'>
                                View Listing
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListing;
