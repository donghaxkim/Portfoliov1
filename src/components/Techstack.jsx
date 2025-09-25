import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiMysql, SiPostgresql, SiLinux, SiGit, SiGithub, SiVisualstudiocode, SiFigma, SiNumpy, SiPandas, SiExpress, SiNodedotjs, SiCplusplus } from "react-icons/si";
import { FaPython, FaJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Techstack = ({ theme }) => {
  const textColor = theme === "dark" ? "text-neutral-300" : "text-[#2A3549]";
  const borderColor = theme === "dark" ? "border-neutral-300" : "border-[#2A3549]";

  return (
    <div className="section border-b border-neutral-900 my-8" id="techstack">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className={`mb-[100px] mt-[150px] text-center text-4xl font-extrabold ${textColor}`}
      >
        Techstack
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center justify-center gap-16"
      >
        {/* Languages */}
        <div className="flex flex-col items-center gap-4">
          <h2 className={`text-2xl font-bold ${textColor}`}>Languages</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
              <SiCplusplus className="text-7xl text-blue-600" />
              <span className={`text-lg font-medium ${textColor}`}>C++</span>
            </motion.div>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
              <FaPython className="text-7xl text-blue-400" />
              <span className={`text-lg font-medium ${textColor}`}>Python</span>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
              <FaJs className="text-7xl text-yellow-400" />
              <span className={`text-lg font-medium ${textColor}`}>JavaScript</span>
            </motion.div>
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
              <FaHtml5 className="text-7xl text-orange-500" />
              <span className={`text-lg font-medium ${textColor}`}>HTML</span>
            </motion.div>
            <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
              <FaCss3Alt className="text-7xl text-blue-500" />
              <span className={`text-lg font-medium ${textColor}`}>CSS</span>
            </motion.div>
          </div>
        </div>

        {/* Frameworks/Libraries */}
        <div className="flex flex-col items-center gap-4">
          <h2 className={`text-2xl font-bold ${textColor}`}>Frameworks/Libraries</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
              <RiReactjsLine className="text-7xl text-cyan-400" />
              <span className={`text-lg font-medium ${textColor}`}>React</span>
            </motion.div>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
              <SiNodedotjs className="text-7xl text-green-600" />
              <span className={`text-lg font-medium ${textColor}`}>Node.js</span>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
              <SiExpress className="text-7xl text-gray-800" />
              <span className={`text-lg font-medium ${textColor}`}>Express.js</span>
            </motion.div>
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
              <SiNumpy className="text-7xl text-blue-500" />
              <span className={`text-lg font-medium ${textColor}`}>NumPy</span>
            </motion.div>
            <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
              <SiPandas className="text-7xl text-blue-600" />
              <span className={`text-lg font-medium ${textColor}`}>Pandas</span>
            </motion.div>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-col items-center gap-4">
          <h2 className={`text-2xl font-bold ${textColor}`}>Technologies</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
              <SiMongodb className="text-7xl text-green-500" />
              <span className={`text-lg font-medium ${textColor}`}>MongoDB</span>
            </motion.div>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
              <SiPostgresql className="text-7xl text-blue-500" />
              <span className={`text-lg font-medium ${textColor}`}>PostgreSQL</span>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
              <SiMysql className="text-7xl text-blue-700" />
              <span className={`text-lg font-medium ${textColor}`}>MySQL</span>
            </motion.div>
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
              <SiLinux className="text-7xl text-black" />
              <span className={`text-lg font-medium ${textColor}`}>Linux</span>
            </motion.div>
          </div>
        </div>

        {/* Developer Tools */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <h2 className={`text-2xl font-bold ${textColor}`}>Developer Tools</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
              <SiGit className="text-7xl text-orange-600" />
              <span className={`text-lg font-medium ${textColor}`}>Git</span>
            </motion.div>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
              <SiGithub className="text-7xl text-gray-800" />
              <span className={`text-lg font-medium ${textColor}`}>GitHub</span>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
              <SiVisualstudiocode className="text-7xl text-blue-500" />
              <span className={`text-lg font-medium ${textColor}`}>VS Code</span>
            </motion.div>
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
              <SiFigma className="text-7xl text-purple-500" />
              <span className={`text-lg font-medium ${textColor}`}>Figma</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className="h-[180px]"></div>
    </div>
  );
};

export default Techstack;
