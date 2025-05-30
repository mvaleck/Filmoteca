import Card from "../../components/Card"
import {CardFilmStyle, Page} from "../Card/style"


function Filmes({ filmes }) {

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
