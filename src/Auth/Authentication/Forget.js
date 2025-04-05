import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Forget() {
    const navigate = useNavigate();
  return (
    <div class=" bg-black">
      <main id="content" role="main" class="w-full  max-w-md mx-auto p-6">
    <div class="mt-7   rounded-xl shadow-lg dark:bg-black dark:border-white border-2">
      <div class="p-4 sm:p-7">
        <div class="text-center">
          <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Remember your password? 
            <a onClick={()=> navigate("/authentication")} class="text-blue-600 cursor-pointer decoration-2 hover:underline font-medium" >
               Login here
            </a>
          </p>
        </div>

        <div class="mt-5">
          <form>
            <div class="grid gap-y-4">
              <div>
                <label for="email" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Email address</label>
                <div class="relative">
                  <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error"/>
                </div>
                <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
              </div>
              <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-700 text-white  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Reset password</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <p class="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
      
      <a onClick={()=> navigate("/contact")}  class="pl-3 inline-flex cursor-pointer items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-white dark:hover:text-green-500" >
        
        Contact us!
      </a>
    </p>
  </main>
    </div>
  )
}

export default Forget
