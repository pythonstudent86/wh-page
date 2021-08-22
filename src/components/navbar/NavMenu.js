import {
  NavContainer,
  NavSection,
  NavBtn,
  NavText,
} from "components/navbar/NavMenu.style";

export default function ButtonAppBar({ data }) {
  return (
    <NavContainer>
      <NavSection className="counter">
        <NavText>{data && data.length} позиций</NavText>
      </NavSection>
      <NavSection className="buttons">
        <NavBtn type="button">Склады</NavBtn>
        <NavBtn type="button">Все позиции</NavBtn>
      </NavSection>
    </NavContainer>
  );
}
