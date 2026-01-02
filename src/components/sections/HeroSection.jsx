"use client"; // Add this line at the very top

import { 
  FaInstagram, 
  FaFacebook, 
  FaLinkedin, 
  FaTwitter, 
  FaTelegram,
  FaMedium,
  FaDownload 
} from "react-icons/fa";

export default function HeroSection() {
  // Function to handle resume download
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/newResume.pdf';
    link.download = 'Tripti_Shakya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-[70vh] bg-black flex items-center justify-center px-4 " name="home">
      <div className="container flex flex-col md:flex-row w-full p-8 rounded-lg lg:gap-72">
        {/* Left: Text Content */}
        <div className="w-full [@media(min-width:1024px)]:w-1/2 flex flex-col justify-center h-full">
          <h1 className="text-white text-6xl md:text-8xl font-extrabold leading-tight mb-4">
            FULL-STACK
            <br />
            DEVELOPER
          </h1>
          <h2 className="font-extrabold text-5xl md:text-6xl mt-2 bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-8">
          TRIPTI SHAKYA
          </h2>

          {/* Social Icons */}
          <div className="flex mt-6 space-x-4 mb-8">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className=" hover:bg-neutral-700  p-3 rounded-full transition-colors"
              aria-label="Visit Instagram profile"
            >
              <FaInstagram className="w-6 h-6 text-white" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className=" hover:bg-neutral-700  p-3 rounded-full transition-colors"
              aria-label="Visit Facebook profile"
            >
              <FaFacebook className="w-6 h-6 text-white" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className=" hover:bg-neutral-700  p-3 rounded-full transition-colors"
              aria-label="Visit LinkedIn profile"
            >
              <FaLinkedin className="w-6 h-6 text-white" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className=" hover:bg-neutral-700  p-3 rounded-full transition-colors"
              aria-label="Visit Twitter profile"
            >
              <FaTwitter className="w-6 h-6 text-white" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className=" hover:bg-neutral-700  p-3 rounded-full transition-colors"
              aria-label="Visit Telegram profile"
            >
              <FaTelegram className="w-6 h-6 text-white" />
            </a>
          </div>

          {/* Download CV Button */}
          <div className="mt-4">
            <button
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-black font-semibold py-4 px-8 rounded-lg text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Download Curriculum Vitae PDF"
            >
              Download Resume
              <FaDownload className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right: Designer Workspace Image */}
        <div className="hidden [@media(min-width:1024px)]:flex">
          <div className="relative">
            <img
              src="/image/hero.png"
              alt="Product Designer Workspace with laptop, color swatches, and design tools"
              className="rounded-lg shadow-2xl w-full h-full object-cover max-w-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
