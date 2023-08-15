import React from 'react'
import { Link} from 'react-router-dom'
import './ProjectCard2.scss'


const ProjectCard2 = ({ parentRef }) => {
  return (
    <div className="projectCard2">
        <p>
          <span><i class="fa-solid fa-arrow-right"></i> Clean Shirt </span>
          - Fullstack MERN E-Commerce.
        </p>
        <p>
          <span><i class="fa-solid fa-arrow-right"></i> Health Weekly </span>
          - UX/UI food-delivery.
        </p>
        <p>
          <span><i class="fa-solid fa-arrow-right"></i> CMS-system </span>
          - Fullstack CMS
        </p>
        <p>
          <span><i class="fa-solid fa-arrow-right"></i> Apple clone </span>
          - HTML / SASS
        </p>
        

        {/* <Link to="">SEE MORE</Link> */}
      </div>
  )
}

export default ProjectCard2