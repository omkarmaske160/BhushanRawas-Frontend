import React from 'react';

const Contact = () => {
    return <>
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center -mt-5 md:-mt-20 font-serif">Contact Us</h2>
        <section id="contact" className="flex flex-col bg-gray-00  md:flex-row justify-center py-10">
            {/* Contact Image or Icon Section */}
            <div className="w-[50%] hidden   md:flex items-center justify-end">
                <img src='https://img.freepik.com/free-vector/flat-insurance-services-with-policy-form_88138-838.jpg?t=st=1718622354~exp=1718625954~hmac=b78a3595ab3d91bb89d8c971742f80bf9f06c2d53053ef0f508f99fe2dfdc4f5&w=996' alt="Contact" className="h-[90%] w-[90%]" />
            </div>

            {/* Contact Form Section */}
            <div className="md:w-1/2 flex items-center justify-center md:justify-start">
                <div className="md:w-[80%] w-full m-4 ">

                    {/* Contact Form */}
                    <form className=" shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                        {/* Title */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="title">
                                Title
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="title"
                                type="text"
                                placeholder="Title"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-gray-700 tex-lg font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                                required
                            />
                        </div>

                        {/* Mobile Number */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="mobile">
                                Mobile Number
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="mobile"
                                type="tel"
                                placeholder="Mobile Number"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description"
                                placeholder="Description"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-slate-300 mt-7 font-serif hover:text-slate-200 hover:bg-slate-500 transition-all duration-300 font-bold text-black px-8 py-3 rounded-full"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>;
};

export default Contact;
