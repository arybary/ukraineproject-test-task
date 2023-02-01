import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { getProducts } from "../../services/api";
import { Product } from "../../model/Product";
import { Col, Row } from "react-bootstrap";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setProducts(products);
    })();
  }, [products]);

  return (
    <Row xs={1} md={2} className="g-2">
      {products &&
        products.map((product) => (
          <Col key={`Product[${product.id}]`}>
            <ProductItem {...product} />
          </Col>
        ))}
    </Row>
  );
};

export default Products;
