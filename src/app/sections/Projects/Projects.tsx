"use client";
import React, { useState } from "react";
import styles from "./Projects.module.css";
import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import { Project, projectsData } from "../../../data/projectsData";
import CustomBtn from "@/components/CustomBtn/CustomBtn";
import { IoMdPlayCircle } from "react-icons/io";
import PopUpCarousel from "@/components/PopUpCarousel.tsx/PopUpCarousel";

const Projects: React.FC = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  console.log(selectedProject, "selected project");

  const handleShowCarousel = (project: Project) => {
    setSelectedProject(project);
    setShowCarousel(true);
  };

  return (
    <div id="projects" className={`${styles.projects}`}>
      <PopUpCarousel
        showCarousel={showCarousel}
        setShowCarousel={setShowCarousel}
        project={selectedProject}
      />
      <Container className="section">
        <h3 className="fw-semibold">Projects</h3>
        <Row className="g-4 mt-3">
          {projectsData.map((project, index) => (
            <Col key={index} xs={12} lg={6} xl={4}>
              <div
                className={`d-flex flex-column p-sm-3 p-4 h-100 ${styles.projectCard}`}
              >
                <div className={`${showCarousel ? "showCarouselActive" : ""}`}>
                  <div className={styles.imgContainer}>
                    <Image alt="project image" fluid src={project.images[0]} />
                    {!showCarousel && (
                      <div className={styles.galleryIconDiv}>
                        <IoMdPlayCircle
                          onClick={() => handleShowCarousel(project)}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="d-flex flex-column h-100 justify-content-between">
                  <div className="d-flex flex-column">
                    <div className="d-flex w-100 justify-content-between align-items-center mt-3">
                      <h4 className="mt-1 fw-semibold">{project.title}</h4>
                      <h5>
                        <Badge className="fw-semibold" bg="secondary">
                          {project.deployed ? "Live" : "Code only"}
                        </Badge>
                      </h5>
                    </div>
                    <p className="fw-custom-light mt-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="d-flex flex-column mt-3">
                    <h6>
                      Technologies:{" "}
                      {project.tech_stack?.map((el, index) => (
                        <span key={index}>
                          {el}
                          {index !== project.tech_stack.length - 1 && ", "}
                        </span>
                      ))}{" "}
                    </h6>
                    <div className={`${styles.btnContainer} d-flex gap-3 mt-4`}>
                      <CustomBtn
                        link={project.deployedAppLink}
                        text="Demo"
                        bgColor="hotPinkBtn"
                        textColor="black"
                      />
                      <CustomBtn
                        link={project.gitHubLink}
                        text="Github"
                        textColor="text-light"
                        bgColor="darkGreyBtn"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {/* <Row className="g-4 mt-3">
          {projects.map((project, index) => (
            <Col key={index} xs={12}>
              <div className={`d-flex gap-4 p-3 ${styles.projectCard}`}>
                <Col xs={4}>
                  <div className={`${styles.imgWrapper} position-relative`}>
                    <Image fluid src={project.images[0]} />
                  </div>
                </Col>
                <div className="d-flex flex-column justify-content-between">
                  <div className="d-flex flex-column">
                    <div className="d-flex w-100 justify-content-between">
                      <h4 className="mt-1 fw-semibold">{project.title}</h4>
                      <h5>
                        <Badge className="fw-semibold" bg="secondary">
                          {project.deployed ? "Live" : "Code only"}
                        </Badge>
                      </h5>
                    </div>
                    <p className="fw-custom-light mt-3">
                      {project.description}
                    </p>
                  </div>
                  <div className="d-flex flex-column mt-3">
                    <h6>
                      Technologies:{" "}
                      {project.tech_stack?.map((el, index) => (
                        <span key={index}>
                          {el}
                          {index !== project.tech_stack.length - 1 && ", "}
                        </span>
                      ))}{" "}
                    </h6>
                    <div className="d-flex gap-3 mt-4">
                      <CustomBtn
                        link="https://www.linkedin.com/in/tatyanakarlen/"
                        text="Demo"
                        bgColor="hotPinkBtn"
                        textColor="black"
                      />
                      <CustomBtn
                        link="https://github.com/tatyanakarlen"
                        text="Github"
                        textColor="text-light"
                        bgColor="darkGreyBtn"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row> */}
      </Container>
    </div>
  );
};

export default Projects;
