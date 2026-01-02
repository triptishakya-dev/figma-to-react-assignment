"use client"
import React, { useState } from 'react';
import { X, Github, Globe } from 'lucide-react';
import { portfolioItems } from '@/constant';

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="bg-black py-8 md:py-16 px-4" name="portfolio">
      <div className="container mx-auto">
        {/* Portfolio Header - Enhanced responsive text sizes */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4">
            PORTFOLIO
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
            Showcasing my latest work and projects
          </p>
        </div>

        {/* Portfolio Grid - Responsive grid with better mobile spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className="group flex flex-col bg-neutral-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition-all duration-300 cursor-pointer"
            >
              {/* Image Section */}
              <div className="relative w-full h-48 bg-gray-800 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                  {item.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium text-gray-300 bg-gray-800 px-2.5 py-1 rounded-md border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 4 && (
                    <span className="text-xs font-medium text-gray-400 bg-gray-800/50 px-2 py-1 rounded-md">
                      +{item.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal - Enhanced responsive modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-3 md:p-4 z-50">
            <div className="bg-neutral-900 rounded-xl w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-3 md:top-4 lg:top-6 right-3 md:right-4 lg:right-6 text-gray-400 hover:text-white z-10 p-1 rounded-full bg-black/20 backdrop-blur-sm touch-manipulation"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 cursor-pointer" />
                </button>
                
                <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                  <div className="aspect-video bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-lg mb-4 md:mb-6">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover rounded-lg mix-blend-overlay opacity-80"
                    />
                  </div>
                  
                  <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 md:mb-4 lg:mb-6 leading-tight">
                    {selectedItem.title}
                  </h2>
                  
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                    {selectedItem.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 md:gap-2 lg:gap-3 mb-4 md:mb-6 lg:mb-8">
                    {selectedItem.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-purple-600 text-white text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action buttons - Enhanced responsive buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6">
                    <a
                      href={selectedItem.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 lg:gap-3 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-lg transition-colors text-sm sm:text-base md:text-lg lg:text-xl touch-manipulation"
                    >
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                      Live Demo
                    </a>
                    <a
                      href={selectedItem.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 lg:gap-3 bg-neutral-700 hover:bg-neutral-600 active:bg-neutral-500 text-white px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-lg transition-colors text-sm sm:text-base md:text-lg lg:text-xl touch-manipulation"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
