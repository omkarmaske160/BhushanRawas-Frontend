import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return <>
        <header className="w-full border-b bg-slate-100 fixed z-10">
            <div className="container px-10 py-6 md:py-8 flex flex-col items-center gap-1.5 text-center md:flex-row md:gap-4 lg:gap-6">
                <div className="space-y-1 font-serif">
                    <h1 className="text-2xl font-bold leading-none sm:text-3xl">Bhushan Rawas</h1>
                    <p className="text-sm text-gray-500 ">Sr.Insurance Advisor</p>
                </div>
                <nav className="flex items-center font-sans justify-center gap-4 md:ml-auto md:order-2 md:gap-8">

                    <ScrollLink
                        className="inline-flex cursor-pointer h-6 items-center rounded-md text-md font-medium transition-colors text-gray-500 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950  "
                        to="about"
                        smooth={true}
                        duration={500}
                    >
                        About
                    </ScrollLink>
                    <ScrollLink
                        className="inline-flex cursor-pointer h-6 items-center rounded-md text-md font-medium transition-colors text-gray-500 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950  "
                        to="services"
                        smooth={true}
                        duration={500}
                    >
                        Services
                    </ScrollLink>

                    <ScrollLink
                        className="inline-flex cursor-pointer h-6 items-center rounded-md text-md font-medium transition-colors text-gray-500 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950  "
                        to="testimonials"
                        smooth={true}
                        duration={500}
                    >
                        Testimonials
                    </ScrollLink>
                    <ScrollLink
                        className="inline-flex cursor-pointer h-6 items-center rounded-md text-md font-medium transition-colors text-gray-500 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950  "
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </ScrollLink>
                </nav>
            </div>
        </header>
    </>
}

export default Navbar