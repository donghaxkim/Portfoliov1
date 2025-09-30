import { motion } from "framer-motion";
import { BiHomeAlt } from 'react-icons/bi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { WiMoonAltThirdQuarter, WiDaySunny } from 'react-icons/wi';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleSectionScroll = () => {
      const sections = ['home', 'about', 'techstack', 'myjourney', 'projects', 'contact', 'contact-info'];
      let currentSection = '';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleSectionScroll);
    return () => window.removeEventListener('scroll', handleSectionScroll);
  }, []);

  const navBg = theme === 'dark' ? 'bg-gray-500/30' : 'bg-gray-700/80';
  const iconColor = theme === 'dark' ? 'text-white/50' : 'text-gray-300';
  const sideNavBg = theme === 'dark' ? 'bg-black/30' : 'bg-gray-700/80';
  const iconHover = theme === 'dark' ? 'hover:text-gray-300' : 'hover:text-gray-700';

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="fixed top-4 left-0 w-full z-50">
        <div className="container mx-auto">
          <div className={`w-full ${navBg} h-[60px] backdrop-blur-3xl rounded-full max-w-[700px] mx-auto px-5 flex justify-between text-2xl ${iconColor}`}>
            
            <motion.div whileHover={{ scale: 1.2 }} className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${iconHover}`}>
              <Link to="home" spy={true} smooth={true} duration={500}>
                <BiHomeAlt />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${iconHover}`}>
              <a href="https://www.linkedin.com/in/dongha-kimm/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${iconHover}`}>
              <a href="https://github.com/donghaxkim" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${iconHover}`} onClick={toggleTheme}>
              {theme === 'dark' ? <WiDaySunny /> : <WiMoonAltThirdQuarter />}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* SIDE NAVBAR */}
      <nav className="fixed top-[40%] transform -translate-y-1 right-3 z-50">
        <div className="container mx-auto">
          <div className={`${sideNavBg} w-[40px] py-4 backdrop-blur-xl rounded-full flex flex-col items-center justify-center space-y-6 z-50`}>
            {['home', 'about', 'techstack', 'myjourney', 'projects'].map((section) => (
              <Link
                key={section}
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
                className={`cursor-pointer w-[12px] h-[12px] rounded-full backdrop-blur-sm transition-all duration-300 ease-in-out ${
                  activeSection === section
                    ? 'bg-pink-400/90'
                    : 'bg-gray-500/50 hover:bg-pink-300/60'
                }`}
              />
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
