import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Product } from "../../model/Product";

const ProductItem: React.FC<Product> = ({ id, name, colors }) => {
  const { images } = colors[0];

  return (
    <Link className="App-link" to={`${id}`}>
      <Card border="secondary">
        <Card.Header>{name}</Card.Header>

        <Card.Body>
          {images.map((image, i) => (
            <Card.Img
              key={`Image${i}`}
              variant="top"
              src={image}
              style={{ height: "50%", width: "50%" }}
            />
          ))}
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductItem;
