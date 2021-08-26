export default function locationArr(dataArr) {
  let tempArr = [];
  let newArr = [];
  dataArr.forEach((element) => {
    if (!tempArr.includes(element.location)) {
      tempArr.push(element.location);
    }
  });
  tempArr.forEach((elem) => {
    let setColor;
    dataArr.forEach((position) => {
      if (elem === position.location) {
        if (position.cargo === false) {
          setColor = false;
        }
      }
    });
    if (setColor === undefined) {
      setColor = true;
    }
    newArr.push({ wh: elem, set: setColor });
  });
  return newArr;
}
