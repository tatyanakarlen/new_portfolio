import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "./Contact.module.css";
import CustomBtn from "@/components/CustomBtn/CustomBtn";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
      <Container className="section">
        <Row className="">
          <Col md={12} lg={6}>
            <div className="pe-md-0 pe-lg-5">
              <h3 className="fw-semibold mb-0">Drop a message</h3>
              <Form className={`${styles.customForm} w-100 mt-3`}>
                {/* <Row className="mb-3 w-100"> */}
                <Form.Group
                  className="d-flex flex-column align-items-start"
                  // as={Col}
                  controlId="validationCustom01"
                >
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    className={styles.customFormInput}
                  />
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    className={styles.customFormInput}
                  />
                  <Form.Control
                    required
                    type="text"
                    placeholder="Company (optional)"
                    className={styles.customFormInput}
                  />
                  <Form.Control
                    required
                    type="text"
                    as="textarea" // Change this line
                    placeholder="Message"
                    className={styles.textarea}
                  />
                  <div className={`${styles.formSubmitBtnContainer} mt-4`}>
                    <CustomBtn
                      text="Send"
                      bgColor="hotPinkBtn"
                      textColor="black"
                    />
                  </div>
                </Form.Group>
                {/* </Row> */}
              </Form>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="ps-md-0 ps-lg-5 d-flex flex-column h-100 gap-5">
              <div className="d-flex flex-column">
                {/* <h4 className="fw-semibold mb-0">Contact me</h4> */}
                <span className="mt-5 fs-4 text-decoration-underline">
                  tatyanakarlen@gmail.com
                </span>
                <span className="fs-4">(416) 662 6937</span>
              </div>
              <div className="d-flex flex-column">
                <span className="mt-3 fw-custom-light">Connect on social media</span>
                <div className="d-flex gap-3 mt-3 fs-4">
                  <FaLinkedin />
                  <FaGithub />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
