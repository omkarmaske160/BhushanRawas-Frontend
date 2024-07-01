import React from 'react';
import { FaRegLifeRing, FaHeartbeat, FaShieldAlt, FaSolarPanel } from 'react-icons/fa'; // Import FaSolarPanel for solar installation icon

const Services = () => {
    return (
        <section id='services' className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold font-serif text-gray-900 sm:text-4xl">Our Services</h2>
                    <p className="mt-2 text-lg text-gray-600">Discover the range of services we provide.</p>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-6">
                        {/* Life Insurance */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="px-6 py-8">
                                <h3 className="text-lg font-medium font-serif text-gray-900 flex items-center justify-center">
                                    <FaRegLifeRing className="h-6 w-6 mr-2" /> Life Insurance
                                </h3>
                                <p className='mt-4 ml-2 font-semibold'>Company:</p>
                                <ul className="ml-4 leading-6 text-gray-600 ">
                                    <li className='flex gap-2 items-center'><img src="./company_logo/lic.png" className='w-14' alt="" /> Life Insurance Corporation of India (LIC)</li>

                                </ul>
                                <p className='mt-4 ml-2 font-semibold'>Policy Services:</p>
                                <ul className="ml-4 leading-6 text-gray-600">
                                    <li>LIC Loan</li>
                                    <li>Maturity Claim</li>
                                    <li>Policy Revival</li>
                                    <li>Missing Lic Bond's</li>
                                    <li>Money Back</li>
                                    <li>etc....</li>
                                </ul>
                            </div>
                        </div>

                        {/* Health Insurance */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="px-6 py-8">
                                <h3 className="text-lg font-medium font-serif text-gray-900 flex items-center justify-center">
                                    <FaHeartbeat className="h-6 w-6 mr-2" /> Health Insurance
                                </h3>
                                <p className='mt-4 ml-2 font-semibold'>Company:</p>

                                <ul className="ml-4 leading-6 text-gray-600">
                                    <li className='flex gap-2 items-center'><img src="./company_logo/starhealth.png" className='w-14' alt="" />Star Health Insurance co. ltd</li>
                                    <li className='flex gap-2 items-center'><img src="./company_logo/icci.png" className='w-14' alt="" />ICICI Lombard</li>
                                    <li className='flex gap-2 items-center'><img src="./company_logo/niva.png" className='w-14' alt="" />Neva Bupa Health Insurance</li>
                                    <li className='flex gap-2 items-center'><img src="./company_logo/HDFC.png" className='w-14' alt="" />HDFC ARGO</li>
                                </ul>
                            </div>
                        </div>

                        {/* General Insurance */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="px-6 py-8">
                                <h3 className="text-lg font-medium font-serif text-gray-900 flex items-center justify-center">
                                    <FaShieldAlt className="h-6 w-6 mr-2" /> General Insurance
                                </h3>

                                <p className='mt-4 ml-2 font-semibold'>Company:</p>

                                <ul className="ml-4 leading-6 text-gray-600">
                                    <li className='flex gap-2 items-center'><img src="./company_logo/iffco.png" className='w-14' alt="" />IFFCO-Tokio General Insurance Company Limited</li>
                                    <li className='flex gap-2 items-center'><img src="./company_logo/newIndiaA.png" className='w-14' alt="" />New India Assurance</li>

                                </ul>
                                <p className='mt-4 ml-2 font-semibold'>Policy:</p>

                                <ul className="ml-4 leading-6 text-gray-600">

                                    <li>Fire Insurance</li>
                                    <li>Burglary Policy Insurance</li>
                                    <li>Car Insurance</li>
                                    <li>Shop Insurance</li>
                                </ul>
                            </div>
                        </div>


                        {/* Solar Insurance */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="px-6 py-8">
                                <h3 className="text-lg font-medium font-serif text-gray-900 flex items-center justify-center">
                                    <FaSolarPanel className="h-6 w-6 mr-2" /> Solar Installation
                                </h3>
                                <p className='mt-4 ml-2 font-semibold'>Company:</p>

                                <ul className="ml-4 leading-6 text-gray-600">
                                    <li className='flex gap-2 items-center'><img src="./company_logo/adani.png" className='w-14' alt="" />Adani Solar </li>
                                    <li className='flex gap-2 items-center'><img src="./company_logo/tata.png" className='w-14' alt="" />Tata Power Solar</li>
                                    <li className='flex gap-2 items-center'>Other....</li>

                                </ul>
                                <p className='mt-4 ml-2 font-semibold'>Services:</p>


                                <ul className="ml-4 leading-6 text-gray-600">

                                    <li>All type  of on Grid solar</li>
                                    <li>Home & Commercial Installation</li>
                                </ul>

                            </div>
                        </div>


                    </div>
                </div >
            </div >
        </ section>
    );
};

export default Services;
