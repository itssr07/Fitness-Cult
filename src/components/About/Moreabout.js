import React from 'react'

function Moreabout() {
    return (
        <div>

            <section className="dark:bg-black dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                        <h2 class="text-4xl font-bold md:text-3xl md:leading-relaxed text-gray-800 dark:text-white">
                            Why Choose Us?
                        </h2>
                    </div>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-black">
                            
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl text-white text-center font-semibold  group-focus:underline">1. Cutting-Edge Facilities</h3>

                                <p className='text-white text-center'>Our gym is equipped with the latest fitness machines, including advanced cardio equipment, free weights, and strength training systems.</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-black">
                            
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl text-white text-center font-semibold  group-focus:underline">2. Certified Trainers</h3>

                                <p className='text-white text-center'>Our team of professional trainers is certified, experienced, and passionate about helping you reach your fitness goals safely and efficiently.</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-black">
                           
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl text-white text-center font-semibold  group-focus:underline">3. Diverse Programs</h3>

                                <p className='text-white text-center'>From high-energy group classes like Zumba and HIIT to serene Yoga and Pilates sessions, we offer a variety of programs to keep your workouts exciting and effective.</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-black hidden sm:block">
                            
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl text-white text-center font-semibold  group-focus:underline">4. Personalized Support</h3>

                                <p className='text-white text-center'>Whether you’re a beginner or a fitness enthusiast, we provide personalized training plans, diet consultations, and body composition analyses to meet your unique needs.</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-black hidden sm:block">
                            
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl text-white text-center font-semibold  group-focus:underline">5. Community Spirit</h3>

                                <p className='text-white text-center'>We foster a positive and encouraging environment where members motivate each other to stay consistent and achieve their fitness milestones.</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-black hidden sm:block">
                           
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl text-white text-center font-semibold  group-focus:underline">6. Safe Environment</h3>

                                <p className='text-white text-center'>Your safety and comfort are our priority. We maintain high standards of cleanliness and hygiene to ensure a pleasant workout experience.</p>
                            </div>
                        </a>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Moreabout
