import React from "react";
import Carousel from "react-bootstrap/Carousel";
import imageone from "../Assets/images/machine02.jpeg";
import imageto from "../Assets/images/machine08.jpeg";
import imagethree from "../Assets/images/machine01.jpeg";

const Slider = () => {
  return (
    <Carousel id="sider">
      <Carousel.Item>
        <img className="d-block w-100" src={imageone} alt="First slide" />
        <div
          className="mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        ></div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imageto} alt="Second slide" />
        <div
          className="mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        ></div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imagethree} alt="Third slide" />
        <div
          className="mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        ></div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
