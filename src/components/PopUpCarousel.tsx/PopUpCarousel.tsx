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

  return (
    <div
      className={`${styles.popup} ${showCarousel ? styles.popUpactive : ""}`}
    >
      <div className={styles.popupContent}>
        {project && project.images && (
          <Carousel className={styles.carousel} interval={null}>
            {project.images.map((image) => (
              <Carousel.Item className={styles.carouselItem}>
                <Image
                  src={image}
                  // alt={`Project slide ${index + 1}`}
                  className="h-100 w-100"
                />
                {/* <h1 onClick={() => setShowCarousel(false)}>Close popup</h1> */}
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default PopUpCarousel;
