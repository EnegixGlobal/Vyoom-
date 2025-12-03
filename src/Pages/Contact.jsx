import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerParent = {
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function Contact() {
  return (
    <div className="w-full bg-black pt-32 pb-0 font-mona">

      {/* ===== PAGE TITLE ===== */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-white text-6xl md:text-[110px] font-semibold max-w-7xl mx-auto px-6"
      >
        Get in Touch
      </motion.h1>

      {/* ===== WHITE SECTION ===== */}
      <div className="w-full bg-[#f8f4ef] mt-20 py-24">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20"
        >

          {/* ========= LEFT FORM ========= */}
          <motion.div
  id="contact-form"
  variants={fadeUp}
  className="bg-white rounded-xl p-10 shadow-xl border border-gray-200"
>
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[15px] block mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="Adam"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[15px] block mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Smith"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-6">
              <label className="text-[15px] block mb-2">Email</label>
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="text-[15px] block mb-2">Your Message</label>
              <textarea
                placeholder="Write your message"
                className="w-full border border-gray-300 p-3 rounded-md h-40 resize-none focus:outline-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 bg-black text-white w-[150px] py-3 rounded-full hover:bg-[#b87f3a] transition"
            >
              Submit
            </motion.button>
          </motion.div>

          {/* ========= RIGHT INFO ========= */}
          <motion.div variants={fadeUp} className="flex flex-col justify-between pt-4">
            <div>

              <div className="flex items-center gap-4 mb-6">
                <FiMail className="text-2xl text-black" />
                <p className="text-lg text-black">vyoom.info@gmail.com</p>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <FiPhone className="text-2xl text-black" />
                <p className="text-lg text-black">+91 93412 35607</p>
              </div>

              <div className="flex items-center gap-4 mb-12">
                <FiMapPin className="text-2xl text-black" />
                <p className="text-lg text-black max-w-md leading-relaxed">
                  #23, First Floor, Next to Sultan Travels, Sathgalli Circle,
                  Satellite Bus Stand, Ring Road, Mysuru – 570019, Karnataka, India
                </p>
              </div>

              <h3 className="text-2xl font-semibold mb-3">Need Help?</h3>
              <p className="text-gray-700 text-[15px] leading-relaxed max-w-md">
                Our design process begins with an in-depth consultation to understand 
                your vision, lifestyle needs, and functional requirements. We then 
                conceptualize multiple creative solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= CTA SECTION ================= */}
      <section className="w-full bg-black text-white py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto relative">

          <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.15] max-w-3xl">
            Let’s build your <br /> extraordinary vision
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mt-8">
            Turn your ideas into reality with our expert design and architectural solutions.
          </p>

          {/* Mobile Button */}
          <div className="mt-10 md:hidden">
            <a href="/contact#contact-form">
              <button className="bg-white text-black px-8 py-4 rounded-full text-base shadow-sm hover:scale-[1.04] transition-all">
                Start your project →
              </button>
            </a>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block absolute bottom-10 right-10">
            <a href="/contact#contact-form">
              <button className="bg-white text-black px-10 py-4 rounded-full text-lg shadow-sm hover:scale-[1.04] transition-all">
                Start your project →
              </button>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
