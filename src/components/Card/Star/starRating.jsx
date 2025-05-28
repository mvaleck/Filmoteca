import full from "../../../assets/star.svg"
import half from "../../../assets/star-half.svg"
import none from "../../../assets/star-regular.svg"
import {Stars} from "./../style"

function StarRating ({rating}) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push( <img key={1} src={full}></img>)
        } else if (rating >= i - 0.5) {
            stars.push( <img key={1} src={half}></img>)
        } else {
            stars.push(<img key={1} src={none}></img>)
        }
    }

    return <Stars>{stars}</Stars>
    
}

export default StarRating;
