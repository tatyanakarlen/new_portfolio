import React, { useRef, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "./Contact.module.css";
import CustomBtn from "@/components/CustomBtn/CustomBtn";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { sendForm } from "@emailjs/browser";
import { send } from "@emailjs/browser";


const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault(); // Prevent form submission

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error("Missing EmailJS configuration.");
      alert("Email configuration is missing. Please contact support.");
      return;
    }

    
    const templateParams = {
      to_name: "Tatyanakarlen", 
      from_name: name,
      from_email: email,
      company: company || "N/A", 
      message: message,
    };

    try {
    
      const result = await send(serviceID, templateID, templateParams, publicKey);
      console.log("Email sent successfully:", result.text);
      alert("Message sent!");
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Message failed to send. Please try again.");
    }
  };


  return (
    <div id="contact">
      <Container className="section">
        <Row className="">
          <Col md={12} lg={6}>
            <div className="pe-md-0 pe-lg-5">
              <h3 className="fw-semibold mb-0">Drop a message</h3>
              <Form
                ref={form}
                onSubmit={sendEmail}
                className={`${styles.customForm} w-100 mt-3`}
              >
                <Form.Group
                  className="d-flex flex-column align-items-start"
                  controlId="validationCustom01"
                >
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    className={styles.customFormInput}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    className={styles.customFormInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Control
                    required
                    type="text"
                    placeholder="Company (optional)"
                    className={styles.customFormInput}
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                  <Form.Control
                    required
                    type="text"
                    as="textarea"
                    placeholder="Message"
                    className={styles.textarea}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <div className={`${styles.formSubmitBtnContainer} mt-4`}>
                    <CustomBtn
                      onClick={(e) => sendEmail(e)}
                      text="Send"
                      bgColor="hotPinkBtn"
                      textColor="black"
                    />
                  </div>
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="ps-md-0 ps-lg-5 d-flex flex-column h-100 gap-4">
              <div className="d-flex flex-column">
                <span className="mt-5 fs-4 text-decoration-underline no-underline">
                  tatyanakarlen@gmail.com
                </span>
                <span className="fs-4 no-underline">(416) 662 6937</span>
              </div>
              <div className="d-flex flex-column">
                <span className="mt-3 fw-custom-light">
                  Connect on social media
                </span>
                <div className="d-flex gap-3 mt-3 fs-4 w-100">
                  <Link
                    className={styles.socials}
                    href="https://www.linkedin.com/in/tatyanakarlen/"
                    passHref
                  >
                    {" "}
                    <FaLinkedin />
                  </Link>
                  <Link
                    className={styles.socials}
                    href="https://github.com/tatyanakarlen"
                    passHref
                  >
                    <FaGithub />
                  </Link>
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
