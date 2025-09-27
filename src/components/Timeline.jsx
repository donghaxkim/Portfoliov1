import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaTrophy, FaRocket, FaHeart } from "react-icons/fa";

const Timeline = ({ theme }) => {
  const textColor = theme === "dark" ? "text-neutral-300" : "text-[#2A3549]";
  const borderColor = theme === "dark" ? "border-neutral-300" : "border-[#2A3549]";
  const bgColor = theme === "dark" ? "bg-[#2A3549]" : "bg-[#f9fafb]";

  const timelineEvents = [
    {
      year: "2024",
      title: "University of Waterloo",
      description: "Started Mathematics program specializing in Applied Mathematics with Scientific Computing and Scientific Machine Learning",
      icon: FaGraduationCap,
      iconColor: "text-blue-500",
      branch: "education"
    },
    {
      year: "2023",
      title: "Full-Stack Development",
      description: "Began learning React, Node.js, and modern web development technologies",
      icon: FaCode,
      iconColor: "text-green-500",
      branch: "tech"
    },
    {
      year: "2022",
      title: "Python & Data Science",
      description: "Dove deep into Python programming, NumPy, Pandas, and data analysis",
      icon: FaRocket,
      iconColor: "text-purple-500",
      branch: "tech"
    },
    {
      year: "2021",
      title: "First Programming Steps",
      description: "Started my programming journey with C++ and fundamental computer science concepts",
      icon: FaCode,
      iconColor: "text-orange-500",
      branch: "tech"
    },
    {
      year: "2020",
      title: "Academic Excellence",
      description: "Achieved top academic performance and developed strong mathematical foundation",
      icon: FaTrophy,
      iconColor: "text-yellow-500",
      branch: "achievement"
    },
    {
      year: "2019",
      title: "Passion for Learning",
      description: "Discovered love for mathematics and science, inspired by creators like 3Blue1Brown",
      icon: FaHeart,
      iconColor: "text-pink-500",
      branch: "personal"
    }
  ];

  const getBranchColor = (branch) => {
    switch (branch) {
      case "education":
        return "border-blue-400 bg-blue-50";
      case "tech":
        return "border-green-400 bg-green-50";
      case "achievement":
        return "border-yellow-400 bg-yellow-50";
      case "personal":
        return "border-pink-400 bg-pink-50";
      default:
        return "border-gray-400 bg-gray-50";
    }
  };

  return (
    <div className="section border-b border-neutral-900 my-8" id="timeline">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className={`mb-[100px] mt-[150px] text-center text-4xl font-extrabold ${textColor}`}
      >
        My Journey
      </motion.h1>
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-blue-400 to-green-400 rounded-full"></div>
          
          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 w-6 h-6 bg-white border-4 border-pink-400 rounded-full z-10 flex items-center justify-center">
                  <IconComponent className={`text-sm ${event.iconColor}`} />
                </div>
                
                {/* Content card */}
                <div className={`w-5/12 ${isEven ? 'ml-20' : 'mr-20'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`p-6 rounded-2xl border-2 shadow-lg transition-all duration-300 ${getBranchColor(event.branch)} ${theme === 'dark' ? 'bg-neutral-800 border-neutral-600' : 'bg-white'}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-2xl font-bold ${textColor}`}>{event.year}</span>
                      <div className={`w-3 h-3 rounded-full ${event.branch === 'education' ? 'bg-blue-400' : event.branch === 'tech' ? 'bg-green-400' : event.branch === 'achievement' ? 'bg-yellow-400' : 'bg-pink-400'}`}></div>
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{event.title}</h3>
                    <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-600'}`}>
                      {event.description}
                    </p>
                  </motion.div>
                </div>
                
                {/* Branch connector */}
                <div className={`absolute top-6 w-16 h-0.5 ${isEven ? 'left-32' : 'right-32'} ${event.branch === 'education' ? 'bg-blue-400' : event.branch === 'tech' ? 'bg-green-400' : event.branch === 'achievement' ? 'bg-yellow-400' : 'bg-pink-400'}`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <div className="h-[100px]"></div>
    </div>
  );
};

export default Timeline;
