import React from 'react'
import "../assets/css/style.css";
import ProjectItem from './ProjectItem';


export default function Projects() {
  return (
    <>
    <section className="projects">
            <div className="container">
                        <div className="row space center">
                            <h1 className="title"><b className="underline">Projects</b></h1>
                        </div>
                        <div className="row center project-list space50">
                            <div className="col-md-10">
                                <div className="row">
                                    <ProjectItem />
                                    <br />
                                    <div className="cuadradonegro">

                                    </div>
                                    <br />
                                    <div className="cuadradonegro">

                                    </div>

                                </div>
                            </div>
                            
                        </div>
            </div>
            
    </section>
    </>
  )
}
