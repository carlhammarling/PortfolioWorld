import React, { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
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
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setImgLoaded(false);

    const img = new Image();
    img.src = projectImg;

    img.onload = () => {
      setImgLoaded(true);
    };
  }, [projectImg]);

  return (
    <div className={`projectCard ${title}`}>
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
        {imgLoaded ? (
          <img className="projectImg" src={projectImg} alt={title} />
        ) : (
          <div className="loading">
            <ThreeCircles
              className="spinner"
              height="50"
              width="50"
              color="#ffffff"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </div>
        )}
      </Link>
    </div>
  );
};

export default ProjectCard;
