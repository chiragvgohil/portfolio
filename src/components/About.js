import React from 'react';
import CountUp from "react-countup";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";

const About = () => {
  return <section id='about' className='section' >
    <div className='container mx-auto'>
      <div>
        <div className=''>img</div>
        <div>text</div>
      </div>
    </div>
  </section>;
};

export default About;
