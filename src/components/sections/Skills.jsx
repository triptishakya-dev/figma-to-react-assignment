"use client"
import React, { useState, useEffect, useRef } from 'react';
import { skills } from '@/constant';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);



  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);



  return (
    <div ref={sectionRef} className=" bg-black py-16 px-4" name="skills">
      <div className="container mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
            SKILLS
          </h2>
          <p className="text-gray-400 text-lg mb-4">I have some skills</p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-orange-400 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {

            return (
              <div
                key={skill.id}
                className={`group bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 bg-neutral-800 rounded-full group-hover:bg-neutral-700 transition-colors">
                    <skill.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-white text-lg font-bold">
                    {skill.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
