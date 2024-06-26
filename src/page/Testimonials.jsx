import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialData = [
    {
        description: "Bhushan Rawas has been my insurance advisor, providing exceptional service and attention. He is responsive to my needs and has helped me navigate insurance claims effectively, ensuring my family's coverage is comprehensive.",
        name: "Mr.SANTOSH RAUT",
        videoSrc: "./videos/client1.mp4"
    },
    {
        description: "I have been working with Bhushan Rawas and can confidently say that he is one of the best insurance advisors I have ever worked with. He is knowledgeable, responsive, and always prioritizes my needs. His support during insurance claims has been exceptional, ensuring a smooth process and prompt resolution.",
        name: "Mr.SANTOSH SABLE PAITHAN",
        videoSrc: "./videos/client2.mp4"
    },
    {
        description: "Working with Bhushan Rawas has been a great experience. He is knowledgeable, responsive, and always puts my needs first. His expertise in handling insurance claims has been invaluable, providing me with peace of mind during challenging times.",
        name: "Mr.SUNIL NALBHE",
        videoSrc: "./videos/client3.mp4"
    },
    {
        description: "Bhushan Rawas is an excellent insurance advisor who has consistently demonstrated his expertise and dedication. He is responsive to my needs and ensures that I receive the support and coverage I need during insurance claims.",
        name: "DR. SUNIL GAIKWAD",
        videoSrc: "./videos/client4.mp4"
    }
];

const Testimonials = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    const handleVideoPlayPause = (playing) => {
        if (sliderRef.current) {
            sliderRef.current.slickPause();
            if (!playing) {
                sliderRef.current.slickPlay();
            }
        }
    };

    return (
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex w-full flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter font-serif sm:text-5xl">What Our Clients Say</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Hear from our satisfied clients about their experience working with us.
                        </p>
                    </div>
                </div>
                <div className="py-12 md:px-10">
                    <Slider ref={sliderRef} {...settings}>
                        {testimonialData.map((testimonial, index) => (
                            <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-center">
                                <div className="w-full bg-gray-100 rounded-lg md:flex md:items-center">
                                    <div className="aspect-video flex justify-center items-center overflow-hidden rounded-t-lg md:rounded-lg md:w-1/2 md:flex-shrink-0 mx-auto">
                                        <video
                                            controls
                                            className="md:w-[80%] md:h-[80%] w-full h-full p-2 md:p-0 object-cover rounded-3xl"

                                            onPlay={() => handleVideoPlayPause(true)}
                                            onPause={() => handleVideoPlayPause(false)}
                                            onEnded={() => handleVideoPlayPause(false)}
                                        >
                                            <source src={testimonial.videoSrc} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div className="p-4 md:w-1/2 text-lg">
                                        <p className="text-gray-500">{testimonial.description}</p>
                                        <div className="mt-4 flex items-center">
                                            <div className="font-bold text-2xl font-serif">{testimonial.name}</div>
                                            <div className="text-gray-500 ml-2">Satisfied Client</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
