import React from "react";
import Carousel from "react-bootstrap/Carousel";

interface PropCarusel {
  images: string[];
}

const ProductImagesCarusel: React.FC<PropCarusel> = ({ images }) => (
  <Carousel style={{ backgroundColor: "grey" }} fade>
    {images.map((image, i) => (
      <Carousel.Item key={`IMG${i}`}>
        <img style={{ width: "50%", height: "50%" }} src={image} alt="slide" />
        <Carousel.Caption>
          <h3>{`IMG${i + 1}`}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default ProductImagesCarusel;
