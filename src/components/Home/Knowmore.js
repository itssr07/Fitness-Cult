import React from 'react'

function Knowmore() {
  return (

    <div class="bg-black px-2">

      <div class="max-w-7xl  px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">

        <div class="max-w-3xl mb-10 lg:mb-14">
          <h2 class="text-white teaxt- cenetr font-semibold text-2xl md:text-4xl md:leading-tight">Our Approach</h2>
          {/* <p class="mt-8 text-white text-xl">At Fitness Cult, we believe that fitness is a journey, not a destination. Whether you’re looking to build muscle, lose weight, or simply stay active, our gym offers everything you need. From personalized workout plans to group fitness classes, we’re here to guide you every step of the way.</p> */}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
            <img class="w-full object-cover rounded-xl" src="https://images.pexels.com/photos/17839330/pexels-photo-17839330/free-photo-of-a-woman-in-a-red-top-and-black-shorts-holding-two-dumbbells.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Features Image" />
          </div>

          <div>

            <div class="mb-4">
              <h3 class="text-white text-xs font-medium uppercase">
                What you'll Get?
              </h3>
            </div>

            <div class="flex gap-x-5 ms-1">

              <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div class="relative z-10 size-8 flex justify-center items-center">
                  <span class="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-white font-semibold text-xs uppercase rounded-full">
                    1
                  </span>
                </div>
              </div>

              <div class="grow pt-0.5 pb-8 sm:pb-12">
                <p class="text-xl text-xl text-neutral-400">
                  <span class="text-white text-xl">State-of-the-Art Equipment: </span>
                  Top-notch machines for cardio, strength, and functional training.
                </p>
              </div>

            </div>

            <div class="flex gap-x-5 ms-1">

              <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div class="relative z-10 size-8 flex justify-center items-center">
                  <span class="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-white font-semibold text-xs uppercase rounded-full">
                    2
                  </span>
                </div>
              </div>

              <div class="grow pt-0.5 pb-8 sm:pb-12">
                <p class="text-xl text-xl text-neutral-400">
                  <span class="text-white text-xl">Certified Trainers: </span>
                  Professional guidance to help you achieve your fitness goals.
                </p>
              </div>

            </div>

            <div class="flex gap-x-5 ms-1">

              <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div class="relative z-10 size-8 flex justify-center items-center">
                  <span class="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-white font-semibold text-xs uppercase rounded-full">
                    3
                  </span>
                </div>
              </div>

              <div class="grow pt-0.5 pb-8 sm:pb-12">
                <p class="text-xl text-xl text-neutral-400">
                  <span class="text-white text-xl">Diverse Classes: </span>
                  Yoga, Zumba, HIIT, and more to keep your workouts exciting.
                </p>
              </div>

            </div>

            <div class="flex gap-x-5 ms-1">

              <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div class="relative z-10 size-8 flex justify-center items-center">
                  <span class="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-white font-semibold text-xs uppercase rounded-full">
                    4
                  </span>
                </div>
              </div>

              <div class="grow pt-0.5 pb-8 sm:pb-12">
                <p class="text-xl text-xl text-neutral-400">
                  <span class="text-white text-xl">Community Support: </span>
                  A friendly and motivating environment to keep you going.
                </p>
              </div>

            </div>


            <a class="group inline-flex items-center gap-x-2 py-3 px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-medium text-sm text-white  text-bold rounded-full focus:outline-none" href="http://localhost:3000/pricing">
              Explore Our Pricing
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Knowmore
