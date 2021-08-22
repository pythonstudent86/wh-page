export default function filterArr(targetLocation, dataArr) {
  let filteredData = [];
  dataArr.forEach((item) => {
    if (item.location === targetLocation) {
      filteredData.push(item);
    }
  });
  return filteredData;
}
