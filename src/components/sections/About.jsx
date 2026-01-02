import React from "react";
import { Quote } from "lucide-react";

const AboutMe = ({
  name = "Tripti Shakya",
  testimonial = "I'm Tripti Shakya, a passionate full-stack developer with expertise in React.js, Next.js, Node.js, and MongoDB. I build scalable web applications including e-commerce platforms, chat apps, and donation websites. With a legal background and strong technical skills, I'm committed to creating user-centric solutions that make a meaningful impact.",
}) => {
  return (
    <div className="w-full mx-auto bg-gray-100" name="aboutMe">
      <div className="relative py-12 sm:py-16 md:py-20 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
        
        {/* Decorative Quote Icon */}
        <div className="mb-6 md:mb-8 text-gray-300">
          <Quote size={40} className="md:h-12 md:w-12 opacity-50" />
        </div>

        {/* Testimonial Text */}
        <div className=" mx-auto text-center">
          <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed font-light text-gray-800 italic mb-10 md:mb-14">
            "{testimonial}"
          </p>
          
          {/* Divider */}
          <div className="w-24 h-1 bg-black mx-auto mb-8 rounded-full opacity-20"></div>

          {/* Name/Signature */}
          <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
            {name}
          </h2>
          <p className="text-gray-500 mt-2 font-medium uppercase tracking-widest text-sm">
            Full Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
