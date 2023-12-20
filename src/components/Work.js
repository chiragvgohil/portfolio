import React from 'react';

import {  motion} from "framer-motion";
import {fadeIn} from "../variants";

import   image1 from "../assets/portfolio-img1.png";
import   image2 from "../assets/portfolio-img2.png";
import   image3 from "../assets/portfolio-img3.png";



const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-1 gap-y-12 flex-col mb-10 lg:mb-0"
          >
            <div>
              <h2 className="text-accent text-[40px] font-bold">
                My latest <br />
                work.
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                accusantium reiciendis quisquam eos beatae obcaecati deserunt
                perferendis dolor .
              </p>
              <button className="btn btn-sm mb-9">View all Projects</button>
            </div>
            <div className="relative group overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={image1}
                  alt=""
                />
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient   ">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">project title</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 flex flex-col gap-y-10"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="relative group overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={image2}
                  alt=""
                />
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient   ">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">project title</span>
              </div>
            </div>

            <div className="relative group overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={image3}
                  alt=""
                />
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient   ">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">project title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
