import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.scss";

const ProjectCard = ({ title, intro, description, tech, link, projectImg }) => {
  return (
    <div className="projectCard">
      <div className="projectContent">
        <p>
          <span>{title}</span>
          {intro}
        </p>
        <p>{description}</p>
        <p>{tech}</p>
        <Link to={link} target="blank">
          Visit site
        </Link>
      </div>
      <img className="projectImg" src={projectImg} alt="" />
    </div>
  );
};

export default ProjectCard;
