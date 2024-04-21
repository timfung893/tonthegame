/* eslint-disable react/jsx-indent */

'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, position, stats, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    {title === 'Unknown' ? <span className={`${active === id ? 'text-[100px] mb-' : 'text-[50px]'} text-white font-bold sm:text-[190px]`}>?</span>
      : (
      <img src={imgUrl} alt={title} className={`${id === 'character-1' && active === id ? 'sm:object-contain object-contain' : 'sm:object-cover object-contain'} 
        absolute w-full h-full rounded-[24px]`}
      />
      )}

    { active !== id ? (
      <h3 className="hidden sm:show font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-[30px] sm:p-2 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white flex flex-row mb-[16px]">
          <span className={`${styles.flexCenter} w-[55px] h-[55px] glassmorphism rounded-[12px] text-white font-bold mr-2`}>{position} </span>
          <span className={`${styles.flexCenter}`}>{title}</span>
        </h2>
        {stats.length > 0 ? stats.map((stat) => (
            <div className="flex text-white">
              <p className="font-normal text-[16px] leading-[20.16px] text-white">{stat}</p>
            </div>
        ))
          : ''}
      </div>
    )}
  </motion.div>

);

export default ExploreCard;
