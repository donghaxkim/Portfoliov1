import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

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
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="my-2 ml-44 max-w-xl py-6 text-center lg:text-left"
            >
              Hi, I'm a Math student at the University of Waterloo with a strong passion for data analysis and web development.<br />
              Outside of school, I enjoy playing basketball 🏀, playing the guitar 🎸, and spending quality time with friends and family 👨‍👩‍👧‍👦
            </motion.p>
          </div>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default About;