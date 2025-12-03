import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

// ========================== IMPORT ASSETS ==========================
// Background video
import bgVideo from "../assets/bgvideo.mp4";

// Section images
import section2Img from "../assets/Vidnoye.jpeg";
import villasImg from "../assets/villas.jpg";

// Sample images for services
import sample1 from "../assets/sample1.avif";
import sample2 from "../assets/sample2.avif";
import sample3 from "../assets/sample3.avif";
import sample4 from "../assets/sample4.jpeg";

// Work images for the portfolio section
import work1 from "../assets/work1.avif";
import work2 from "../assets/work2.jpeg";
import work3 from "../assets/work3.jpeg";
import work4 from "../assets/work4.avif";

// Full-width section image
import sectionImg from "../assets/sample4.jpeg";

// Choose us image
import chooseUsImg from "../assets/work3.jpeg";

// Reviewer images for success stories
import reviewer1 from "../assets/client1.jpeg";
import reviewer2 from "../assets/client2.jpeg";
import reviewer3 from "../assets/client3.jpeg";
import reviewer4 from "../assets/client4.jpeg";

// Array of work images for sliding animation
const workImages = [work1, work2, work3, work4];

export default function Home() {
  const navigate = useNavigate();

  // ========================== SERVICES DATA ==========================
  const services = [
    {
      title: "Urban Development",
      description:
        "Designing sustainable and future-ready cityscapes for modern living.",
      bigImage: villasImg,
      thumbs: [villasImg, section2Img],
    },
    {
      title: "Luxury Villas",
      description:
        "Modern, elegant, and perfectly crafted premium villas for high-end living.",
      bigImage: sample1,
      thumbs: [sample1, sample2],
    },
    {
      title: "Interior Design",
      description: "Creating visually stunning and functional interior spaces.",
      bigImage: sample3,
      thumbs: [sample3, sample4],
    },
    {
      title: "Landscape Architecture",
      description:
        "Beautiful outdoor environments designed for harmony and sustainability.",
      bigImage: sample2,
      thumbs: [sample2, sample1],
    },
  ];

  // ========================== SERVICE SLIDER STATE ==========================
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % services.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + services.length) % services.length);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % services.length);
    }, 4000);
    return () => clearInterval(id);
  }, [services.length]);

  const active = services[current];

  // Split title for styling: first word and the rest
  const [firstWord = "", ...restWords] = active.title.split(" ");
  const restTitle = restWords.join(" ");

  // ========================== ACCORDION STATE ==========================
  const [activeAccordion, setActiveAccordion] = useState(null);

  // ========================== SUCCESS STORIES DATA ==========================
  const successStories = [
    {
      stars: 5,
      review: "Excellent work! Transforming our space beyond imagination.",
      name: "John Doe",
      image: reviewer1,
    },
    {
      stars: 4,
      review: "Professional, timely, and creative solutions.",
      name: "Jane Smith",
      image: reviewer2,
    },
    {
      stars: 5,
      review: "Our dream project executed flawlessly.",
      name: "Michael Lee",
      image: reviewer3,
    },
    {
      stars: 5,
      review: "Our dream project executed flawlessly.",
      name: "Michael Lee",
      image: reviewer3,
    },
    {
      stars: 5,
      review: "Our dream project executed flawlessly.",
      name: "Michael Lee",
      image: reviewer3,
    },
    {
      stars: 5,
      review: "Our dream project executed flawlessly.",
      name: "Michael Lee",
      image: reviewer3,
    },
  ];

  // ========================== SUCCESS STORIES SLIDER STATE ==========================
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () =>
    setCurrentReview((prev) => (prev + 1) % successStories.length);

  const prevReview = () =>
    setCurrentReview(
      (prev) => (prev - 1 + successStories.length) % successStories.length
    );

  // ========================== SCROLL / PARALLAX HOOKS ==========================
  // optional: small parallax for hero & bg
  const { scrollY } = useScroll();
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.06]);
  const heroY = useTransform(scrollY, [0, 600], [0, -60]);

  // ========================== STATS (DYNAMIC COUNT) ==========================
  const stats = [
    { value: 8, suffix: "+", text: "Years in the Industry" },
    { value: 100, suffix: "%", text: "Client Satisfaction" },
    { value: 200, suffix: "+", text: "Completed Projects" },
    { value: 30, suffix: "+", text: "Expert Landscapers" },
  ];

  function StatCard({ value, suffix, text, delay = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-10px" });
    const controls = useAnimation();
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0 });
        // animate number with requestAnimationFrame
        // eslint-disable-next-line no-unused-vars
        let start = 0;
        const duration = 1400; // ms
        const startTs = performance.now();
        const step = (ts) => {
          const progress = Math.min(1, (ts - startTs) / duration);
          const current = Math.floor(progress * value);
          setCount(current);
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setCount(value);
          }
        };
        requestAnimationFrame(step);
      }
    }, [inView, value, controls]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6, delay }}
        className="bg-[#100f5a] text-white rounded-xl py-12 text-center shadow-lg"
      >
        <h2 className="text-4xl font-semibold mb-2">
          {count}
          {suffix}
        </h2>
        <p className="text-lg opacity-90">{text}</p>
      </motion.div>
    );
  }

  // ========================== VARIANTS / HELPERS ==========================
  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
  };

  // ========================== RENDER ==========================
  return (
    <div className="font-sans text-gray-900 relative w-full overflow-x-hidden">
      {/* ========================== FIXED BACKGROUND VIDEO ========================== */}
      <motion.div
        className="fixed inset-0 -z-10 overflow-hidden"
        style={{ scale: bgScale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35 pointer-events-none"></div>
      </motion.div>

      {/* ==========================Section 1. HERO SECTION ========================== */}
      <motion.section
        className="
    min-h-screen flex flex-col md:flex-row items-center 
    px-6 md:px-24 text-white justify-center md:justify-start gap-10 
    pt-[calc(80px+env(safe-area-inset-top))] md:pt-32 pb-20
  "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div
          className="max-w-xl text-center md:text-left"
          style={{ y: heroY }}
          variants={sectionVariant}
          transition={{ duration: 0.9 }}
        >
          <motion.p
            className="text-sm md:text-lg mb-3 opacity-95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            ⭐⭐⭐⭐⭐ 100+ 5 Star Rating
          </motion.p>

          <motion.h1
            className="text-3xl md:text-5xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Your trusted partner for exceptional landscaping
          </motion.h1>

          <motion.p
            className="text-sm md:text-lg leading-relaxed mb-6 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            We provide complete, reliable, and affordable landscaping solutions
            across the USA — from design to maintenance.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black px-6 py-2 rounded-full text-base font-medium hover:bg-gray-200 transition"
          >
            Work with us →
          </motion.button>
        </motion.div>
      </motion.section>

      {/* ========================== SECTION 2: INTRODUCTION ========================== */}
      <motion.section
        className="w-full bg-[#f7f3ef] py-20 px-6 md:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.h2
            className="text-4xl md:text-[88px] font-semibold leading-[1.1] text-black"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your True Home <br />
            <span className="inline-block mt-2 text-lg md:text-5xl opacity-70">
              ___ That Inspires
            </span>
          </motion.h2>

          <motion.div
            className="flex flex-col items-center text-center md:text-left md:items-start"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <motion.img
              src={section2Img}
              className="w-32 h-32 object-cover mb-4 rounded-md"
              whileHover={{ scale: 1.04 }}
            />
            <p className="text-gray-700 text-base leading-relaxed max-w-sm">
              Crafting visionary spaces with precision and artistry.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ========================== SECTION 3: FEATURED PROJECT ========================== */}
      <section className="relative w-full min-h-[80vh] md:min-h-[70vh]">
        {/* VIDEO BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <video
            className="w-full h-[80vh] md:h-screen  object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Placeholder divs for desktop spacing */}
        <div className="hidden md:flex w-full">
          <div className="w-1/2 h-[650px] opacity-0" />
          <div className="w-1/2 h-[650px] opacity-0" />
        </div>

        {/* FLOATING CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="
      absolute left-1/2 top-[30%]
      md:left-[28%] md:top-1/2 md:translate-y-[-55%]
      -translate-x-1/2
      bg-white shadow-2xl p-6 md:p-10
      w-[85%] sm:w-[350px] md:w-[320px]
      text-center md:text-left
    "
        >
          <h3 className="text-2xl font-semibold mb-3">Eco Retreats Villas</h3>
          <p className="text-4xl font-semibold mb-3">2024</p>
          <div className="border-t border-gray-300 my-4" />
          <p className="text-xl font-medium mb-5">Luxury</p>
          <a className="text-black underline font-medium text-lg">
            View Project →
          </a>
        </motion.div>
      </section>

      {/* ========================== Section 4 SERVICES SECTION ========================== */}
      <motion.section
        className="w-full bg-[#f7f3ef] px-6 md:px-24 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="flex flex-col lg:flex-row gap-14">
          {/* Left side: Text, buttons, and thumbnails */}
          <motion.div
            className="flex-1"
            variants={sectionVariant}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-black text-sm tracking-[3px] font-semibold mb-3">
              OUR SERVICES
            </h3>
            <motion.h2
              className="text-black font-semibold leading-[1.1] text-4xl md:text-5xl mb-6"
              key={active.title}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {firstWord} <br /> {restTitle}
            </motion.h2>

            {/* Navigation buttons */}
            <div className="flex gap-4 mb-8">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={prevSlide}
                className="text-2xl bg-white/70 p-2 rounded-md"
              >
                ←
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={nextSlide}
                className="text-2xl bg-white/70 p-2 rounded-md"
              >
                →
              </motion.button>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex gap-4 mb-4 md:mb-0">
                {active.thumbs.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    className="w-24 h-24 md:w-28 md:h-28 object-cover shadow"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.35 }}
                  />
                ))}
              </div>
              <p className="text-gray-800 text-base leading-relaxed max-w-60">
                {active.description}
              </p>
            </div>
          </motion.div>

          {/* Right side: Big image */}
          <motion.div
            variants={sectionVariant}
            className="flex-1 h-[450px] md:h-[600px]"
          >
            <motion.img
              src={active.bigImage}
              className="w-full h-full object-cover  shadow-lg"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ==========================Section 5 OUR WORKS / PORTFOLIO ========================== */}
      <motion.section
        className="w-full bg-[#faf6f3] py-20 px-6 md:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <div className="max-w-3xl mb-10">
          <p className="text-xs tracking-[2px] text-gray-700">OUR WORKS</p>
          <h2 className="text-4xl md:text-[56px] font-semibold leading-[1.1] mb-4 text-black">
            Expert Landscaping, <br /> Personalized for You
          </h2>
          <p className="text-gray-700 text-base max-w-2xl">
            At Greenora, we create beautiful, functional outdoor spaces.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            className="mt-6 bg-black text-white px-6 py-2 rounded-full flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/service")}
          >
            Explore →
          </motion.button>
        </div>

        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-6"
            initial={{ x: 0 }}
            whileInView={{ x: [-10, -800] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          >
            {/* Sliding work images */}
            {[...workImages, ...workImages].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                className="w-[240px] md:w-[320px] h-[280px] md:h-[340px] object-cover rounded-md shadow"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.35 }}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ==========================Section 6 STATS SECTION ========================== */}
      <section className="w-full bg-[#faf6f3] py-16 px-6 md:px-24">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {stats.map((s, i) => (
            <StatCard
              key={i}
              value={s.value}
              suffix={s.suffix}
              text={s.text}
              delay={i * 0.08}
            />
          ))}
        </motion.div>
      </section>

      {/* ========================== Section 7 FULL WIDTH IMAGE SECTION ========================== */}
      <motion.section
        className="w-full bg-[#F8F5F2] py-20 px-4 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <div className="relative w-full max-w-6xl overflow-hidden">
          <motion.img
            src={section2Img}
            className="w-full h-[550px] md:h-[650px] object-cover"
            initial={{ scale: 1.02 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.9 }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1
              className="text-white text-[40px] md:text-[56px] font-semibold drop-shadow-xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Build your <br /> sustainable peace
            </motion.h1>
          </div>
        </div>
      </motion.section>

      {/* ==========================Section 8 WHY CHOOSE US ========================== */}
      <motion.section
        className="w-full bg-[#f7f3ef] py-20 px-6 md:px-24 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        {/* Heading at top-left */}
        <h3 className="text-2xl font-normal mb-20 top-6 left-6 md:top-10 md:left-24">
          Why Choose Us
        </h3>

        <div className="flex flex-col md:flex-row items-center gap-12 pt-16 md:pt-0">
          {/* Left side: Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={chooseUsImg}
              className="w-full h-[400px] object-cover shadow"
            />
          </motion.div>

          {/* Right side: Accordion */}
          <div className="flex-1">
            {[
              {
                title: "Experienced Team",
                content: "Our experts have years of hands-on experience.",
              },
              {
                title: "Sustainable Design",
                content:
                  "We prioritize eco-friendly and sustainable solutions.",
              },
              {
                title: "Client-Centric Approach",
                content: "Your satisfaction is our top priority.",
              },
              {
                title: "Client-Centric Approach",
                content: "Your satisfaction is our top priority.",
              },
              {
                title: "Client-Centric Approach",
                content: "Your satisfaction is our top priority.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="mb-4 border-b border-gray-300 pb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full flex justify-between items-center text-left text-lg font-medium"
                  onClick={() =>
                    setActiveAccordion(activeAccordion === i ? null : i)
                  }
                >
                  {item.title}
                  <span className="text-2xl">
                    {activeAccordion === i ? "-" : "+"}
                  </span>
                </button>
                {activeAccordion === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.25 }}
                    className="mt-2 text-gray-700"
                  >
                    {item.content}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="w-full bg-[#F6F2EE] py-20 px-6 md:px-24">
        {/* Tag */}
        <span className="text-gray-600 text-sm font-medium flex items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
          Success Stories
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 leading-tight">
          We build work <br /> that lasts
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 text-base mb-12">
          We’ve partnered with brands <br className="hidden md:block" />
          that share our values of creativity
        </p>

        {/* Review Grid (No carousel for screenshot-accurate layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex text-[#1A1A1A] text-lg mb-4 tracking-wider">
              ★★★★★
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              We came in with a product — they gave us a story. Their ability to
              translate design language into emotion was exactly what we needed.
            </p>

            <div className="flex items-center gap-3">
              <img
                src={reviewer1}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">Natalia Voss</p>
                <p className="text-gray-500 text-sm">Varo Studio</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex text-[#1A1A1A] text-lg mb-4">★★★★★</div>
            <p className="text-gray-700 leading-relaxed mb-6">
              They took our product and gave it a pulse. Every detail felt
              intentional — from the visuals to the voice. It was like working
              with a design partner, not just an agency.
            </p>

            <div className="flex items-center gap-3">
              <img
                src={reviewer2}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">Daniel Rohe</p>
                <p className="text-gray-500 text-sm">AURIX Audio</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm relative">
            <div className="flex text-[#1A1A1A] text-lg mb-4">★★★★★</div>
            <p className="text-gray-700 leading-relaxed mb-6">
              It felt like a creative partnership from day one. The team
              translated our vision into something even more refined than we
              imagined — bold, modern, and beautiful.
            </p>

            <div className="flex items-center gap-3">
              <img
                src={reviewer3}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">Isabelle Marek</p>
                <p className="text-gray-500 text-sm">NOIR COSMETICS</p>
              </div>
            </div>

            {/* Black arrow button inside card */}
            <button className="absolute right-6 bottom-10 bg-[#1A1A1A] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-black transition">
              →
            </button>
          </div>
        </div>
      </section>

      {/* ==========================Section 10 CALL TO ACTION ========================== */}
      <motion.section
        className="w-full bg-white py-44 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <motion.div
          className="w-full max-w-[1200px] bg-black text-white px-6 md:px-12 py-16 flex flex-col md:flex-row items-end gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* Left side: Heading + paragraph (70%) */}
          <div className="flex-3 md:w-[70%]">
            <h3 className="text-4xl md:text-[5.5rem] font-semibold mb-4">
              Let’s build your extraordinary vision
            </h3>
            <p className="text-lg md:text-md md:w-md leading-normal">
              Turn your vision into reality with our expertise in architecture
              and design. Connect with us today and take the first step toward
              your dream space.
            </p>
          </div>

          {/* Right side: Button at bottom right */}
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="font-mona cursor-pointer bg-white text-black px-10 py-4 rounded-full text-lg shadow-sm hover:scale-[1.04] transition-all duration-300"
            >
              Start your project →
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}

