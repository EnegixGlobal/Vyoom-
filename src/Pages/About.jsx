import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import bg from "../assets/aboutpagebg.avif";
import About1 from "../assets/about1.avif";
import About2 from "../assets/about2.avif";
import {useNavigate} from "react-router-dom";

// Animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function About() {
  const navigate = useNavigate()
  return (
    <div className="w-full bg-[#faf6f4]">
      {/* ===================== HERO ===================== */}
      <section className="relative h-screen w-full">
        <img
          src={bg}
          alt="About"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-white text-6xl font-bold tracking-[0.25em]"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* ===================== HOW IT STARTED ===================== */}
      <section className="max-w-7xl mx-auto py-28 px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.img
          src={About1}
          alt="Architecture"
          className="rounded-lg shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        />

        {/* Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold tracking-tight">
            HOW IT STARTED
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Founded with a vision to redefine architectural excellence, Vyoom
            began as a small team of passionate designers determined to bring
            fresh thinking to modern real estate. What started as a shared dream
            has now grown into a forward-thinking architectural practice known
            for its innovative approach, thoughtful aesthetics, and commitment
            to sustainability.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Every project begins with meticulous attention to detail, a deep
            understanding of client needs, and an unwavering dedication to
            quality.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, Vyoom continues to break boundaries, delivering spaces that
            are globally inspired yet rooted in purpose, elegance, and timeless
            design philosophy.
          </p>
        </motion.div>
      </section>

      {/* ===================== SECOND IMAGE SECTION ===================== */}
      <section className="max-w-6xl mx-auto px-8 pb-28">
        <motion.img
          src={About2}
          alt="Interior"
          className="w-full rounded-lg shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        />
      </section>

      {/* ===================== STATS SECTION ===================== */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 text-center gap-10"
        >
          <div>
            <h3 className="text-3xl font-bold">5%</h3>
            <p className="text-gray-500">Good Reviews</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">300+</h3>
            <p className="text-gray-500">Satisfied Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-gray-500">Good Reviews</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">620+</h3>
            <p className="text-gray-500">Completed Projects</p>
          </div>
        </motion.div>
      </section>

      {/* ===================== VALUES ===================== */}
      <section className="max-w-7xl mx-auto px-8 py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-semibold mb-4">OUR VALUES</h2>
          <p className="text-gray-600 max-w-xl">
            Pushing creative boundaries to explore new architectural
            possibilities and shape the future of modern design.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {[
            {
              title: "Authenticity",
              text: "We believe in creating meaningful spaces built with purpose and integrity. Transparency, honesty, and true craftsmanship reflect in every detail.",
            },
            {
              title: "Artisanship",
              text: "Our designs balance creativity with precision. Every space is crafted with detailed workmanship, architectural clarity, and innovative thinking.",
            },
            {
              title: "Sustainability",
              text: "We are committed to building timeless environments that honor people and the planet through healthier materials and smart resource use.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.2 }}
              className="p-10 rounded-xl bg-white shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="w-full bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-black text-white px-8 md:px-16 py-16 md:py-24 relative overflow-hidden">
            <h1 className="font-mona font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight max-w-3xl">
              Let’s build your <br /> extraordinary vision
            </h1>

            <p className="font-mona text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mt-8">
              Turn your vision into reality with our expertise in architecture
              and design. Connect with us today and take the first step toward
              your dream space.
            </p>

            {/* MOBILE BUTTON INSIDE NORMAL FLOW */}
            <div className="mt-10 md:hidden">
              <button className="font-mona bg-white text-black px-8 py-4 rounded-full text-base shadow-sm hover:scale-[1.04] transition-all duration-300">
                Start your project →
              </button>
            </div>

            {/* DESKTOP BUTTON ABSOLUTE */}
            <div className="hidden md:block absolute bottom-16 right-16" onClick={() => navigate("/contact")}>
              <button className="font-mona bg-white cursor-pointer text-black px-10 py-4 rounded-full text-lg shadow-sm hover:scale-[1.04] transition-all duration-300">
                Start your project →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
