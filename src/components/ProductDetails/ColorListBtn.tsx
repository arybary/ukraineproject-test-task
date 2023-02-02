import React, { useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import { Color } from "../../model/Product";

const colorButtons = {
  желтый: "warning",
  синий: "primary",
  черный: "dark",
  белый: "light",
  серый: "secondary",
};

interface PropsColorListBtn {
  colors: Color[];
  selectedColor: Color["name"];
  onChange: (name: Color["name"]) => void;
}

const ColorListBtn: React.FC<PropsColorListBtn> = ({
  colors,
  onChange,
  selectedColor,
}) => {
  const [selected, setSelected] = useState<Color["name"]>(selectedColor);

  const onClick = (name: Color["name"]): void => {
    setSelected(name);
    onChange(name);
  };

  return (
    <InputGroup className="mb-5">
      {colors.map(({ id, name }) => {
        const active = selected === name;
        return (
          <Button
            variant={colorButtons[name]}
            key={`Size${id}`}
            active={active}
            onClick={() => onClick(name)}
          >
            {name}
          </Button>
        );
      })}
    </InputGroup>
  );
};

export default ColorListBtn;
