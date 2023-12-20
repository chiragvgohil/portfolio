import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
// import { image} from "../assets/services.png";

const services = [
  {
    name: 'UI/UX Design',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis earum doloribus eligendi  .',
    link: 'Learn more',

  },

  {
    name: 'Development',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis earum doloribus eligendi  .',
    link: 'Learn more',

  },

  {
    name: 'Digital Marketing',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis earum doloribus eligendi  .',
    link: 'Learn more',

  },

  {
    name: 'Product Branding',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis earum doloribus eligendi  .',
    link: 'Learn more',

  }
]

const Services = () => {
  return <section id='services' className='section'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'> 
        {/* text */}
        <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='text-accent font-bold  text-[40px] mb-6'>What I Do.</h2>
          <h3 className='capitalize font-bold  text-[30px]  max-w-[455px] mb-16'>I am a Freelance front-end developer with over 5 years of expedience.  </h3>
          <button className='btn btn-sm'>see my work</button>
        </motion.div>
        {/* services */}
        <motion.div variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
          {
            services.map((service, index) => {
              const { name, description, link } = service;
              return <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] font-primary tracking-wider mb-6 font-semibold'>{name}</h4>
                  <p className='font-secondary leading-tight '>{description}</p>
                  </div>
                <div className='flex flex-1 flex-col items-end'>
                  <a href="#" className='btn w-9 h-9 mb-[42px] justify-center items-center flex'><BsArrowUpRight /></a>
                  <a href="#" className='text-gradient text-sm'>{ link}</a>
                  </div>
              </div>
            })
          }
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
