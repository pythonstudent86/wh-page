import { useState, useEffect } from "react";

import { fetchData, fetchUpdateData } from "utils/fetchData";
import requestTelegram from "utils/tegramm-bot-msg"

import ButtonAppBar from "components/navbar/NavMenu";
import WarehouseHeader from "components/warehouseHeader/WarehouseHeader";
import PositionCard from "components/positionCard/PositionCard";
import AllPosition from "components/allPositions/AllPosition";
import Loading from "components/loading/Loading";

function App() {
  const [state, setState] = useState();
  const [showWh, setShowWh] = useState(false);
  const [showPositions, setShowPositions] = useState(false);
  const [showAllPositions, setShowAllPositions] = useState(false);
  const [locationFilter, setLocationFilter] = useState("");
  const [reloadState, setReloadState] = useState(true);
  const [loading, setLoading] = useState(true)

  const onClickHeandler = ({ target }) => {
    setLocationFilter(target.firstChild.textContent);
    setShowWh(false);
    setShowPositions(true);
  };

  const onClickHeandlerBack = () => {
    setShowPositions(false);
    setShowAllPositions(false);
    setShowWh(true);
  };

  const oClickUpdate = (e) => {
    if (e.target.parentElement.style.backgroundColor !== "rgb(175, 175, 175)") {
      fetchUpdateData(e.target.id, "cargo", "true");
      e.target.parentElement.style.backgroundColor = "#afafaf";
      e.target.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = "#afafaf"
    }
  };

  const onAllPositionHandler = () => {
    setShowPositions(false);
    setShowWh(false);
    setShowAllPositions(true);
  }

  const noChangeQuantity = (e) => {
    const inputData = parseInt(prompt());
    if (!isNaN(inputData)) {
      fetchUpdateData(e.target.id, "changeQ", "true", "changedQTo", inputData)
      e.target.textContent = inputData;
      e.target.style.backgroundColor = "#ea3c3c"
    }
  }

  const onUtishkaSetQuantity = (e) => {
    const quantityPosition = parseInt(e.target.previousElementSibling.textContent);
    const inputData = parseInt(prompt());
    if (!isNaN(inputData) && quantityPosition >= inputData) {
      if (inputData !== 0) {
        fetchUpdateData(e.target.id, "uhtishka", "true", "uhtQuant", inputData)
        e.target.textContent = `Ухтышке: ${inputData}`
        e.target.parentElement.style.backgroundColor = "#94d374"
      } else {
        fetchUpdateData(e.target.id, "uhtishka", "false", "uhtQuant", inputData)
        e.target.textContent = `Ухтышке: ${inputData}`
        e.target.parentElement.style.backgroundColor = "#0099FF"
      }

    }
  }

  const onAlertHeandle = (e) => {
    const positionName = e.target.previousSibling.previousSibling.previousSibling.textContent;
    const inputData = prompt();
    requestTelegram(positionName, inputData)
  }

  useEffect(() => {
    if (reloadState) {
      fetchData().then((resp) => setState(resp.data));
      setReloadState(false);
      setLoading(false);
      setShowWh(true);
    }
  }, [reloadState]);

  return (
    <div className="App">
      <ButtonAppBar
        data={state}
        onClickHeandlerBack={onClickHeandlerBack}
        onAllPositionHandler={onAllPositionHandler}
      />
      {loading && <Loading />}
      {showWh && (
        <WarehouseHeader
          data={state}
          onClickHeandler={onClickHeandler}
          setReloadState={setReloadState}
          setLoading={setLoading}
        />

      )}
      {showPositions && (
        <PositionCard
          data={state}
          locationFilter={locationFilter}
          onClickHeandlerBack={onClickHeandlerBack}
          oClickUpdate={oClickUpdate}
          noChangeQuantity={noChangeQuantity}
          onAlertHeandle={onAlertHeandle}
        />)}
      {
        showAllPositions && (
          <AllPosition
            data={state}
            onUtishkaSetQuantity={onUtishkaSetQuantity}
          />
        )
      }
    </div >
  );
}

export default App;
