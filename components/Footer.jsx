'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import { TypingText } from './CustomTexts';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Try The Game
        </h4>

        <motion.button
          whileTap={{ scale: 0.85 }}
          whileHover={{ scaleX: 1.05 }}
          className="sm:w-[120px] w-[120px] sm:h-[65px] h-[45px] hero-gradient text-white rounded-[32px]"
        >
          <TypingText title="Play Now" textStyles="text-center font-normal text-[16px] text-white" />
        </motion.button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            TON ANIMAL
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright 2024 Ton Animal
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.link}>
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
