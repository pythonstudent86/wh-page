import styled from "@emotion/styled";

const colorSwitch = (props, color1, color2, color3, color4) => {
  if (props.cargo && !props.uhtishka) {
    return color1;
  }
  if (props.cargo && props.uhtishka) {
    return color2;
  }
  if (!props.cargo && !props.uhtishka) {
    return color3;
  }
  if (!props.cargo && props.uhtishka) {
    return color4;
  }
};

export const CardList = styled.ul`
  padding: 0;
  list-style: none;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const CardListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  min-height: 60px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => (props.cargo ? "#afafaf" : "#0099FF")};
  border-radius: 5px 5px 30px 5px;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const CardTextSection = styled.p`
  margin-left: 20px;
  &.text {
    width: 450px;
  }
  &.uht-btn {
    text-align: center;
    background-color: ${(props) =>
      colorSwitch(props, "transparent", "#94d374", "transparent", "#94d374")};
    color: ${(props) =>
      colorSwitch(props, "transparent", "#ffffff", "transparent", "#ffffff")};
  }
  &.block {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 5px 5px 15px 5px;
  }
  &.quantity {
    background-color: ${(props) => (props.changeQ ? "#ff1900" : "#faa93e")};
  }
`;

export const CardButton = styled.button`
  border-radius: 5px 5px 15px 5px;
  padding: 5px 10px;
  border: 0;
  color: #ffffff;
  width: 50px;
  height: 50px;
  border: 1px solid #afafaf;
  background-color: ${(props) => (props.cargo ? "#afafaf" : "#0099FF")};
  margin-right: auto;
  margin-left: auto;
`;
