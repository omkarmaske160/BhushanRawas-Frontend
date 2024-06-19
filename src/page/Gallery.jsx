import React, { useState, useEffect } from 'react';

const Gallery = () => {
    const imageUrls = [
        "./g1.jpg",
        "./g2.jpg",
        "./g4.jpg",
        "./g5.jpg",
        "./g7.jpg",
        "./g6.jpg",
        "./g3.jpg",
        "./g8.jpg",
    ];

    const [numImagesToShow, setNumImagesToShow] = useState(6);

    const updateNumImagesToShow = () => {
        if (window.innerWidth >= 768) {
            setNumImagesToShow(8); // MD and larger screens
        } else {
            setNumImagesToShow(6); // Smaller screens
        }
    };

    useEffect(() => {
        updateNumImagesToShow();
        window.addEventListener('resize', updateNumImagesToShow);
        return () => window.removeEventListener('resize', updateNumImagesToShow);
    }, []);

    return (
        <>
            <h2 className="text-4xl font-serif font-bold text-center mt-10 mb-4">Gallery</h2>
            <p className="text-lg text-gray-600 text-center mb-8">
                Explore our collection of award-winning photos that capture moments of beauty, emotion, and creativity.
            </p>
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4 md:px-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {imageUrls.slice(0, numImagesToShow).map((imageUrl, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
                                style={{ width: '100%', height: '300px' }} // Fixed size example
                            >
                                <img
                                    src={imageUrl}
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
