export default function locationArr(dataArr) {
  let tempArr = [];
  dataArr.forEach((element) => {
    if (!tempArr.includes(element.location)) {
      tempArr.push(element.location);
    }
  });
  return tempArr;
}
