import Card from "../../components/Card"
import img1 from "../../assets/popcorn.svg"
const filmes =[
    {
        img: img1,
        title: "Como perder um homem em 10 dias",
        ano: 2003,
        categoria: "Romance" ,
        descricao: "lalalala",
        rating: 4.5
    },
    {
        img: img1,
        title: "Entre Facas e Segredos",
        ano: 2018,
        categoria: "Ação" ,
        descricao: "lalalala",
        rating: 2.5

    }
]

function Filmes() {
    return (
        <div>
            {filmes.map((filme, index) => (
                <Card key={index} card={filme}/>
            ))}
        </div>
    );
    
}

export default Filmes;