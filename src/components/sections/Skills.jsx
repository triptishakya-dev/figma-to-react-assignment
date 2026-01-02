"use client"
import React, { useState, useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"]
  },
  {
    title: "Frontend Frameworks & Styling",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Shadcn", "Framer Motion"]
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "BullMQ", "Clerk"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Redis", "Valkey", "Qdrant"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "AWS S3", "AWS ECR", "AWS ECS"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel"]
  }
];

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <div ref={sectionRef} className="bg-white py-20 px-4" name="skills">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-black text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Technical Skills
          </h2>
          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
             <div className={`h-full bg-black transition-all duration-1000 ease-out ${isVisible ? 'w-full' : 'w-0'}`}></div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl text-black font-bold mb-6 pb-2 border-b border-gray-200 group-hover:border-black transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="text-gray-600 bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
