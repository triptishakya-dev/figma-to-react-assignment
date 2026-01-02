import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pb-10 pt-30 flex flex-col justify-end">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 pb-8  border-b-1 border-gray-200">
        {/* Main Footer Card */}
        <div className="relative mb-8">
          <div className=" container mx-auto bg-gray-100 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm border border-gray-200 relative">
            {/* Decorative background elements */}
            <div className="w-44 h-52  lg:h-52 bg-white rounded-xl overflow-hidden absolute top-[-50px] shadow-lg transform group-hover:scale-105 transition-transform duration-300 border border-gray-100">
                    <img 
                      src="/image/footer.png" 
                      alt="Modern workspace with laptop showing design work"
                      className="w-full h-full object-cover"
                    />
                  </div>
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M20,20 Q40,10 60,20 T100,20" stroke="black" strokeWidth="2" fill="none"/>
                <path d="M10,40 Q30,30 50,40 T90,40" stroke="black" strokeWidth="1.5" fill="none"/>
                <path d="M15,60 Q35,50 55,60 T95,60" stroke="black" strokeWidth="1" fill="none"/>
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-12">             
              {/* Content Section */}
              <div className="flex-1 text-center lg:text-left order-2 lg:order-none ml-56">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black mb-3 lg:mb-4">
                  Thanks for visit my website
                </h2>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl">
                  If you have any questions you can write me to any of my social networks, I am sure I will answer you.
                </p>
              </div>
              
              {/* Decorative circles */}
              <div className="hidden lg:block order-3">
                <div className="relative">
                  <div className="w-20 h-20 border-2 border-black/10 rounded-full animate-pulse"></div>
                  <div className="absolute top-3 left-3 w-14 h-14 border border-black/10 rounded-full"></div>
                  <div className="absolute top-6 left-6 w-8 h-8 bg-black/5 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 ">
          {/* Logo */}
          <div className="flex items-center gap-3 ">
           
            <img src="/image/footer2.png" alt="not found" className='h-8' />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 lg:gap-12 e">
            {['Home', 'Portfolio', 'Skills', 'About Me'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-600 hover:text-black transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          
          
          {/* Mobile Navigation */}
          <div className="flex md:hidden gap-4">
            {['Home', 'Portfolio', 'Skills', 'About'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-black transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
