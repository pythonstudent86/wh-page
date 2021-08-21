import styled from "@emotion/styled";

export const CardList = styled.ul`
    padding: 0;
    list-style: none;
    width: 460px;
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
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    background-color: ${props =>
        props.cargo ? '#0099FF' : '#afafaf'} ;
    border-radius: 5px 5px 30px 5px;
    color: #ffffff;
    margin-bottom: 20px;
`;

export const CardTextSection = styled.p`
    margin-left: 10px;
    &.text{
        width: 250px;
    }
    &.uht-btn{
        text-align: center;
        background-color: ${props =>
        props.uhtishka ? '#0099FF' : '#0ca00c'
    };
    color: ${props =>
        props.uhtishka ? '#0099FF' : '#0ca00c'
    };
    }
    &.block{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 5px 5px 15px 5px;
    }
    &.quantity{
        background-color: ${props =>
        props.changeQ ? '#faa93e' : '#ff1900'};
    }
`;

export const CardButton = styled.button`
    border-radius: 5px 5px 15px 5px;
    padding: 5px 10px;
    border: 0;
    color: #ffffff;
    width: 50px;
    height: 50px;
    background-color:#0099FF;
    margin-right: auto;
    margin-left: auto;
`;
