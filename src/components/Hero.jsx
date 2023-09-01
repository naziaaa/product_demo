import { motion } from "framer-motion";

import { styles } from "../styles";


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] 
     max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#5271FF]" />
          <div
            className="w-1 sm:h-80 h-40"
            style={{
              background: "linear-gradient(to bottom, #5271FF, #00AFEF)",
            }}
          />
        </div>
        <div>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Welcome to
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-[#5271FF]">Verbalyze</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Smart Communication,
            <br className="sm:block hidden" />
            Beyond Imagination!
          </p>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-end items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
