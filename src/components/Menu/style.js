import styled from "styled-components";
import { breakpoints } from "../../style/breakpoints"
// @media (max-width: ${breakpoints.tablet}) {}

export const Logo = styled.div `
    display: flex;

    @media (max-width: ${breakpoints.tablet}) {
        justify-content: center;
    };
`;

export const Categories = styled.div `
    
`;

export const Content = styled.div `
    display: flex;
    background-color: aliceblue;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 15px; //espaçamento da barra de pesquisa

    @media (max-width: ${breakpoints.tablet}) {
        display: block;
        text-align: center;
    };
`;

export const ButtonCateg = styled.button `
    border: none;
    background: blue;
    padding: 10px 20px 10px;
    margin-left: 10px;
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 10px;
    };
`;

export const SearchBar = styled.div `
    display: flex;
    border-radius: 20px;
    background-color: aliceblue;
    padding: 10px;
    border: 1px solid black;
    width: 250px;
    margin: 0 auto;

    img {
        width: 20px;
        margin-right: 10px;
    }

    input {
        border: none;
        outline: none;
        background: none;
    }
`;


// 
// export const Categories = styled.div ``;
// export const Categories = styled.div ``;
// export const Categories = styled.div ``;
