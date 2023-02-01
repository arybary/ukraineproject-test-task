import { useState } from "react";
import { Color } from "../../model/Product";
import ProductImagesCarusel from "./ProductImagesCarusel";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import SizesList from "./SizeList";
import SelectColor from "./SelectColor";
import { Card } from "react-bootstrap";

interface ProductProps {
  colors: Color[];
  nameProduct: string;
}

const ProductProperty: React.FC<ProductProps> = ({ nameProduct, colors }) => {
  const [selectedColor, setSelectedColor] = useState<Color>(colors[0]);

  const { images, description, price, sizes } = selectedColor;

  const changeColor = (name: string) => {
    const selectColor: Color = colors.filter(
      (color: Color) => color.name === name
    )[0];
    setSelectedColor(selectColor);
  };

  return (
    <Container>
      <Card>
        <Card.Header>
          <Card.Title>{nameProduct}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={10} md={6}>
              <ProductImagesCarusel images={images} />
            </Col>
            <Col xs={10} md={6}>
              <Card.Title>цвет:</Card.Title>
              <SelectColor onChange={changeColor} colors={colors} />
              <Card.Text>{description}</Card.Text>
              <Card.Title>размер:</Card.Title>
              <SizesList actualSizes={sizes} />
              <Card.Title>цена: {price} $</Card.Title>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Card.Link href="/">All products</Card.Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};
export default ProductProperty;
