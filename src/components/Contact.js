import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section id="contact" className="py-15 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <div>
              <h4 className="text-xl text-accent text-medium mb-2 tracking-wide ">
                Get in touch
              </h4>
              <h2 className="uppercase text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br />
                together!
              </h2>
            </div>
          </motion.div>

          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 border rounded-2xl pb-24 flex flex-col items-start  gap-y-6 p-6"
          >
            <input
              type="text "
              placeholder="Your name"
              className="bg-transparent border-b outline-none focus:border-accent placeholder:text-white w-full py-3 transition-all "
            />
            <input
              type="email "
              required
              placeholder="Your email"
              className="bg-transparent border-b outline-none focus:border-accent placeholder:text-white w-full py-3 transition-all "
            />
            <textarea
              placeholder="Your massage"
              className="pl touch-pan-left bg-transparent resize-none mb-12  border-b outline-none focus:border-accent placeholder:text-white w-full py-12 transition-all "
            ></textarea>
            <button className="btn btn-lg">Send massage </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
