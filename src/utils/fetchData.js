import axios from "axios";

const fetchData = async () => {
    const fetchDataResp = await axios(
        "https://wh-data-serv.herokuapp.com/positions"
    );
    return fetchDataResp;
};

export default fetchData;