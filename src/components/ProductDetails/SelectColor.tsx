import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Color } from "../../model/Product";

interface PropsSelectColor {
  colors: Color[];
  onChange: any;
}

const SelectColor: React.FC<PropsSelectColor> = ({ colors, onChange }) => {
  const [selected, setSelected] = useState(colors[0].name);

  const onSelect = (e: { target: { value: string } }) => {
    const newSelected = e.target.value;
    setSelected(newSelected);
    onChange(newSelected);
  };

  return (
    <Form.Select size="lg" value={selected} onChange={onSelect}>
      {colors.map(({ id, name }) => (
        <option key={`Select[${id}]`} value={name}>
          {name}
        </option>
      ))}
    </Form.Select>
  );
};

export default SelectColor;
