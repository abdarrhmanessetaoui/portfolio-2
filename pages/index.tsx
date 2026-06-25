import styles from "@styles/Home.module.css";
import { motion } from "framer-motion";
import {
  slideUp,
  slideToRight,
  slideToLeft,
  slideDown,
  fadeIn,
} from "@helpers/animation";
import Link from "next/link";
import MetaTags from "@components/MetaTags";
import Shape from "@components/Shape";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/abdarrhmanessetaoui", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/abderrahman-settaoui/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/abdarrhmane.settaoui/", label: "Instagram" },
  { icon: FaFacebookF, href: "https://www.facebook.com/abdarrhmane.settaoui", label: "Facebook" },
  { icon: FaWhatsapp, href: "https://wa.me/212600000000", label: "WhatsApp" },
];


const Home = () => {
  return (
    <>
      <MetaTags title="Abderrahman Settaoui | Full Stack Web Developer" />
      <section className="relative overflow-hidden min-h-screen w-full flex items-center md:pt-0 pt-16 dark:bg-dark-theme">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0.6}
          className="absolute z-20 bottom-0 px-2 xl:hidden font-main uppercase font-black text-gray-300 dark:text-dark-gray   md:text-7xl text-5xl"
        >
          full-stack
        </motion.h1>
        <div className="relative max-w-screen-lg px-2 w-full mx-auto">
          <div className="md:grid md:grid-cols-auto-2 xl:gap-0 md:gap-12 gap-4 items-center">
            <div className="flex flex-col items-start">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={slideToLeft}
                custom={0.3}
                className="lg:text-4xl md:text-2xl text-2xl md:leading-normal dark:text-gray-100 font-black font-main text-black uppercase tracking-wide"
              >
                <span className="text-primary md:whitespace-nowrap">Abderrahman Settaoui</span> <br />
                <div className="text-lg md:text-xl lg:text-2xl mt-2 md:mt-4 block text-gray-800 dark:text-gray-200 font-bold">
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Web Developer",
                        "React Developer",
                        "Laravel Developer",
                        "WordPress Developer",
                        "Passionate about Cloud Computing"
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 60,
                      deleteSpeed: 30,
                      cursor: "<span class='text-primary'>|</span>"
                    }}
                  />
                </div>
              </motion.h1>
              <Link href="/work">
                <motion.button
                  initial="hidden"
                  animate="visible"
                  variants={slideUp}
                  whileTap={{ scale: 0.9 }}
                  custom={0.6}
                  className={`${styles.btn} focus:outline-none mt-8 place-self-start relative self-start align-start px-6 py-2 font-semibold text-md font-main capitalize rounded bg-primary`}
                >
                  <a>view work</a>
                </motion.button>
              </Link>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideUp}
                custom={0.9}
                className="flex items-center gap-4 mt-6"
              >
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_12px_rgba(255,140,0,0.4)]"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </motion.div>
            </div>
            <div className="md:space-x-16 justify-center items-center md:flex">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideToRight}
                custom={0.3}
              >
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    borderRadius: [
                      "60% 40% 30% 70% / 60% 30% 70% 40%",
                      "30% 70% 70% 30% / 30% 30% 70% 70%",
                      "60% 40% 30% 70% / 60% 30% 70% 40%"
                    ]
                  }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="p-2 md:p-3 bg-primary shadow-[0_0_30px_rgba(255,140,0,0.4)]"
                >
                  <motion.img
                    animate={{
                      borderRadius: [
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                        "30% 70% 70% 30% / 30% 30% 70% 70%",
                        "60% 40% 30% 70% / 60% 30% 70% 40%"
                      ]
                    }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-56 h-56 md:w-72 md:h-72 object-cover border-4 border-white dark:border-dark-theme"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUp}
          custom={0.6}
          className="absolute -bottom-10 xl:left-12 right-0 w-20 bg-cover h-20 dark:filter  dark:invert"
        >
          <Shape />
        </motion.div>
      </section>
    </>
  );
};

export default Home;
