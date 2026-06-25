import MetaTags from "@components/MetaTags";
import { item, list, slideDown, slideToLeft } from "@helpers/animation";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    ],
  },
];

const Skills = () => {
  return (
    <>
      <MetaTags title="Skills" />
      <section className="min-h-screen flex items-center pt-28 pb-16 overflow-hidden dark:bg-dark-theme">
        <div className="max-w-screen-lg mx-auto px-4 w-full">
          {/* Page heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={slideDown}
            className="sm:text-7xl text-5xl font-main dark:text-gray-100 font-black uppercase mb-16"
          >
            My Skills
            <br />
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
          </motion.h1>

          {/* Skill groups */}
          <div className="space-y-14">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial="hidden"
                animate="visible"
                variants={slideToLeft}
                custom={gi * 0.2}
              >
                <h2 className="text-xl font-main font-black uppercase text-primary mb-6 tracking-widest">
                  {group.category}
                </h2>
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={list}
                  className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8"
                >
                  {group.skills.map((skill, i) => (
                    <motion.li
                      variants={item}
                      key={`${skill.name}-${i}`}
                      className="flex flex-col items-center gap-3 group"
                      title={skill.name}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-28 h-28 object-contain transition-transform duration-200 group-hover:scale-110 group-hover:drop-shadow-xl"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      <span className="text-sm text-center font-semibold text-gray-600 dark:text-gray-400 leading-tight">
                        {skill.name}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
