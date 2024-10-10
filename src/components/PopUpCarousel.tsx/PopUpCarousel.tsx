"use client";
import React, { useEffect } from "react";
import styles from "./PopUpCarousel.module.css";
import { Modal, Button, Carousel, Image } from "react-bootstrap";

const PopUpCarousel = ({ showCarousel, setShowCarousel, project }) => {
  console.log(project, "project");

  useEffect(() => {
    if (showCarousel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showCarousel]); // Runs every time showCarousel changes
  // const handleClose = () => {
  //     setShowCarousel(false)
  // }
  return (
    <div
      className={`${styles.popup} ${showCarousel ? styles.popUpactive : ""}`}
    >
    <div className={styles.popupContent}>
          {/* Render Carousel only if the project and its images are available */}
          {project && project.images && (
            <Carousel>
              {project.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <Image
                    src={image}
                    alt={`Project slide ${index + 1}`}
                    className="d-block w-100"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
          {/* Close button */}
          <h1 onClick={() => setShowCarousel(false)}>Close popup</h1>
        </div>
    </div>
  );
};

export default PopUpCarousel;
