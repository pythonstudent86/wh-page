import axios from "axios";

const fetchData = async () => {
  const fetchDataResp = await axios(
    "https://wh-data-serv.herokuapp.com/positions"
  );
  return fetchDataResp;
};

const fetchUpdateData = async (id, key, value, key1 = null, value1 = null) => {
  let content = {}
  if (key1 !== null) {
    console.log("not null")
    content = {
      [key1]: value1,
      [key]: value,
    };
  } else {
    content = { [key]: value };
  }
  return await axios
    .patch(`https://wh-data-serv.herokuapp.com/positions/${id}`, content)
    .then((resp) => console.log(resp));
};

export { fetchData, fetchUpdateData };
