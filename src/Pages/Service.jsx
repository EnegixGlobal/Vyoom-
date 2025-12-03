import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiCalendar, FiUser } from "react-icons/fi";

// IMPORT ASSETS
import bg from "../assets/ourservice.avif";

import service1 from "../assets/servicepg1.webp";
import service2 from "../assets/servicepg2.avif";
import service3 from "../assets/servicepg3.avif";
import service4 from "../assets/servicepg4.avif";

import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";


/* ------------------ PROJECT DETAIL MODAL ------------------ */
const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-4xl w-full overflow-y-auto max-h-[90vh] shadow-2xl relative"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-4 right-6 text-gray-700 hover:text-black text-4xl font-bold z-50"
            >
              &times;
            </button>

            {/* IMAGE */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-[300px] sm:h-[420px] object-cover rounded-t-2xl"
            />

            {/* DETAILS */}
            <div className="p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>

              {/* ICON DETAILS */}
              <p className="text-gray-600 flex flex-wrap gap-6 text-lg mb-6">
                <span className="flex items-center gap-2">
                  <FiMapPin className="text-yellow-600" /> {project.location}
                </span>

                <span className="flex items-center gap-2">
                  <FiCalendar className="text-yellow-600" /> {project.year}
                </span>

                <span className="flex items-center gap-2">
                  <FiUser className="text-yellow-600" /> {project.client}
                </span>
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                {project.longDesc}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};



/* ------------------- ONGOING PROJECTS DATA ------------------- */
const ongoingProjects = [
  {
    id: 1,
    title: "Skyline Residence",
    desc: "Modern luxury redefined through natural light & sustainable design.",
    img: project1,
    location: "Toronto, Canada",
    year: "2024",
    client: "Skyline Developers",
    longDesc:
      "Skyline Residence is a premium luxury home that blends modern architecture with sustainable features. It includes an open-layout interior, panoramic windows, and eco-friendly material choices throughout the structure. With a focus on comfort and elegance, the residence sets a new benchmark for luxury housing.",
  },
  {
    id: 2,
    title: "Horizon Corp Tower",
    desc: "Next-gen office tower blending glass architecture & green systems.",
    img: project2,
    location: "Sydney, Australia",
    year: "2025",
    client: "Horizon Corporation",
    longDesc:
      "Horizon Corp Tower is designed as a high-performance commercial skyscraper featuring energy-efficient façades, flexible office layouts, and integrated smart technologies for improved workplace productivity. Its iconic exterior adds to Sydney’s evolving skyline.",
  },
  {
    id: 3,
    title: "Blue Heights Block",
    desc: "Commercial complex with innovative glass architecture.",
    img: project3,
    location: "Dubai, UAE",
    year: "2023",
    client: "Blue Heights Group",
    longDesc:
      "Blue Heights Block introduces a futuristic commercial architecture style inspired by Dubai’s modern culture. The building includes premium retail spaces, large atriums, and sustainable cooling systems tailored for desert climates.",
  },
  {
    id: 4,
    title: "Waveform Complex",
    desc: "Futuristic mixed-use development with fluid architecture.",
    img: project4,
    location: "London, UK",
    year: "2024",
    client: "Waveform International",
    longDesc:
      "Waveform Complex combines residential, commercial, and cultural spaces under one architectural philosophy. Its fluid wave-like structure represents the motion of modern living, providing a dynamic lifestyle experience.",
  },
];



/* -------------------- COMPLETED PROJECTS (DUMMY FULL DETAILS) -------------------- */
const completedProjects = [
  {
    id: 101,
    title: "Captower",
    location: "Toronto, Canada",
    year: "2023",
    client: "Capstone Builders",
    img: service1,
    longDesc:
      "Captower is a high-rise commercial building that reflects modern minimalistic architecture. Designed with energy-efficient windows and a lightweight steel structure, the tower offers flexible office floors and a panoramic rooftop viewing deck.",
  },
  {
    id: 102,
    title: "Futuraa",
    location: "Sydney, Australia",
    year: "2022",
    client: "Futuraa Corporation",
    img: service2,
    longDesc:
      "Futuraa features a futuristic architectural style combining curved glass façades with smart building automation. The structure includes coworking hubs, a sky-garden, and advanced fire-safety engineering.",
  },
  {
    id: 103,
    title: "Casehouse",
    location: "London, UK",
    year: "2021",
    client: "Casehouse Estates",
    img: service3,
    longDesc:
      "Casehouse is a contemporary residential building focusing on calm natural interiors. With wooden accents, open spaces, and greenery integrated into balconies, it offers a peaceful home environment in the middle of the city.",
  },
  {
    id: 104,
    title: "BrownCrit",
    location: "Melbourne, Australia",
    year: "2023",
    client: "BrownCrit Developers",
    img: service4,
    longDesc:
      "BrownCrit is a commercial block designed with warm earthy tones and textured exterior walls. It includes premium office floors, a conference center, and an innovative cross-ventilation airflow system.",
  },
];



/* --------------------------- MAIN SERVICE PAGE --------------------------- */
export default function Service() {
  const [visible, setVisible] = useState(2);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-screen w-full">
        <img src={bg} alt="Service" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-center"
          >
            Our&nbsp;Service
          </motion.h1>
        </div>
      </section>



      {/* ----------------- COMPLETED PROJECTS ----------------- */}
      <section className="mt-20 md:mt-32 px-5 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
        >
          Completed Projects
        </motion.h2>

        <p className="text-gray-500 text-lg md:text-xl mb-10 md:mb-20">
          SHAPING THE FUTURE, ONE SPACE AT A TIME.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {completedProjects.slice(0, visible).map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              onClick={() => {
                setSelectedProject(p);
                setModalOpen(true);
              }}
              className="cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl shadow-xl">
                <motion.img
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                  src={p.img}
                  alt={p.title}
                  className="w-full h-[240px] sm:h-[330px] md:h-[430px] object-cover rounded-xl"
                />
              </div>

              <div className="flex justify-between items-center mt-6">
                <h3 className="text-2xl sm:text-3xl font-semibold">{p.title}</h3>
                <p className="text-gray-500 text-md sm:text-lg">({p.location})</p>
              </div>
            </motion.div>
          ))}
        </div>

        {visible < completedProjects.length && (
          <div className="flex justify-center mt-12 md:mt-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setVisible(visible + 2)}
              className="px-10 py-4 bg-black text-white text-lg md:text-xl rounded-full shadow-lg"
            >
              Load More
            </motion.button>
          </div>
        )}
      </section>



      <section className="mt-20 md:mt-40 px-5 md:px-20 mb-32">
  <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-12">
    Ongoing Projects
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
    {ongoingProjects.map((p) => (
      <motion.div
        key={p.id}
        className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
        onClick={() => {
          setSelectedProject(p);
          setModalOpen(true);
        }}
      >
        {/* IMAGE */}
        <motion.img
          src={p.img}
          alt={p.title}
          className="w-full h-[300px] md:h-[350px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
        />

        {/* DARK OVERLAY ON HOVER */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* DETAILS OVERLAY */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">{p.title}</h3>
          <p className="flex items-center gap-2 text-yellow-400 text-sm md:text-md">
            <FiMapPin /> {p.location}
          </p>
        </div>

        {/* FLOATING TAG */}
        <span className="absolute top-3 left-3 bg-white/70 text-black px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm">
          In Progress
        </span>
      </motion.div>
    ))}
  </div>
</section>

<ProjectDetailModal
  project={selectedProject}
  isOpen={modalOpen}
  onClose={() => setModalOpen(false)}
/>



      {/* ---------- BLACK CTA BOX ---------- */}
      <section className="w-full bg-white py-20 md:py-32">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    
    <div className="bg-black text-white px-8 md:px-16 py-16 md:py-24 relative overflow-hidden">

      <h1 className="font-mona font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight max-w-3xl">
        Let’s build your <br /> extraordinary vision
      </h1>

      <p className="font-mona text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mt-8">
        Turn your vision into reality with our expertise in architecture and design. 
        Connect with us today and take the first step toward your dream space.
      </p>

      {/* MOBILE BUTTON INSIDE NORMAL FLOW */}
      <div className="mt-10 md:hidden">
        <button className="font-mona bg-white text-black px-8 py-4 rounded-full text-base shadow-sm hover:scale-[1.04] transition-all duration-300">
          Start your project →
        </button>
      </div>

      {/* DESKTOP BUTTON ABSOLUTE */}
      <div className="hidden md:block absolute bottom-16 right-16">
        <button className="font-mona bg-white text-black px-10 py-4 rounded-full text-lg shadow-sm hover:scale-[1.04] transition-all duration-300">
          Start your project →
        </button>
      </div>

    </div>
  </div>
</section>
    </>
  );
}
