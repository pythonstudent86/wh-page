import styled from "@emotion/styled";

export const AllPositionList = styled.ul`
  padding: 0;
  list-style: none;
  width: 460px;
  margin-left: auto;
  margin-right: auto;
`;

export const AllPositionListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0;
  width: 100%;
  min-height: 60px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => (props.uhtishka ? "#94d374" : "#0099FF")};
  border-radius: 5px 5px 30px 5px;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const TextPosition = styled.p`
  display: block;
  margin-left: 15px;
  &.name {
    width: 270px;
  }
  &.quantity {
    width: 30px;
  }
`;
