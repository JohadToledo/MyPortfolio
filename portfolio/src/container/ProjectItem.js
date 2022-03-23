import React from "react";
import project1 from "../assets/statics/project1.png"

export default function ProjectItem() {
  return (
    <>
      <div className="cuadradonegro project-item">
        <img src={project1} alt="" className="img-project" />
        <div>
          <h4>Project Name</h4>
          <p>
            Project description Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Asperiores earum impedit at. Accusamus ea dolores
            quis voluptatem sint architecto minima temporibus fuga quibusdam
            nemo quasi ab repellendus laboriosam, unde nisi.
          </p>
          <h5>JS, JavaScript, HTML, CSS, CSS</h5>
          <button>Link to the code</button>
          <button>Link to the website</button>
        </div>
      </div>
    </>
  );
}
