import { useState, useEffect } from "react";
import {
  CardList,
  CardListItem,
  CardTextSection,
  CardButton,
} from "components/positionCard/PositionCard.style";
import filterArr from "utils/filterArr";

export default function PositionCard({
  data,
  locationFilter,
  onClickHeandlerBack,
  oClickUpdate,
  noChangeQuantity,
  onAlertHeandle,
}) {
  const [filteredArr, setFilteredArr] = useState([]);
  const [showPosition, setShowPositions] = useState(false);

  const showQuantity = (changeQ, changedQTo, quantity) => {
    if (changeQ) {
      return changedQTo;
    } else {
      return quantity;
    }
  };

  useEffect(() => {
    setFilteredArr(filterArr(locationFilter, data));
  }, [data, locationFilter]);

  useEffect(() => {
    if (filteredArr) {
      setShowPositions(true);
    }
  }, [filteredArr]);

  return (
    <div>
      <CardList>
        {showPosition &&
          filteredArr.map((position) => (
            <CardListItem key={position.id} cargo={position.cargo}>
              <CardTextSection
                id={position.id}
                onClick={oClickUpdate}
                className="text"
              >
                {position.name}
              </CardTextSection>
              <CardTextSection
                id={position.id}
                changeQ={position.changeQ}
                className="block quantity"
                onClick={noChangeQuantity}
              >
                {showQuantity(
                  position.changeQ,
                  position.changedQTo,
                  position.quantity
                )}
              </CardTextSection>
              <CardTextSection
                className="block uht-btn"
                uhtishka={position.uhtishka}
                cargo={position.cargo}
              >
                У<br />
                {position.uhtQuant}
              </CardTextSection>
              <CardButton
                id={position.id}
                type="button"
                cargo={position.cargo}
                onClick={onAlertHeandle}
              >
                !
              </CardButton>
            </CardListItem>
          ))}
      </CardList>
      <CardList>
        <CardListItem onClick={onClickHeandlerBack}>
          <CardTextSection>‹‹‹ к списку складов</CardTextSection>
        </CardListItem>
      </CardList>
    </div>
  );
}
