
import { motion } from "framer-motion";
import IMG_5234 from "../assets/IMG_5234.JPG";

const About = () => {
  return (
    <div className="section border-b border-neutral-900 pb-4" id="about">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-20 mb-12 text-center text-4xl font-bold"
      >
        About
        <span style={{ color: '#f472b6' }}> Me</span>
      </motion.h1>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="my-2 text-[24px] ml-[2px] max-w-xl py-6 text-center lg:text-left leading-[1.7]"
            >
              Hi 👋, my name is Dongha Kim but people call me DK because my name isn't the easiest to pronounce. I'm currently a Mathematics student at the University of Waterloo, specializing in Applied Mathematics with Scientific Computing and Scientifc Machine Learning 🙀. I'm always looking for ways to connect what I'm learning to the real world. Outside of school, I enjoy playing basketball 🏀, traveling to new places ✈️, and spending time with my cat Maui 😸. I also love watching creators like Fern and 3Blue1Brown as their videos make math and science exciting and inspire me to keep learning and exploring new ideas. Feel free to reach out to me if you have any questions or want to chat! 🤝🤝🤝
              <br />
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="mt-8 lg:mt-0"
          >
            <div className="w-[600px] h-[600px] overflow-hidden rounded-full border-4 border-pink-400 shadow-lg">
              <img
                src={IMG_5234}
                alt="Dongha Kim"
                className="w-full h-full object-cover scale-[1]"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default About;