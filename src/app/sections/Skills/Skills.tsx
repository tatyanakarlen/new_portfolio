import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  const skills = [
    "React",
    "Redux",
    "Javascript",
    "Typescript",
    "Next.js",
    "Python",
    "Django",
    "SQL/noSQL",
  ];
  return (
    <div id="skills">
      <Container className="section">
        <h3 className="fw-semibold">Skills</h3>
        <Row className="mt-4 g-4">
        {skills.map((skill, index) => (
          <Col key={index} xs={12} lg={6} className="skill-item">
            <div className="d-flex align-items-center">
              <span className="fw-custom-light fs-3 pe-4">{String(index + 1).padStart(2, "0")}</span>
              <hr className="flex-grow-1 mx-2" />
              <span className="fs-4 ps-4 fw-custom-light">{skill}</span>
            </div>
          </Col>
        ))}
      </Row>
      </Container>
    </div>
  );
};

export default Skills;
