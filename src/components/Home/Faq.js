import React from 'react'

function Faq() {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-xl  font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-neutral-200">
            Frequently Asked Questions
          </h2>
        </div>
  
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                What are the gym's operating hours?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                Our gym is open Monday to Friday from 6:00 AM to 10:00 PM, and on weekends from 7:00 AM to 9:00 PM.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Do you offer trial memberships?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                Yes, we offer a 3-day trial membership so you can experience our facilities and classes before committing to a plan.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Are personal trainers included in the membership plans?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                Personal training sessions are included in our Elite Plan. However, you can add them to any other plan at an additional cost.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Do you have facilities for both men and women?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                Absolutely! Our gym is equipped with separate locker rooms and showers for men and women, ensuring a comfortable experience for all.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                What types of classes do you offer?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                We offer a variety of classes, including Yoga, Zumba, HIIT, Aerobics, and Pilates. Check our schedule for class timings.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                What payment methods do you accept?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                We accept cash, credit/debit cards, UPI payments, and online bank transfers. Flexible EMI options are also available for annual memberships.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq;
