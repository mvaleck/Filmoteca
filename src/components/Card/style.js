import styled from "styled-components";

export const CardStyle = styled.div `
    width: 350px;
    background-color: aqua;
`;

export const Img = styled.img `
    width: 100%;
`;
export const DisplayInfos = styled.div `
    display: flex;
    gap: 10px;
    padding: 5px;
`;
export const TitleFilm = styled.div `
    display: flex;
    gap: 20px;
    padding: 5px;

    h1 {
        font-size: 25px;
    }
`;

export const Stars = styled.div `
    display: flex;
    padding: 5px;
    img { 
        
        width: 20px;
    }
`;

export const Button = styled.button `
    margin-top: 10px;
    border: none;
    background: none;
    color: red;
    cursor: pointer;
    font-size: 15px;
    padding: 5px;
`;

export const Description = styled.p `
    padding: 5px;
`;
