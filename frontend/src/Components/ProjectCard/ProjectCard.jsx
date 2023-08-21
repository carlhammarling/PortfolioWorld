import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.scss";

const ProjectCard = ({
  title,
  intro,
  description,
  tech,
  link,
  gitrep,
  projectImg,
}) => {
  return (
    <div className="projectCard">
      <div className="projectContent">
        <p>
          <span>{title}</span>
          {intro}
        </p>
        <p>{description}</p>
        <p className="techUsed">{tech}</p>
        <div className="projectLinks">
          <Link to={link} target="blank">
            Visit site
          </Link>
          <Link to={gitrep} target="blank">
          View code
          </Link>
        </div>
      </div>
      <Link to={link} target="blank">
        <img className="projectImg" src={projectImg} alt={title} />
      </Link>
    </div>
  );
};

export default ProjectCard;
