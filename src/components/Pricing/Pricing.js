import React from 'react'

function Pricing() {
    return (
        <div className='bg-black'>

            <section className="py-24 dark:bg-black dark:text-white"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/20199286/pexels-photo-20199286/free-photo-of-brunette-woman-exercising-yoga.jpeg?auto=compress&cs=tinysrgb&w=800')",
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                    <h1 className="text-3xl font-extrabold leading-tight text-center text-white md:text-4xl">
                        Find the Perfect Plan for Your Fitness Journey
                    </h1>
                    <p className="pt-2 pb-8 text-xl font-medium text-center text-white opacity-80 md:text-2xl">
                        At Fitness Cult, we offer flexible membership plans designed to suit your fitness needs and budget. Whether you’re just starting out or are a fitness enthusiast, we’ve got a plan for you.
                    </p>
                    <button className="px-8 py-3 text-lg font-semibold rounded-full bg-purple-500 text-white shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                        <a href='#scroll'>Learn More</a>
                    </button>
                </div>
            </section>


            {/* <section className="py-6 dark:bg-black dark:text-gray-50">
                <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                    <h1 className="text-3xl font-extrabold leading-tight text-center text-white md:text-4xl">
                        Find the Perfect Plan for Your Fitness Journey
                    </h1>
                    <p className="pt-2 pb-8 text-xl font-medium text-center text-white opacity-80 md:text-2xl">
                        At Fitness Cult, we offer flexible membership plans designed to suit your fitness needs and budget. Whether you’re just starting out or are a fitness enthusiast, we’ve got a plan for you.
                    </p>
                    <button className="px-8 py-3 text-lg font-semibold rounded-full bg-purple-500 text-white shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                        <a href='#scroll'>Learn More</a>
                    </button>
                </div>
            </section> */}

            <section id='scroll' className="py-20 dark:bg-black dark:text-white">
                <div className="container px-4 mx-auto">
                    <div className="max-w-2xl mx-auto mb-16 text-center">
                    </div>
                    <div className="flex flex-wrap items-stretch -mx-4">
                        {/* Basic Plan */}
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-grow flex-col p-6 space-y-6 rounded-lg shadow-lg sm:p-8 dark:bg-black border-2 border-purple-500 hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold text-white">Basic Plan</h4>
                                    <span className="text-3xl font-bold text-white">Rs 999 <span className="text-sm">/mo</span></span>
                                </div>
                                <p className="mt-3 text-white opacity-80">Beginners or casual gym-goers who want access to essential fitness tools.</p>
                                <ul className="flex-1 mb-6 text-white opacity-80">
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Access to all gym equipment during operational hours.</span>
                                    </li>
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Use of cardio machines and free weights.</span>
                                    </li>
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Locker facility included.</span>
                                    </li>
                                </ul>
                                <button className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white transform hover:scale-105 transition duration-300 ease-in-out">
                                    Get Enrolled
                                </button>
                            </div>
                        </div>

                        {/* Popular Plan */}
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-grow flex-col p-6 space-y-6 rounded-lg shadow-lg sm:p-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold text-white">Popular Plan</h4>
                                    <span className="text-3xl font-bold text-white">Rs 1999 <span className="text-sm">/mo</span></span>
                                </div>
                                <p className="leading-relaxed text-white opacity-80">Fitness enthusiasts seeking diverse workout options and additional amenities.</p>
                                <ul className="space-y-2 text-white opacity-80">
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Everything in the Basic Plan.</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Unlimited access to group classes.</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Access to steam and shower facilities.</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Free diet consultation once a month.</span>
                                    </li>
                                </ul>
                                <a href="#" className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-gray-700 text-white transform hover:scale-105 transition duration-300 ease-in-out">
                                    Get Enrolled
                                </a>
                            </div>
                        </div>

                        {/* Elite Plan */}
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-grow flex-col p-6 space-y-6 rounded-lg shadow-lg sm:p-8 dark:bg-black border-2 border-purple-500 hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold text-white">Elite Plan</h4>
                                    <span className="text-3xl font-bold text-white">Rs 2500 <span className="text-sm">/mo</span></span>
                                </div>
                                <p className="leading-relaxed text-white opacity-80">Individuals looking for a highly personalized fitness experience and faster results.</p>
                                <ul className="space-y-2 text-white opacity-80">
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Everything in the Popular Plan.</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Dedicated personal trainer.</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Personalized workout plans.</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-600">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Exclusive VIP access to the gym.</span>
                                    </li>
                                </ul>
                                <button className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white transform hover:scale-105 transition duration-300 ease-in-out">
                                    Get Enrolled
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pricing
