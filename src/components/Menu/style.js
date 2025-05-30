import styled from "styled-components";
import { breakpoints } from "../../style/breakpoints"
// @media (max-width: ${breakpoints.tablet}) {}

export const Logo = styled.div `
    display: flex;
    gap: 5px;

    @media (max-width: ${breakpoints.tablet}) {
        justify-content: center;
    };
`;

export const Categories = styled.div `
    
`;

export const Content = styled.div `
    padding: 25px 10px 5px;
    display: flex;
    // background-color: aliceblue;
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
    background: none;
    padding: 10px 20px 10px;
    border-radius: 20px;
    margin-left: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        border-radius: 20px;
        background-color: black; 
        color: white;
       
    }

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 10px;
    };
`;

export const SearchBar = styled.div `
    display: flex;
    border-radius: 20px;
   
    padding: 10px;
    border: 1px solid black;
    width: 250px;
    margin: 0 auto;
    margin-bottom: 15px;
    
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
