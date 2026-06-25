import MetaTags from "@components/MetaTags";
import { slideDown, slideToLeft } from "@helpers/animation";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <MetaTags title="About Me | Abderrahman Settaoui" />
      <section className="min-h-screen flex items-center pt-28 overflow-hidden dark:bg-dark-theme">
        <div className="max-w-screen-lg mx-auto xl:flex xl:justify-between xl:space-x-10 px-2">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={slideDown}
            className="sm:text-7xl text-5xl font-main dark:text-gray-100 font-black uppercase mb-12 xl:mb-0"
          >
            About <br />
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative inline-block w-32 mr-4 h-4 bg-gray-200 dark:bg-dark-gray"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute bottom-full w-16 h-4 bg-primary"
              ></motion.span>
            </motion.span>
            Me
          </motion.h1>
          <div>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={slideToLeft}
              custom={0.3}
              className="text-main font-semibold text-lg leading-relaxed text-gray-800 dark:text-gray-200 mb-6"
            >
              Hi, I'm <span className="text-primary font-bold">Abderrahman Settaoui</span>, a 22 year old Full Stack Web Developer based in Marrakech, Morocco.
              <br /><br />
              My journey into web development started with a simple curiosity about how websites are built, and the more I explored, the more I fell in love with the craft. Since then, I've been learning, experimenting, and building projects that push me to grow every day.
              <br /><br />
              I enjoy working across the full stack, from designing clean, intuitive interfaces to building the logic that powers them behind the scenes. For me, it's never just about writing code; it's about creating something that works seamlessly and feels great to use.
              <br /><br />
              My goal is to keep improving, take on meaningful projects, and become a developer who builds things that make a real difference. I'm always looking for new challenges and opportunities to grow.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
