import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const About = () => {
    const userDetails = [
        { key: 'Name', value: 'Bhushan Rawas' },
        { key: 'Experience', value: '+7 year' },
        { key: 'Phone', value: '+91 9767552485, +91 9404982960' },
        { key: 'Email', value: 'bhushanraw@gmail.com' },
        { key: 'Address', value: 'Near Ganesh Ghat Paithan 431107' },
    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const imageVariants = {
        hidden: { opacity: 0, x: -200 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: 'easeOut', delay: 0.7 },
        },
    };

    const descriptionVariants = {
        hidden: { opacity: 0, x: 200 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: 'easeOut', delay: 1 },
        },
    };
    const openWhatsApp = () => {
        window.open('https://wa.me/919404982960', '_blank');
    };

    return (
        <div id="about" ref={ref} className="text-white p-4 w-full md:mb-16">
            <div className="mt-[8rem] md:mt-[10rem] max-w-screen-lg mx-auto">
                <div className="flex flex-col md:flex-row items-center md:items-start md:gap-10">
                    <motion.div
                        className="flex-shrink-0 mb-6 md:mb-0 md:mr-6 md:w-1/2"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={imageVariants}
                    >
                        <img
                            src="./profile.jpg"
                            alt="Omkar Maske"
                            className="w-full rounded-lg"
                        />
                    </motion.div>
                    <motion.div
                        className="w-full md:w-1/2"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={descriptionVariants}
                    >
                        <h1 className="font-bold text-4xl font-serif text-center md:text-left text-black">About Me</h1>
                        <p className="text-gray-600 mb-4 mt-4 md:pt-5 md:mt-0 text-center md:text-left">
                            I am <strong className='text-gray-700 font-serif'>Bhushan Rawas</strong>, an insurance advisor with over 7 years of experience. I specialize in life and health insurance, along with other types of coverage. My goal is to provide the best insurance solutions tailored to your needs.
                        </p>
                        <div className="space-y-4 w-full mt-10 text-left">
                            {userDetails.map((detail, index) => (
                                <div key={index} className="w-full flex gap-5">
                                    <span className="font-bold w-[35%] ml-5 md:ml-0 text-left font-serif text-slate-950">{detail.key}:</span>
                                    <span className="text-black w-[50%]">{detail.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className='flex '>
                            <div className="w-full flex justify-center mt-5 md:justify-start items-center">
                                <ScrollLink
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    className="bg-slate-300 mt-7  font-serif hover:text-slate-200 hover:bg-slate-500 transition-all duration-300 font-bold text-black px-5 py-6 md:py-3 rounded-full"
                                >
                                    CONTACT ME
                                </ScrollLink>
                            </div>
                            <div className="w-full flex justify-center mt-5 md:justify-start items-center">
                                <button
                                    onClick={openWhatsApp}
                                    className="flex items-center  bg-green-500 mt-7 font-serif hover:bg-green-700 transition-all duration-300 font-bold text-white px-5 py-3 rounded-full"
                                >
                                    <FaWhatsapp className="mr-2 text-xl" /> WhatsApp Me
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;