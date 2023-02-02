import React, { useEffect, useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import { Sizes } from "../../model/Product";
import { getSizes } from "../../services/api";

interface PropsSizesListBtn {
  actualSizes: number[];
}

const SizesListBtn: React.FC<PropsSizesListBtn> = ({ actualSizes }) => {
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
export default SizesListBtn;
