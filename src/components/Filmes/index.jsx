import Card from "../../components/Card"
import {CardFilmStyle, Page} from "../Card/style"
import React, { useState, useEffect } from "react";
import api from "../../../api";


function Filmes() {

    const [filmes, setFilmes] = useState ([]);

    useEffect (() => {
        async function fecthFilmes () {
            const response = await api.get ('/filmes');
            setFilmes (response.data)
        }
        fecthFilmes();
    }, []);

    return (
        <Page>
        <CardFilmStyle>
            {filmes.map((filme) => (
                <Card key={filme.id} card={filme}/>
            ))}
        </CardFilmStyle>
        </Page>
    );
    
}

export default Filmes;
