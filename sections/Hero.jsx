'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText } from '../components';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth2} mx-auto flex flex-col`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1
          variants={textVariant(1.1)}
          className={styles.heroHeading}
        >
          TON ANIMAL
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
        >
          <span className={styles.heroDescription}> The next mini game in the TON ecosystem</span>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full lg:-mt-[30px] md:-mt-[18px] -mt-[15px]  2xl:pl-[480px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] sm:-top-[20px] -top-[10px]" />
        <img
          src="/cover.jpg"
          alt="cover"
          className="w-full sm:h-[650px] h-[350px] object-cover lg:object-fill rounded-tl-[140px] z-10 relative shadow-2xl
          shadow-blue-500/50 hover:shadow-cyan-700 rounded-b-[22px] transition ease-in-out hover:scale-110"
        />

        <a href="#explore">
          <div className="w-full flex sm:justify-end justify-center sm:-mt-[70px] mt-[20px] pr-[0px] relative z-10 2xl:-ml-[10px]">
            <motion.button
              whileTap={{ scale: 0.85 }}
              whileHover={{ scaleX: 1.05 }}
              className="sm:w-[270px] w-[150px] sm:h-[55px] h-[45px] hero-gradient rounded-[32px] text-white"
            >
              <TypingText title="Explore Characters" textStyles="text-center text-white sm:text-[25px]" />
            </motion.button>
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
