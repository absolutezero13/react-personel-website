import React, { useState } from "react";
import projects from "../../projectsData";
import "./Projects.css";
const Projects = () => {
  const [projectNumber, setProjectNumber] = useState(0);

  const previousProject = () => {
    if (projectNumber === 0) {
      setProjectNumber(projects.length - 1);
    } else {
      setProjectNumber(projectNumber - 1);
    }
  };
  const nextProject = () => {
    if (projectNumber === projects.length - 1) {
      setProjectNumber(0);
    } else {
      setProjectNumber(projectNumber + 1);
    }
  };
  const { title, desc, src } = projects[projectNumber];

  return (
    <div className="projects">
      <button onClick={previousProject}>⬅</button>
      <div className="project">
        <h2>{title}</h2>
        <img src={src} />
        <p>{desc}</p>
        <div>
          <button>Live Review</button>
          <button>Source Code</button>
        </div>
      </div>
      <button onClick={nextProject}>➡</button>
    </div>
  );
};

export default Projects;
