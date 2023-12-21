import React from 'react';

import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa';
 import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import Image from "../assets/avatar.svg";


const Banner = () => {
  return <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center '>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:gap-x-12 '>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show' } viewport={{once:false,amount:0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Chirag <span>Gohil</span></motion.h1>
          <motion.div  variants={fadeIn('up',0.4)} initial="hidden" whileInView={'show' } viewport={{once:false,amount:0.7}} className='mb-6 text-[36px] lg:text[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='mr-4  '>I am a <span className='text-accent'>Developer</span> </span>
            
          
          </motion.div>
              <motion.p  variants={fadeIn('up',0.5)} initial="hidden" whileInView={'show' } viewport={{once:false,amount:0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur sunt dolore sequi tempora sit tempore, magni quidem dolorem voluptate exercitationem ullam! Sit maiores animi qui eveniet quidem distinctio minus!</motion.p>
              <motion.div  variants={fadeIn('up',0.6)} initial="hidden" whileInView={'show' } viewport={{once:false,amount:0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                <button className='btn btn-sm'>Contact me </button>
                <a href="#" className='text-gradient btn-link' >My portfolio</a>
              </motion.div>
              <motion.div  variants={fadeIn('up',0.7)} initial="hidden" whileInView={'show' } viewport={{once:false,amount:0.7}} className='flex gap-x-6 text-[20px] max-w-max mx-auto lg:mx-0'>
                <a href="#">
                  <FaGithub/>
                </a>
                  <a href="#">
                  <FaYoutube/>
                </a>
                  <a href="#">
                  <FaDribbble/>
                </a>
              </motion.div>
         </div>

        <motion.div  variants={fadeIn('down',0.5)} initial="hidden" whileInView={'show' }  className='hidden  lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>
          <img src={Image} alt="" />
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
