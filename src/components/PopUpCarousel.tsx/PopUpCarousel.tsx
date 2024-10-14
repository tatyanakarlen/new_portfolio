"use client";
import React, { useState, useEffect } from "react";
import styles from "./PopUpCarousel.module.css";
import { Modal, Button, Carousel, Image, Badge } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import CustomBtn from "../CustomBtn/CustomBtn";

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
  }, [showCarousel]); 

  return (
    <div
      className={`${styles.popup} ${showCarousel ? styles.popUpactive : ""}`}
    >
      <div className={styles.popupContent}>
        <div
          className={`${styles.closeBTN} position-fixed`}
          onClick={() => {
            setShowCarousel(false);
          }}
        >
          <Badge
            className="fw-semibold d-flex align-items-center justify-content-center gap-1"
            bg="secondary"
          >
            <IoCloseSharp className="mt-1" />
            <span>close</span>
          </Badge>
        </div>
        {project && project.images && (
          <Carousel
            className={`${styles.carousel} h-100 w-100`}
            interval={null}
          >
            {project.images.map((image, index) => (
              <Carousel.Item
                className={`${styles.carouselItem} position-relative`}
                key={index}
              >
                <Image
                  fluid
                  src={image}
                  // alt={`Project slide ${index + 1}`}
                  className="h-100 w-100"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default PopUpCarousel;
