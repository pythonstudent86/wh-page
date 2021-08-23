import {
  NavContainer,
  NavSection,
  NavBtn,
  NavText,
} from "components/navbar/NavMenu.style";

export default function ButtonAppBar({
  data,
  onClickHeandlerBack,
  onAllPositionHandler
}) {
  return (
    <NavContainer>
      <NavSection className="counter">
        <NavText>{data && data.length} позиций</NavText>
      </NavSection>
      <NavSection className="buttons">
        <NavBtn type="button" onClick={onClickHeandlerBack}>Склады</NavBtn>
        <NavBtn type="button" onClick={onAllPositionHandler}>Все позиции</NavBtn>
      </NavSection>
    </NavContainer>
  );
}
