import { useState, useEffect } from "react";

import { fetchData, fetchUpdateData } from "utils/fetchData";

import ButtonAppBar from "components/navbar/NavMenu";
import WarehouseHeader from "components/warehouseHeader/WarehouseHeader";
import PositionCard from "components/positionCard/PositionCard";

function App() {
  const [state, setState] = useState();
  const [showWh, setShowWh] = useState(false);
  const [showPositions, setShowPositions] = useState(false);
  const [locationFilter, setLocationFilter] = useState("");

  const onClickHeandler = ({ target }) => {
    setLocationFilter(target.firstChild.textContent);
    setShowWh(false);
    setShowPositions(true);
  };

  const onClickHeandlerBack = () => {
    setShowPositions(false);
    setShowWh(true);
  };

  const oClickUpdate = (e) => {
    console.dir(e.target.id);
    fetchUpdateData(e.target.id, "cargo", "true");
    e.target.parentElement.style.backgroundColor = "#afafaf";
  };

  useEffect(() => {
    fetchData().then((resp) => setState(resp.data));
    setShowWh(true);
  }, []);

  return (
    <div className="App">
      <ButtonAppBar data={state} />
      {showWh && (
        <WarehouseHeader data={state} onClickHeandler={onClickHeandler} />
      )}
      {showPositions && (
        <PositionCard
          data={state}
          locationFilter={locationFilter}
          onClickHeandlerBack={onClickHeandlerBack}
          oClickUpdate={oClickUpdate}
        />
      )}
    </div>
  );
}

export default App;
