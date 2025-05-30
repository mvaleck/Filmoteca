import film from "../../assets/film.svg"
import StarRating from "./Star/starRating.jsx";
import {Img, DisplayInfos, Description, TitleFilm, CardStyle, Button} from "./../Card/style.js"

function Card ({card}) {
    return(
        <>
        <CardStyle>
            <Img src={card.img} alt="" />

            <TitleFilm>
                <img src={film} alt="" />
                <h1>{card.title}</h1>
            </TitleFilm>

             
               <StarRating rating={card.rating}/>  
                

            <DisplayInfos>
                <p>{card.ano}</p>
                <p>{card.categoria}</p>
                <p>{card.subcategoria}</p>
            </DisplayInfos>

            <Description>{card.descricao}</Description>
            <Button>Ver mais</Button>
 
        </CardStyle>
        </>
    );
}

export default Card;