import React from 'react';
import { useNavigate } from 'react-router-dom';


function Extra() {
    const navigate = useNavigate();
    return (
        <div>

            <div class="max-w-full container px-4 sm:px-6 lg:px-20 container mx-auto bg-black">
                <div class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">

                    <div class="lg:col-span-2">
                        <div class="py-8 lg:pe-8">
                            <div class="space-y-5 lg:space-y-8">


                                <h2 class="text-5xl font-bold md:text-3xl  md:leading-relaxed text-gray-800 dark:text-white">Our Vision, Our Mission, Our Story</h2>



                                <p class="text-lg text-gray-800 dark:text-neutral-200"><b>Vision:</b> To be the most trusted and innovative fitness destination in Kolkata, transforming lives through health, wellness, and fitness.</p>

                                <p class="text-lg text-gray-800 dark:text-neutral-200"><b>Mission:</b> To inspire and empower individuals to lead healthier lives by providing state-of-the-art facilities, expert guidance, and a supportive fitness community.</p>

                                <div class="text-center">
                                    <div class="grid lg:grid-cols-2 gap-3">
                                        <div class="grid grid-cols-2 lg:grid-cols-1 gap-3">
                                            <figure class="relative w-full h-60">
                                                <img class="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.pexels.com/photos/864989/pexels-photo-864989.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Blog Image" />
                                            </figure>
                                            <figure class="relative w-full h-60">
                                                <img class="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.pexels.com/photos/9943219/pexels-photo-9943219.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Blog Image" />
                                            </figure>
                                        </div>
                                        <figure class="relative w-full h-72 sm:h-96 lg:h-full">
                                            <img class="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.pexels.com/photos/14037022/pexels-photo-14037022.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Blog Image" />
                                        </figure>
                                    </div>


                                </div>

                                <p class="text-lg text-gray-800 dark:text-neutral-200"><b>Story: </b>Founded in 2020, Fitness Cult was born out of a passion for health and fitness. Over the years, we’ve grown from a small local gym to a thriving fitness hub, serving hundreds of members across Kolkata. With a focus on innovation, community, and results, we have helped countless individuals achieve their fitness dreams.</p>




                                <figure>
                                    <img class="w-full object-cover rounded-xl" src="https://images.pexels.com/photos/5941810/pexels-photo-5941810.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Blog Image" />

                                </figure>





                           
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-70 lg:via-transparent lg:to-transparent dark:from-neutral-800">
                        <div class="sticky top-0 start-0 py-8 lg:ps-8">

                            <div class="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-neutral-700">
                                <a class="block shrink-0 focus:outline-none" href="#">
                                    <img class="size-10 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                </a>

                                
                                    <p class="text-sm text-white dark:text-white">
                                       Quick Nvigation
                                    </p>
                            

                                
                            </div>


                            <div class="space-y-6">

                                <div class="group flex items-center gap-x-6 focus:outline-none">
                                    <div class="grow">
                                        <span onClick={()=> navigate("/pricing")}class="text-sm font-bold cursor-pointer text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-green-500 dark:group-focus:text-blue-500">
                                            Get Enrolled
                                        </span>
                                    </div>

                                    <div class="shrink-0 relative rounded-lg overflow-hidden size-20">
                                        <img class="size-full absolute top-0 start-0 object-cover rounded-lg" src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Blog Image" />
                                    </div>
                                </div>

                                <div class="group flex items-center gap-x-6 focus:outline-none">
                                    <div class="grow">
                                        <span onClick={()=> navigate("/contact")} class="text-sm font-bold cursor-pointer text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-green-500 dark:group-focus:text-blue-500">
                                            Want to Join ?
                                        </span>
                                    </div>

                                    <div class="shrink-0 relative rounded-lg overflow-hidden size-20">
                                        <img class="size-full absolute top-0 start-0 object-cover rounded-lg" src="https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Blog Image" />
                                    </div>
                                </div>

                                <div class="group flex items-center gap-x-6 focus:outline-none">
                                    <div class="grow">
                                        <span onClick={()=> navigate("/products")} class="text-sm font-bold text-gray-800  cursor-pointer group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-green-500 dark:group-focus:text-blue-500">
                                            Our Products
                                        </span>
                                    </div>

                                    <div class="shrink-0 relative rounded-lg overflow-hidden size-20">
                                        <img class="size-full absolute top-0 start-0 object-cover rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3sO2o-BsR8b3T0VyJFUgct3DkF5QEQ_9IA&s" alt="Blog Image" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Extra
