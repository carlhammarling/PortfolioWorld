import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.scss";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";
import cleanShirt from "../../assets/cleanshirt.jpg";
import HealthWeekly from "../../assets/HealthWeekly.png";
import CMS from "../../assets/CMS.jpg";
import portfolio from "../../assets/portfolio.jpg";

const Projects = () => {
  const [projNav, setProjNav] = useState("0");

  //Array of all projects
  const [projectsArray, setProjectsArray] = useState([
    {
      title: "Clean Shirt",
      intro: " - Fullstack MERN application.",
      description:
        "Fully functional E-Commerce website where you can view products, complete purchases, register users browse orders and even write reviews.",
      tech: "REACT - MONGODB - SASS - NODE.JS",
      link: "https://cleanshirt.carlhammarling.com/",
      gitrep: "https://github.com/carlhammarling/CleanShirtReact",
      projectImg: cleanShirt,
    },
    {
      title: "Health Weekly",
      intro: " - UX/UI research project.",
      description:
        "Thrue interviews, and by researching other food delivery apps I  created this app.",
      tech: "FIGMA - INTERVIEWS",
      link: "https://www.figma.com/file/kMdeUZuk9lGpsTvCicWwKT/Health-Weekly?type=design&node-id=0-1&mode=design&t=8dTUPSjS22dg3rGI-0",
      gitrep: "https://github.com/carlhammarling/HealthWeekly",
      projectImg: HealthWeekly,
    },
    {
      title: "CMS - system",
      intro: " - Fullstack CMS-system.",
      description:
        "A CMS-System where you can add and edit products, view orders and change statuses.",
      tech: "REACT - MONGODB - SASS - NODE.JS",
      link: "https://github.com/carlhammarling/ReactCMS",
      gitrep: "https://github.com/carlhammarling/ReactCMS",
      projectImg: CMS,
    },
    {
      title: "Portfolio",
      intro: " - React portfolio.",
      description:
        "My goal with this portfolio was to create a creative yet simple design with a unique navigation and reusable components.",
      tech: "REACT - SASS - FRAMER MOTION",
      link: "https://tiny-salamander-617011.netlify.app/",
      gitrep: "https://github.com/carlhammarling/PortfolioWorld",
      projectImg: portfolio,
    },
  ]);

  return (
    <motion.div className="projects">
      <div className="projectsH2">
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1200, damping: 5 }}
        >
          P
        </motion.h2>
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1200, damping: 5 }}
        >
          r
        </motion.h2>
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1200, damping: 5 }}
        >
          o
        </motion.h2>
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1200, damping: 5 }}
        >
          j
        </motion.h2>
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1200, damping: 5 }}
        >
          e
        </motion.h2>
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1200, damping: 5 }}
        >
          c
        </motion.h2>
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1200, damping: 5 }}
        >
          t
        </motion.h2>
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1200, damping: 5 }}
        >
          s
        </motion.h2>
      </div>
      <p>
        <span>A selection of projects </span>
        I've been working on lately.
      </p>
      <motion.div
        className="cardCaroussel"
        drag
        dragSnapToOrigin
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      >
        {/* Maps out a navigation for each Projecct in the array */}
        <ul className="projectNav">
          {projectsArray &&
            projectsArray.map((oneProject, index) => (
              <button
                key={oneProject.index}
                className={projNav === index.toString() ? "active" : ""}
                onClick={() => setProjNav(index.toString())}
              >
                {(index + 1).toString()}
              </button>
            ))}
        </ul>

        {/* Maps out the project which index was selected */}
        <ProjectCard
          key={projectsArray[projNav].index}
          title={projectsArray[projNav].title}
          intro={projectsArray[projNav].intro}
          description={projectsArray[projNav].description}
          tech={projectsArray[projNav].tech}
          link={projectsArray[projNav].link}
          gitrep={projectsArray[projNav].gitrep}
          projectImg={projectsArray[projNav].projectImg}
        />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
