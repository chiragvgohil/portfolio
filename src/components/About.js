import React from 'react';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import image from '../assets/about.png'

const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return <section id='about' className='section' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'}   className=' bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'> <img src={image} alt="" /></motion.div>
        <motion.div variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'}  >
          <h2 className=' text-[40px] font-bold text-accent'>About Me.</h2>
          <h3 className='capitalize text-[30px] font-bold mb-4'>I am a Freelance front-end developer with over 5 years of expedience.  </h3>
          <p className='mb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis earum doloribus eligendi ipsum voluptates aliquid ducimus ut! .</p>

          {/* state */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2' >
                {inView ? <CountUp start={0} end={13} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>years of <br />experience</div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2' >
                {inView ? <CountUp start={0} end={15} duration={3} /> : null}k+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Projects <br />completed</div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2' >
                {inView ? <CountUp start={0} end={12} duration={3} /> : null}k+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>satisfied <br />client</div>
            </div>
          </div>

          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact me</button>
            <a href="#" className='text-gradient btn-link'>My Portfolio</a>
          </div>

        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
