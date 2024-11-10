import React from "react";

const Courses: React.FC = () => {
  return (
    <>
    <div className="bg-black flex justify-center items-center py-24">
      <div className="container mx-auto px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-32">
        {/* Repeat this block for each card */}
        <div className="border border-zinc-400 rounded-lg shadow-lg p-8 max-w-sm w-full mb-10">
          {/* Image */}
          <img src="/bg1.png" alt="img" className="w-full h-40 object-cover rounded-md" />

          {/* Title and Description */}
          <div className="mt-4">
            <h2 className="text-xl text-white font-semibold">MERN STACK</h2>
            <p className="text-gray-500 mt-2">
              The MERN stack is a JavaScript-based web development stack comprising MongoDB, Express.js, React, and Node.js for building full-stack applications.
            </p>
          </div>

          {/* Line */}
          <div className="flex items-center justify-center mt-5">
            <div className="border-t border-zinc-400 w-full"></div>
          </div>

          {/* Topics */}
          <div className="mt-5">
            <ul className="text-white">
              <li className="border border-gray-500 p-2 inline-block mr-2">Web development</li>
              <li className="border border-gray-500 p-2 inline-block mr-2">Programming</li>
            </ul>
          </div>

          {/* Author and Price */}
          <div className="flex justify-between mt-4 pt-5 pb-5">
            <span className="text-white font-medium">Pushpendra Singh</span>
            <span className="text-green-600 font-semibold">₹399</span>
          </div>

          {/* Buy Now Button */}
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4 w-full hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
        {/* Repeat the card component as needed */}

        



      </div>
    </div>
    </>
  );
};

export default Courses;
