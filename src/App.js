import { useState, useEffect } from "react";

import fetchData from "utils/fetchData";

import ButtonAppBar from "components/navbar/NavMenu"
import WarehouseHeader from "components/warehouseHeader/WarehouseHeader";
import PositionCard from "components/positionCard/PositionCard";

function App() {
  const [state, setState] = useState();
  const [showWh, setShowWh] = useState(false);
  const [showPositions, setShowPositions] = useState(false);
  const [locationFilter, setLocationFilter] = useState('')

  const onClickHeandler = ({ target }) => {
    setLocationFilter(target.firstChild.textContent);
    setShowWh(false);
    setShowPositions(true)
  }

  const onClickHeandlerBack = () => {
    setShowPositions(false);
    setShowWh(true);
  }

  useEffect(() => {
    fetchData().then(resp => setState(resp.data))
    setShowWh(true)
  }, [])


  return (
    <div className="App">
      <ButtonAppBar data={state} />
      {showWh && <WarehouseHeader
        data={state}
        onClickHeandler={onClickHeandler} />}
      {showPositions && <PositionCard
        data={state}
        locationFilter={locationFilter}
        onClickHeandlerBack={onClickHeandlerBack}
      />}
    </div>)
}

export default App;
