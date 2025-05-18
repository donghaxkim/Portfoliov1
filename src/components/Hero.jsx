import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { TypeAnimation } from 'react-type-animation';

const SERVICE_ID = "service_nxfttql";
const TEMPLATE_ID = "template_85qmnvt";
const PUBLIC_KEY = "f5mpWfDGFUfJO3XIe";

const Hero = ({ theme }) => {
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const formRef = useRef();

  const handleSend = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setShowMessageBox(false);
        setShowConfirmation(true);
        setTimeout(() => setShowConfirmation(false), 2000);
      })
      .catch(() => {
        alert("Failed to send message. Please try again later.");
      });
  };

  
  const chatBoxBg = theme === 'dark' ? 'bg-gray-500/30' : 'bg-gray-700/80';
  const inputText = theme === 'dark' ? 'text-gray-700' : 'text-gray-200';
  const inputPlaceholder = theme === 'dark' ? 'placeholder-gray-700' : 'placeholder-gray-200';

  return (
    <div className="section border-b border-neutral-900 h-screen pb-20" id="home">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 ml-44 flex flex-col items-center lg:items-start mt-[100px]">
          <motion.h1
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            className="pb-16 text-6xl font-medium tracking-tight lg:mt-[300px] lg:text-9xl"
            style={{
              background: "linear-gradient(to right, #f472b6, #64748b, #7c3aed)",
              backgroundSize: "200% auto",
              animation: "gradient-text-animation 3s linear infinite",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Dongha Kim
          </motion.h1>

          <div className="cursor-pointer text-4xl tracking-tight flex flex-col hover:text-gray-400">
            <motion.span
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            >
              <a
                href="https://uwaterloo.ca/future-students/programs/mathematics"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-gray-400"
                style={{ color: "#f472b6", fontWeight: 'bold' }}
              >
                Math @ University of Waterloo
              </a>
            </motion.span>
            <div className="mt-4">
              <motion.button
                initial={{ x: -400, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
                className="cursor-pointer text-4xl font-bold hover:underline"
                style={{ color: "#f472b6", background: "none", border: "none", padding: 0 }}
                type="button"
                onClick={() => setShowMessageBox((prev) => !prev)}
              >
                <TypeAnimation
                  sequence={[
                    '',
                    1000,
                    'Let\'s chat!',
                    5000,
                    '',
                    2000,
                    'Let\'s chat!',
                    5000,
                    '',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                  preRenderFirstString={true}
                />
              </motion.button>
            </div>
            {showMessageBox && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-500/30 backdrop-blur-sm" onClick={() => setShowMessageBox(false)} />
                {/* Modal */}
                <form
                  ref={formRef}
                  onSubmit={handleSend}
                  className={`relative z-10 w-full max-w-xs ${chatBoxBg} backdrop-blur-sm rounded-2xl p-4 flex flex-col gap-4 shadow-lg`}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className={`rounded-md px-4 py-2 ${chatBoxBg} ${inputText} ${inputPlaceholder} focus:outline-none`}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className={`rounded-md px-4 py-2 ${chatBoxBg} ${inputText} ${inputPlaceholder} focus:outline-none`}
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    className={`rounded-md px-4 py-2 ${chatBoxBg} ${inputText} ${inputPlaceholder} focus:outline-none`}
                    required
                  />
                  <button
                    type="submit"
                    className="mt-2 rounded-md text-white font-bold text-sm py-2 px-6 border-2 bg-transparent relative overflow-hidden"
                    style={{
                      borderImage: 'linear-gradient(90deg, #f472b6, #64748b, #7c3aed, #f472b6) 1',
                      animation: 'gradient-border-animation 3s linear infinite'
                    }}
                  >
                    Send
                  </button>
                </form>
              </div>
            )}
            {showConfirmation && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center"
                onClick={() => setShowConfirmation(false)}
              >
                <div className="relative z-10 bg-gray-500/80 backdrop-blur rounded-2xl px-8 py-6 text-white text-xl font-bold shadow-lg">
                  <span
                    style={{
                      background: 'linear-gradient(to right, #f472b6, #64748b, #7c3aed)',
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                      animation: 'gradient-text-animation 3s linear infinite',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    Message sent!
                  </span>
                </div>
                <div className="absolute inset-0 bg-gray-500/30 backdrop-blur-sm" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="h-[100px]"></div>
    </div>
  );
};

export default Hero;