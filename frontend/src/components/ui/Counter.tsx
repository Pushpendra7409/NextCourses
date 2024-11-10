// import React from 'react'  // Uncomment if needed

const Counter = () => {
    return (
      <>
        {/* Counter Section */}
        <div className="bg-black">
        <div className="container mx-auto grid grid-cols-3 md:grid-cols-3 text-center pt-10 pb-12 md:pt-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">25K+</h2>
            <p className="text-xl md:text-2xl py-1 md:py-2 text-white">Students taught</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">10+</h2>
            <p className="text-xl md:text-2xl mt-1 text-white">Instructors</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">2 million+</h2>
            <p className="text-xl md:text-2xl py-1 md:py-2 text-white">YouTube Subs.</p>
          </div>
        </div>
        </div>
      </>
    );
  };
  
  export default Counter;
  
