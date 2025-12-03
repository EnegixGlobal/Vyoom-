import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, CircleDot, Linkedin } from "lucide-react";


export default function Footer({ setPage }){
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        duration: 0.4,
        bounce: 0.2,
        delay: 0,
      }}
      className="w-full bg-[#faf6f2] text-black py-24"
    >
      <div className="w-full px-4 md:px-16">

        <h1
          className="
            font-semibold leading-none tracking-widest text-center
            text-[clamp(60px,22vw,350px)]
            mx-auto w-full
          "
        >
          VYOOM
        </h1>

        <div className="mt-16 grid md:grid-cols-4 gap-10 text-lg">

          {/* Email + Social */}
          <div>
            <p className="text-gray-700 mb-4">vyoom.info@gmail.com</p>
            <p className="text-gray-600 mb-2">Follow us on social media</p>

            <div className="flex gap-4 text-2xl">

              <div className="p-3 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-800">
               <link></link> <Facebook size={22} />
              </div>

              <div className="p-3 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-800">
                <Twitter size={22} />
              </div>

              <div className="p-3 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-800">
                <CircleDot size={22} />
              </div>

              <div className="p-3 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-800">
                <Linkedin size={22} />
              </div>

            </div>
          </div>

          {/* Menu */}
          <div>
  <ul className="leading-9">
    <li
      className="hover:text-gray-500 cursor-pointer"
      onClick={() => setPage("home")}
    >
      Home
    </li>

    <li
      className="hover:text-gray-500 cursor-pointer"
      onClick={() => setPage("about")}
    >
      About
    </li>

    <li
      className="hover:text-gray-500 cursor-pointer"
      onClick={() => setPage("service")}
    >
      Services
    </li>

    <li
      className="hover:text-gray-500 cursor-pointer"
      onClick={() => setPage("projects")}
    >
      Projects
    </li>

    <li
      className="hover:text-gray-500 cursor-pointer"
      onClick={() => setPage("contact")}
    >
      Contact
    </li>
  </ul>
</div>


          {/* Contact Info */}
          <div>
            <p className="font-medium mb-2">+91 93412 35607</p>
            <p className="text-gray-600 leading-7">
              #23, First Floor, Next to Sultan Travels, Sathgalli Circle, <br />
              Satellite Bus Stand, Ring Road, Mysuru – 570019, Karnataka, India 
            </p>
          </div>

          {/* Hours */}
          <div>
            <p className="font-medium mb-2">OPENING HOURS</p>
            <p className="text-gray-700 leading-7">
              08:30 AM to 06:00 PM <br />
              Monday to Friday
            </p>
          </div>

        </div>

        {/* Bottom Row */}
        <div
          className="
            mt-20 pt-6 
            border-t border-gray-300 
            flex justify-between text-gray-600 text-sm
          "
        >
          <p>© 2025 VYOOM All Rights Reserved</p>
          <p className="cursor-pointer hover:text-black">Terms & Conditions</p>
        </div>

      </div>
    </motion.footer>
  );
}
