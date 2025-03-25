import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import {
  github,
  pineapple,
  pineappleHover,
  leftArrow,
  rightArrow,
} from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ProjectCard = ({
  id,
  name,
  category,
  team,
  description,
  images,
  repo,
  demo,
  duration,
  technologies,
  tags,
  index,
  active,
  handleClick,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[70px] 
      h-[480px] cursor-pointer card-shadow overflow-hidden`}
      onClick={() => handleClick(id)}
    >
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"
      ></div>

      {active !== id ? (
        <div className="flex items-center justify-start pr-[8.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[24px] text-timberWolf tracking-[3px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20"
          >
            {name}
          </h3>
        </div>
      ) : (
        <div className="absolute inset-0 flex overflow-hidden rounded-[24px]">
          {/* Slideshow Section */}
          <div className="absolute w-1/2 h-1/2 top-0">
            {images.length > 0 && (
              <>
                <img
                  src={images[currentImageIndex]}
                  alt={`${name} project image ${currentImageIndex + 1}`}
                  className="absolute w-full h-full object-cover"
                />
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 
                      bg-black/20 text-white p-2 rounded-full z-20"
                    >
                      <img src={leftArrow} alt="Previous" className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 
                      bg-black/20 text-white p-2 rounded-full z-20"
                    >
                      <img src={rightArrow} alt="Next" className="w-6 h-6" />
                    </button>
                  </>
                )}
                <div
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 
                flex space-x-2 z-20"
                >
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentImageIndex ? "bg-white" : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Project Info Section */}
          <div className="absolute w-1/2 h-1/2 right-0 p-4 bg-[rgba(50,50,50,0.8)] text-white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{name}</h2>
              {repo !== "#" && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(repo, "_blank");
                  }}
                  className="bg-night w-11 h-11 rounded-full 
                  flex justify-center items-center cursor-pointer
                  opacity-[0.9] z-20"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-4/5 h-4/5 object-contain"
                  />
                </div>
              )}
            </div>

            <div className="mb-4">
              <p className="font-semibold">Category: {category}</p>
              <p className="font-semibold">Team Size: {team} Members</p>
              <p className="font-semibold">Duration: {duration}</p>
              <div>
                <p className="font-semibold">Technologies:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {tags.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 px-2 py-1 rounded-md text-xs"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
              {demo !== "#" && (
                <div className="flex w-full">
                  <button
                    className="live-demo flex 
                text-[14px] text-timberWolf 
                font-bold font-beckman items-center px-3 
                whitespace-nowrap gap-1
                rounded-[10px] glassmorphism mt-1
               hover:bg-battleGray 
                hover:text-eerieBlack transition duration-[0.2s] 
                ease-in-out z-20"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(demo, "_blank");
                    }}
                  >
                    Project Link
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Scrollable Description */}
          <div
            className="absolute bottom-0 left-0 w-full h-1/2 p-4
            bg-jetLight max-h-[250px] overflow-y-auto"
          >
            <ul
              className="text-silver sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px] list-disc pl-2"
            >
              {description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState("project-2");

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
