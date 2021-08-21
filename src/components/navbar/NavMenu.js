import {
    NavContainer,
    NavSection,
    NavBtn,
    NavText
} from "components/navbar/NavMenu.style"
import { useEffect } from "react";


export default function ButtonAppBar({ data }) {


    return (
        <NavContainer>
            <NavSection className="counter">
                <NavText>{data && data.length}</NavText>
            </NavSection>
            <NavSection className="buttons">
                <NavBtn type='button'>Склады</NavBtn>
                <NavBtn type='button'>Все позиции</NavBtn>
            </NavSection>
        </NavContainer>
    );
}
