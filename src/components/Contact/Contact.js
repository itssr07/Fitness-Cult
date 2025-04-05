import React from 'react';

function Contact() {
  return (
    <div className="bg-black text-white">
      {/* Header Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-300">
            We are here to help you. Let's start the conversation!
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 pb-16">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-gray-400">
            Fill out the form, and we'll get back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <p className="flex items-center">
              📍 <span className="ml-3">25, Millenium Building, Dunlop, 710608</span>
            </p>
            <p className="flex items-center">
              📞 <span className="ml-3">+91 8978134502</span>
            </p>
            <p className="flex items-center">
              📧 <span className="ml-3">fitnesscult@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-6">
          <label className="block">
            <span className="text-gray-300">Full Name</span>
            <input
              type="text"
              placeholder="Enter your full name"
              className="block w-full mt-2 p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-violet-500 focus:ring focus:ring-violet-500 outline-none"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-300">Email Address</span>
            <input
              type="email"
              placeholder="Enter your email address"
              className="block w-full mt-2 p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-violet-500 focus:ring focus:ring-violet-500 outline-none"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-300">Phone Number</span>
            <input
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter your phone number"
              className="block w-full mt-2 p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-violet-500 focus:ring focus:ring-violet-500 outline-none"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-300">Message</span>
            <textarea
              rows="3"
              placeholder="Enter your message"
              className="block w-full mt-2 p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-violet-500 focus:ring focus:ring-violet-500 outline-none"
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold bg-violet-600 hover:bg-violet-700 rounded-lg shadow-md transition duration-300"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Google Map */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold mb-6">Find Us Easily</h2>
        <div className="w-full max-w-4xl mx-auto h-64 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345099486!2d144.96305791531692!3d-37.81362797975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb692a6a23e5c3023!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1634254620347!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
