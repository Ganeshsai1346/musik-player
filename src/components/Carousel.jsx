/** @format */

import { Carousel } from "react-bootstrap";
import vikram from "../assets/Cbg2.jpg";
import rrr from "../assets/Cbg1.jpg";
import major from "../assets/Cbg3.jpg";
import "../css/Carousel.css";

const CarouselComp = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={vikram}
          alt="First slide"
          style={{ height: "500px", width: "700px", borderRadius: "10px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={rrr}
          alt="Second slide"
          style={{ height: "500px", width: "600px", borderRadius: "10px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={major}
          alt="Third slide"
          style={{ height: "500px", width: "600px", borderRadius: "10px" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
