import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        description: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://bhushanrawas-backend.onrender.com/api/v1/admin/add-feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Clear the form and state
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    description: '',
                });
                toast("We Will Reach You Soon");

            } else {
                // Handle server errors
                toast("Something Went Wrong");

            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Form submission failed');
        }
    };



    return (
        <>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center -mt-5 md:-mt-20 font-serif">Contact Us</h2>
            <section id="contact" className="flex flex-col bg-gray-00 md:flex-row justify-center py-10">
                <div className="w-[50%] hidden md:flex items-center justify-end">
                    <img src='https://img.freepik.com/free-vector/flat-insurance-services-with-policy-form_88138-838.jpg?t=st=1718622354~exp=1718625954~hmac=b78a3595ab3d91bb89d8c971742f80bf9f06c2d53053ef0f508f99fe2dfdc4f5&w=996' alt="Contact" className="h-[90%] w-[90%]" />
                </div>
                <div className="md:w-1/2 flex items-center justify-center md:justify-start">
                    <div className="md:w-[80%] w-full m-4">
                        <form className="shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="mobile">
                                    Mobile Number
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="mobile"
                                    type="number"
                                    placeholder="Mobile Number"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="description">
                                    Description
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="description"
                                    placeholder="Description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
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
        </>
    );
};

export default Contact;
