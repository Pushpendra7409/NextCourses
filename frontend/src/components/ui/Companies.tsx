import React from 'react';

const Companies = () => {
  return (
    <div className="bg-black w-full pt-10 pb-40">
      <div className="container mx-auto text-center space-y-7">
        <h1 className="text-white text-3xl md:text-6xl">
          Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">Companies</span> Our Students
        </h1>
        <h1 className="text-white text-3xl md:text-6xl">Working With</h1>

        {/* Logos Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 pt-32 px-10 justify-items-center">
          <img className="company-logo w-20 h-20 md:w-28 md:h-28 object-contain" src="/docker.svg" alt="Docker" />
          <img className="company-logo w-20 h-20 md:w-28 md:h-28 object-contain" src="/nike.svg" alt="Nike" />
          <img className="company-logo w-20 h-20 md:w-28 md:h-28 object-contain" src="/adidas.svg" alt="Adidas" />
          <img className="company-logo w-20 h-20 md:w-28 md:h-28 object-contain" src="/uber.svg" alt="Uber" />
          <img className="company-logo w-20 h-20 md:w-28 md:h-28 object-contain" src="/sanity.svg" alt="Sanity" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 pt-32 px-10 justify-items-center">
          <img className="company-logo w-20 h-20 md:w-28 md:h-28 object-contain" src="/angular.svg" alt="Angular" />
          <img className="company-logo w-20 h-20 md:w-28 md:h-28 object-contain" src="/amazon.svg" alt="Amazon" />
          <img className="company-logo w-20 h-20 md:w-28 md:h-28 object-contain" src="/audi.svg" alt="Apple" />
          <img className="company-logo w-20 h-20 md:w-28 md:h-28 object-contain" src="/gucchi.svg" alt="Company 4" />
          <img className="company-logo w-20 h-20 md:w-28 md:h-28 object-contain" src="/netflix.svg" alt="Company 5" />
          </div>
      </div>
    </div>
  );
};

export default Companies;
