import Card from "../../components/Card"
import {CardFilmStyle, Page} from "../Card/style"

import howtolose from "../../assets/filmes/howtolose.jpg"
import familia from "../../assets/filmes/familia.jpg"
import entrefacas from "../../assets/filmes/entrefacas.jpg"
import corra from "../../assets/filmes/corra.jpeg"
import interestelar from "../../assets/filmes/interestelar.jpg"
import branquelas from "../../assets/filmes/branquelas.avif"
import esposa from "../../assets/filmes/esposa.jpg"


const filmes =[
    {
        img: howtolose,
        title: "Como perder um homem em 10 dias",
        ano: 2003,
        categoria: "Romance",
        subCategoria: "Comédia",
        descricao: "Uma jornalista e um publicitário entram em um jogo de manipulação amorosa.",
        rating: 5
    },
    {
        img: familia,
        title: "Família do Bagulho	",
        ano: 2013,
        categoria: "Comédia" ,
        descricao: "Um traficante monta uma falsa família para atravessar a fronteira com drogas.",
        rating: 5
    },
    {
        img: entrefacas,
        title: "Entre Facas e Segredos",
        ano: 2019,
        categoria: "Ação",
        descricao: "Um detetive investiga a morte de um famoso escritor, em meio a uma família cheia de segredos.",
        rating: 5
    },
    {
        img: corra,
        title: "Corra!",
        ano: 2017,
        categoria: "Terror" ,
        descricao: "Jovem negro visita a família da namorada e descobre segredos perturbadores.",
        rating: 5
    },
    {
        img: interestelar,
        title: "Interestelar",
        ano: 2014,
        categoria: "Ficção" ,
        descricao: "Astronautas viajam por um buraco de minhoca em busca de um novo lar para a humanidade.",
        rating: 5
    },
    {
        img: branquelas,
        title: "As Branquelas",
        ano: 2004,
        categoria: "Comédia" ,
        descricao: "Dois agentes do FBI se disfarçam de socialites brancas em uma missão maluca.",
        rating: 5
    },
    {
        img: esposa,
        title: "Esposa de Mentirinha",
        ano: 2011,
        categoria: "Romance",
        subCategoria: "Comédia",
        descricao: "Um cirurgião pede à assistente que finja ser sua ex-esposa para impressionar a nova namorada.",
        rating: 4.5
    },
    {
        img: esposa,
        title: "The Batman",
        ano: 2022,
        categoria: "Ação",
        descricao: "Em seu segundo ano como vigilante, Batman investiga uma série de assassinatos cometidos pelo Charada, revelando a corrupção profunda em Gotham e enfrentando seus próprios demônios. Robert Pattinson traz uma versão mais sombria e investigativa do herói",
        rating: 3
    },
    {
        img: esposa,
        title: "",
        ano: 555,
        categoria: "",
        descricao: "",
        rating: 2.5
    }
]

function Filmes() {
    return (
        <Page>
        <CardFilmStyle>
            {filmes.map((filme, index) => (
                <Card key={index} card={filme}/>
            ))}
        </CardFilmStyle>
        </Page>
    );
    
}

export default Filmes;

/*
  {
        img: esposa,
        title: "",
        ano: 555,
        categoria: "",
        descricao: "",
        rating: 3
    }
*/