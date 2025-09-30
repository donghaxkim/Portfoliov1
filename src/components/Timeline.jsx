import { motion } from "framer-motion";

const Timeline = ({ theme }) => {
  const textColor = theme === "dark" ? "text-neutral-300" : "text-neutral-900";
  const cardBg = theme === "dark" ? "bg-neutral-800 border-neutral-600" : "bg-white border-neutral-300";

  const timelineEvents = [
    {
      year: "Baker/Barista",
      title: "Paris Baguette",
      description: "Worked as a barista and baker, gaining customer service and teamwork experience",
    },
    {
      year: "Autonomy Developer",
      title: "Waterloo Autonomous Robotics Group",
      description: "Joined as an Autonomy Developer, contributing to robotics software development",
    },
    {
      year: "Marketing Lead",
      title: "CES 2025 (Itone Co. Ltd)",
      description: "Represented Itone Co. Ltd as Marketing Lead",
    },
    {
      year: "Bachelor of Mathematics",
      title: "University of Waterloo",
      description: "Started Bachelor's in Mathematics, specializing in Applied Mathematics with CS & ML",
    },
    {
      year: "President",
      title: "Robotics & Engineering Club",
      description: "Became President of Engineering Club and Robotics Club, leading projects and events",
    },
    {
      year: "Missionary",
      title: "Nicaragua Mission Trip",
      description: "Taught English to children aged 5–17, gaining cross-cultural and teaching experience",
    },
    {
      year: "Digital Marketing Intern",
      title: "BeamON",
      description: "Completed first Marketing Co-op as Digital Marketing Intern and Research Assistant",
    }
  ];

  return (
    <div className="section border-b border-neutral-900 my-8" id="myjourney">
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
          {/* Rainbow vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-purple-400 via-blue-400 via-green-400 to-yellow-400 rounded-full"></div>

          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex items-center mb-16 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Pink dot */}
                <div className="absolute left-8 w-4 h-4 bg-pink-400 border-2 border-pink-400 rounded-full z-10"></div>

                {/* Content card */}
                <div className={`w-5/12 ${isEven ? 'ml-20' : 'mr-20'}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`p-6 rounded-2xl border shadow transition-all duration-300 ${cardBg}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-2xl font-bold ${textColor}`}>{event.year}</span>
                      <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{event.title}</h3>
                    <p className={`text-sm leading-relaxed ${textColor}`}>
                      {event.description}
                    </p>
                  </motion.div>
                </div>
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
