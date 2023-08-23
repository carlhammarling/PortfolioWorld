import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.scss";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";
import cleanShirt from "../../assets/cleanshirt.jpg";
import HealthWeekly from "../../assets/HealthWeekly.png";
import CMS from "../../assets/CMS.jpg";
import portfolio from "../../assets/portfolio.jpg";

const Projects = () => {
  const title = ["P", "r", "o", "j", "e", "c", "t", "s"];

  const [projNav, setProjNav] = useState("0");

  //Array of all projects
  const [projectsArray, setProjectsArray] = useState([
    {
      title: "Clean Shirt",
      intro: " - Fullstack MERN application.",
      description:
        "Fully functional E-Commerce where you can make purchases, register users, browse orders and review products.",
      tech: (
        <>
          <div>
            <i className="fa-brands fa-react fa-xl"></i>
          </div>
          <div>
            <i className="fa-brands fa-node fa-xl"></i>
          </div>
          <div>
            <i className="fa-brands fa-sass fa-xl"></i>
          </div>
          <img
            className="mongoDb"
            src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress"
            alt=""
          />
        </>
      ),
      link: "https://cleanshirt-backagain.onrender.com/",
      gitrep: "https://github.com/carlhammarling/CleanShirtReact",
      projectImg: cleanShirt,
    },
    {
      title: "Portfolio",
      intro: " - React portfolio.",
      description:
        "My goal with this portfolio was to create a creative yet simple design with a unique navigation and reusable components.",
      tech: (
        <>
          <div>
            <i className="fa-brands fa-react fa-xl"></i>
          </div>
          <div>
            <i className="fa-brands fa-sass fa-xl"></i>
          </div>
          <img
            className="framerMotion"
            src="https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png"
            alt="Framer Motion"
          />
          <div>
            <i class="fa-brands fa-figma fa-xl"></i>
          </div>
        </>
      ),
      link: "https://tiny-salamander-617011.netlify.app/",
      gitrep: "https://github.com/carlhammarling/PortfolioWorld",
      projectImg: portfolio,
    },
    {
      title: "Health Weekly",
      intro: " - UX/UI research project.",
      description:
        "Thrue interviews, and by researching other food delivery apps I  created this app.",
      tech: (
        <>
          <div>
            <i className="fa-brands fa-react fa-xl"></i>
          </div>
          <div>
            <i className="fa-brands fa-sass fa-xl"></i>
          </div>
          <div>
            <i class="fa-brands fa-figma fa-xl"></i>
          </div>
        </>
      ),
      link: "https://www.figma.com/file/kMdeUZuk9lGpsTvCicWwKT/Health-Weekly?type=design&node-id=0-1&mode=design&t=8dTUPSjS22dg3rGI-0",
      gitrep: "https://github.com/carlhammarling/HealthWeekly",
      projectImg: HealthWeekly,
    },
    {
      title: "CMS - system",
      intro: " - Fullstack CMS-system.",
      description:
        "A CMS-System where you can add and edit products, view orders and change statuses.",
      tech: (
        <>
          <div>
            <i className="fa-brands fa-react fa-xl"></i>
          </div>
          <div>
            <i className="fa-brands fa-node fa-xl"></i>
          </div>
          <div>
            <i className="fa-brands fa-sass fa-xl"></i>
          </div>
          <img
            className="mongoDb"
            src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress"
            alt=""
          />
        </>
      ),
      link: "https://github.com/carlhammarling/ReactCMS",
      gitrep: "https://github.com/carlhammarling/ReactCMS",
      projectImg: CMS,
    },
  ]);

  return (
    <motion.div className="projects">
      {/* Title-animation  */}
      <div className="projectsH2">
        {title &&
          title.map((letter) => (
            <motion.h2
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 1200, damping: 5 }}
            >
              {letter}
            </motion.h2>
          ))}
      </div>
      <p>
        <span>A selection of projects </span>
        I've been working on lately.
      </p>

      {/* Card-beggining */}
      <div className="cardCaroussel">
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
      </div>
    </motion.div>
  );
};

export default Projects;
