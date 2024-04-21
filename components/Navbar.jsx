'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.xPaddings} w-full relative py-8 fixed top-0 z-10`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <div className="flex flex-row">
        <h2 className="font-extrabold test-[24px] text-white leading-[30px]">
          TONANIMAL
        </h2>
        <img className="w-[30px] ml-2" src="/toncoin-logo.png" alt="logo" />
      </div>
      <div className="flex flex-row mr-4">
        <a href="#explore" className="font-extrabold test-[24px] text-white leading-[30px] cursor-pointer md:block hidden">
          About TonAnimal
        </a>
        {/* <a href="#explore" className="font-extrabold test-[24px] text-white leading-[30px] cursor-pointer">
          Characters
        </a> */}
      </div>
      {/* <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" /> */}
      <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain right-0" />
    </div>
  </motion.nav>
);

export default Navbar;
