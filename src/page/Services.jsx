import React from 'react'

const Services = () => {
    function CarIcon(props) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
            </svg>
        )
    }

    function HashIcon(props) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="4" x2="20" y1="9" y2="9" />
                <line x1="4" x2="20" y1="15" y2="15" />
                <line x1="10" x2="8" y1="3" y2="21" />
                <line x1="16" x2="14" y1="3" y2="21" />
            </svg>
        )
    }

    function HomeIcon(props) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        )
    }

    function LifeBuoyIcon(props) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="m4.93 4.93 4.24 4.24" />
                <path d="m14.83 9.17 4.24-4.24" />
                <path d="m14.83 14.83 4.24 4.24" />
                <path d="m9.17 14.83-4.24 4.24" />
                <circle cx="12" cy="12" r="4" />
            </svg>
        )
    }

    return <>
        <section id='services' className="w-full py-12">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2 lg:text-left">

                <div className="space-y-4 md:ml-[25%]">
                    <h2 className="text-4xl text-center font-bold tracking-tighter font-serif sm:text-4xl md:text-5xl">Our Services</h2>
                    <div className="flex md:pt-16 pt-8 flex-col gap-6 md:gap-6 lg:gap-8">
                        <div className="flex items-center space-x-4">
                            <LifeBuoyIcon className="w-8 h-8 flex-shrink-0 text-gray-400" />
                            <div className="space-y-1">
                                <h3 className="text-xl font-medium tracking-tighter">Life Insurance</h3>
                                <p className="text-sm leading-none text-gray-500">
                                    Protect your family's future with the right life insurance coverage.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <HashIcon className="w-8 h-8 flex-shrink-0 text-gray-400" />
                            <div className="space-y-1">
                                <h3 className="text-xl font-medium tracking-tighter">Health Insurance</h3>
                                <p className="text-sm leading-none text-gray-500">
                                    Get access to quality healthcare without worrying about medical expenses.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <CarIcon className="w-8 h-8 flex-shrink-0 text-gray-400" />
                            <div className="space-y-1">
                                <h3 className="text-xl font-medium tracking-tighter">Auto Insurance</h3>
                                <p className="text-sm leading-none text-gray-500">
                                    Stay protected on the road with the right auto insurance policy.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <HomeIcon className="w-8 h-8 flex-shrink-0 text-gray-400" />
                            <div className="space-y-1">
                                <h3 className="text-xl font-medium tracking-tighter">Home Insurance</h3>
                                <p className="text-sm leading-none text-gray-500">
                                    Safeguard your home against unexpected events with the right insurance coverage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 md:mt-0 flex justify-start space-y-4">
                    <img
                        alt="Image"
                        className="rounded-xl  object-contain md:aspect-[4/3] overflow-hidden"
                        height="400"
                        src="https://img.freepik.com/free-vector/insurance-simple-element_24908-54319.jpg?t=st=1710421514~exp=1710425114~hmac=1d34e1c188edb20a8fcd68594e97b49e50308c11953faede8bb53d467e98fbe5&w=740"
                        width="600"
                    />
                </div>
            </div>
        </section>
    </>
}

export default Services