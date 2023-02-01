import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/api";
import { Product } from "../../model/Product";
import ProductProperty from "./ProductProperty";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    (async () => {
      const productData = await getProduct(Number(id));
      setProduct(productData);
    })();
  }, [id]);

  return (
    <div>
      {product && (
        <ProductProperty nameProduct={product.name} colors={product.colors} />
      )}
    </div>
  );
};
export default ProductDetails;
