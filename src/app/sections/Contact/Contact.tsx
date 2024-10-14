import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "./Contact.module.css";
import CustomBtn from "@/components/CustomBtn/CustomBtn";

const Contact = () => {
  return (
    <div id="contact">
      <Container className="section">
        <Row className="">
          <Col>
            <div className="flex-grow-1">
              <h3 className="fw-semibold">Drop a message</h3>
              <Form className={`${styles.customForm} w-100 mt-3`}>
                <Row className="mb-3 w-100">
                  <Form.Group className="d-flex flex-column align-items-start" as={Col} controlId="validationCustom01">
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
                       <div>
                    <CustomBtn
                      text="Send"
                      bgColor="hotPinkBtn"
                      textColor="black"
                    />
                  </div>
                  </Form.Group>
               
                </Row>
              </Form>
            </div>
          </Col>
          <Col>
            <div className="flex-grow-1">col 2</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
