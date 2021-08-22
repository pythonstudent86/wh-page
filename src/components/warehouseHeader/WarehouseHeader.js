import { useState, useEffect } from "react";
import {
  HeadersList,
  HeaderListItem,
  HeaderText,
} from "components/warehouseHeader/WarehouseHeader.style";
import locationArr from "utils/locationArr";

export default function WarehouseHeader({ data, onClickHeandler }) {
  const [whName, setWhName] = useState([]);

  useEffect(() => {
    if (data) {
      setWhName(locationArr(data));
    }
  }, [data]);

  return (
    <HeadersList className="heders">
      {whName.map((warehouse, index) => (
        <HeaderListItem key={index} onClick={onClickHeandler}>
          <HeaderText name="locationName">{warehouse}</HeaderText>
        </HeaderListItem>
      ))}
    </HeadersList>
  );
}
