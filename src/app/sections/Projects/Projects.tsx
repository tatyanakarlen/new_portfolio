import React from "react";
import styles from "./Projects.module.css";
import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import projects from "../../../data/projects";
import CustomBtn from "@/components/CustomBtn/CustomBtn";
import { IoMdPlayCircle } from "react-icons/io";



const Projects = () => {
  console.log(projects, "projects");
  return (
    <div id="projects" className={`${styles.projects}`}>
      <Container className="section">
        <h3 className="fw-semibold">Projects</h3>
        <Row className="g-4 mt-3">
          {projects.map((project, index) => (
            <Col key={index} xs={12} lg={6} xl={4}>
              <div
                className={`d-flex flex-column p-4 h-100 ${styles.projectCard}`}
              >
                <div className={styles.imgContainer}>
                  <Image fluid src={project.images[0]} />
                  <div className={styles.galleryIconDiv}>
                    <IoMdPlayCircle  />
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
