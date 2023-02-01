import React, { useEffect, useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import { Sizes } from "../../model/Product";
import { getSizes } from "../../services/api";

interface PropsSizesList {
  actualSizes: number[];
}

const SizesList: React.FC<PropsSizesList> = ({ actualSizes }) => {
  const [sizes, setSizes] = useState<Sizes[]>([]);

  useEffect(() => {
    (async () => {
      const sizesData = await getSizes();
      setSizes(sizesData);
    })();
  }, [sizes]);
  return (
    <InputGroup className="mb-5">
      {sizes.map(({ id, label, number }) => {
        const disabled = !actualSizes.includes(id);
        return (
          <Button variant="success" key={`Size${id}`} disabled={disabled}>
            {label}/{number}
          </Button>
        );
      })}
    </InputGroup>
  );
};
export default SizesList;
