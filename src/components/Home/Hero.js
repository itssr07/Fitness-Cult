import React, { useState } from "react";
import Knowmore from "./Knowmore";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import { useNavigate } from "react-router-dom";
function Hero() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    return (

        <div class="dark:bg-black">
            <div class=" mx-auto py-9 px-8 md:py-12 lg:py-24">
                <div class="flex flex-col lg:flex-row justify-center items-strech mx-4">
                    <div class="lg:w-4/12 flex justify-center items-center">
                        <div>
                            <h1 className="leading-relaxed text-3xl md:text-5xl xl:text-6xl font-semibold text-gray-900 dark:text-white">
                                Welcome To{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                                    Fitness Cult
                                </span>
                            </h1>
                            <p class="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600 text-xl mt-4">Unleash your potential with state-of-the-art facilities, expert trainers, and a supportive community. Start your fitness journey today!</p>
                        </div>
                    </div>


                    <div class="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
                        <div class="relative w-full h-full">
                            <img src="https://img.freepik.com/free-photo/gym-with-indoor-cycling-equipment_23-2149270210.jpg?semt=ais_hybrid" alt="A lounge sofa" role="img" class="w-full h-full relative hidden lg:block" />
                            <img src="https://img.freepik.com/free-photo/gym-with-indoor-cycling-equipment_23-2149270210.jpg?semt=ais_hybrid" alt="A lounge sofa" role="img" class="w-full h-full lg:hidden" />
                            <div class="hidden lg:block absolute bottom-0 right-0 bg-red-200 w-1/2">
                                <button class="dark:hover:bg-white dark:bg-green-700 dark:hover:text-black dark:text-black bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-xl xl:text-2xl font-medium text-white flex justify-between w-full items-center p-5 xl:p-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-white">
                                <p onClick={()=>navigate("/pricing")}>Explore Our Pricing</p>
                                    <div>
                                        <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero-II-svg1.svg" alt="arrow" />
                                        <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero-II-svg1dark.svg" alt="arrow" />
                                    </div>
                                </button>
                            </div>
                        </div>


                        <div class="mt-6 md:mt-8 lg:hidden">
                            <button class="dark:hover:bg-white dark:bg-green-700 dark:hover:text-black dark:text-black bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-base md:text-xl font-semibold leading-tight text-black flex justify-between items-center px-5 py-4 lg:py-7 lg:px-7 w-full md:w-5/12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-white">
                            <p onClick={()=>navigate("/pricing")}>Explore Our Pricing</p>
                                <div>
                                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero-II-svg1.svg" alt="arrow" />
                                    <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hero-II-svg1dark.svg" alt="arrow" />
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <Knowmore />
            <Faq />
            <Testimonial />
        </div>

    );
}

export default Hero;