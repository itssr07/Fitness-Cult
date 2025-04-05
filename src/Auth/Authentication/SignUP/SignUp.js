import React from 'react';

function SignUp() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-lg p-8 dark:bg-black dark:border-white">
                <div className="text-left">
                    <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white text-center mb-6">Create an Account</h1>

                    <form>
                        <div className="mt-7 grid gap-y-6">
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">Email Address</label>
                                <input type="email" id="email" name="email" className="w-full py-3 px-4 border-gray-300 rounded-lg text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition duration-300 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white placeholder:text-gray-400" placeholder="Enter your email" required />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-white">Phone Number</label>
                                <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" className="w-full py-3 px-4 border-gray-300 rounded-lg text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition duration-300 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white placeholder:text-gray-400" placeholder="Enter your phone number" required />
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-white">Password</label>
                                <input type="password" id="password" name="password" className="w-full py-3 px-4 border-gray-300 rounded-lg text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition duration-300 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white placeholder:text-gray-400" placeholder="Enter your password" required />
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-white">Confirm Password</label>
                                <input type="password" id="confirm-password" name="confirm-password" className="w-full py-3 px-4 border-gray-300 rounded-lg text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition duration-300 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white placeholder:text-gray-400" placeholder="Confirm your password" required />
                            </div>

                            {/* Terms Checkbox */}
                            <div className="flex items-center space-x-2">
                                <input id="terms" name="terms" type="checkbox" className="w-4 h-4 border-gray-300 rounded text-purple-600 focus:ring-purple-500 dark:bg-neutral-800 dark:border-neutral-700" required />
                                <label htmlFor="terms" className="text-sm text-gray-600 dark:text-white">I accept the
                                    <a href="#" className="text-purple-600 hover:underline font-medium dark:text-blue-400"> Privacy Policy</a>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="w-full py-3 px-4 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
