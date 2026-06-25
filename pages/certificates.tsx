import { list, itemSlideUp } from "@helpers/animation";
import { motion } from "framer-motion";
import Heading from "@components/Heading";
import MetaTags from "@components/MetaTags";
import Image from "next/image";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const certificates = [
  {
    id: "cert-1",
    name: "Introduction to Software Engineering",
    issuer: "Coursera",
    img: "/certificate.png",
    link: "https://www.coursera.org/account/accomplishments/verify/9EK6VTNJJPGC",
  },
  {
    id: "cert-2",
    name: "Laravel From Scratch",
    issuer: "Coursera",
    img: "/certificate2.png",
    link: "https://www.coursera.org/account/accomplishments/verify/4EI44LTYK8MM",
  },
];

const Certificates = () => {
  return (
    <>
      <MetaTags title="Certificates | Abderrahman Settaoui" />
      <section className="dark:bg-dark-theme relative overflow-hidden min-h-screen flex items-center py-28">
        <div className="max-w-screen-lg mx-auto w-full px-2">
          <Heading heading="certificates" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3"
          >
            {certificates.map(({ id, name, issuer, img, link }) => (
              <motion.div variants={itemSlideUp} key={id}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={img}
                    width={345}
                    height={216}
                    layout="responsive"
                    className="rounded"
                    alt={name}
                  />
                </a>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-main text-md font-bold capitalize dark:text-gray-100">
                      {name}
                    </h4>
                    <span className="text-xs text-primary font-semibold font-main">
                      {issuer}
                    </span>
                  </div>
                  <div className="flex space-x-4 dark:text-gray-100">
                    <a href={link} rel="noopener noreferrer" target="_blank">
                      <FontAwesomeIcon className="w-4" icon={faExternalLinkAlt} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Certificates;
