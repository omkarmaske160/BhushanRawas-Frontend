import React from 'react';

const Gallery = () => {
    // Sample image URLs
    const imageUrls = [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300"
    ];

    return <>
        <h2 className="text-4xl font-serif font-bold text-center mb mt-10">Gallery</h2>
        <p className="text-lg text-gray-600 mt-1 text-center mb-8">
            Explore our collection of award-winning photos that capture moments of beauty, emotion, and creativity.
        </p>
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {imageUrls.map((imageUrl, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={imageUrl}
                                alt={`Image ${index + 1}`}
                                className="w-full h-auto rounded-lg"
                            />

                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>;
};

export default Gallery;
