import axios from "axios";

function App() {
  const fetchData = async () => {
    const fetchDataResp = await axios(
      "https://wh-data-serv.herokuapp.com/positions"
    );
    console.log(fetchDataResp.data);
  };

  fetchData();

  return <div className="App"></div>;
}

export default App;
