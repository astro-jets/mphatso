'use client'
import {React, useState } from 'react';
const Contacts = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
        
        // Show the pop-up message after form submission
        setShowPopup(true);

        // Reset form fields or perform any other necessary actions
        // For example, you can reset the form by accessing the form elements:
        // event.target.reset();
    };
    return ( 
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" id='#contacts'>
            <div className="max-w-xl mx-auto">
                <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                    Contact us
                </h1>
                <p className="mt-1 text-gray-600 dark:text-gray-900">
                    Lets get in touch and talk about how I can help you.
                </p>
                </div>
            </div>

            <div className="mt-12 max-w-lg mx-auto">
                {/* Card */}
                <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                    <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Fill in the form
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 lg:gap-6">
                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <div>
                            <label for="hs-firstname-contacts-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">First Name</label>
                            <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-goldenrod focus:ring-goldenrod disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:focus:ring-gray-600"/>
                            </div>

                            <div>
                            <label for="hs-lastname-contacts-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Last Name</label>
                            <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" 
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-goldenrod focus:ring-goldenrod 
                            disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:focus:ring-gray-600"/>
                            </div>
                        </div>
                        {/* End Grid */}

                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <div>
                            <label for="hs-email-contacts-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Email</label>
                            <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autocomplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-goldenrod focus:ring-goldenrod disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:focus:ring-gray-600"/>
                            </div>

                            <div>
                            <label for="hs-phone-number-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Phone Number</label>
                            <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-goldenrod focus:ring-goldenrod disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:focus:ring-gray-600"/>
                            </div>
                        </div>
                        {/* End Grid */}

                        <div>
                            <label for="hs-about-contacts-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Details</label>
                            <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-goldenrod focus:ring-goldenrod disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:focus:ring-gray-600"></textarea>
                        </div>
                        </div>
                        {/* End Grid */}

                        <div className="mt-6 grid">
                        <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-goldenrod text-white hover:bg-goldenrod disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Send inquiry</button>
                        </div>

                        <div className="mt-3 text-center">
                        <p className="text-sm text-gray-500">
                            I'll get back to you in 1-2 business days.
                        </p>
                        </div>
                    </form>
                    
                    {/* Pop-up message */}
                    {showPopup && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white rounded-lg p-8 max-w-md">
                                <p className="text-gray-800">
                                    Thank you for your inquiry! We'll get back to you in 1-2 business days.
                                </p>
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="mt-4 py-2 px-4 bg-goldenrod text-white rounded-lg focus:outline-none hover:bg-yellow-600"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                {/* End Card */}
            </div>
        </div>
    );
}
 
export default Contacts;
