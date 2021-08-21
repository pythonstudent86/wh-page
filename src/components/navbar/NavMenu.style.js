import styled from "@emotion/styled";

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    background-color: #faa93e;
    width: 100%;
    height: 60px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    margin-bottom: 20px;
`;

export const NavSection = styled.div`
&.counter{
    margin-left: 20px;
}
&.buttons{
    margin-left: auto;
    margin-right: 20px;
}
`;

export const NavBtn = styled.button`
    border-radius: 5px;
    padding: 5px 10px;
    border: 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    background-color:#0099FF;
    color: #ffffff;

    &:not(:last-child){
        margin-right: 20px;
    }
`;

export const NavText = styled.span`
color: #ffffff;
text-shadow: 2px 2px 4px green;
`;