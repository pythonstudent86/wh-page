import styled from "@emotion/styled";

export const HeadersList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeaderListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 60px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => (props.setDisable ? "#afafaf" : "#faa93e")};
  border-radius: 5px 5px 30px 5px;
  margin-bottom: 20px;
`;

export const HeaderText = styled.p`
  font-weight: 800;
  color: #ffffff;
  font-size: 20px;
`;
