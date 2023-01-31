import { Link } from "react-router-dom"

import {DivCard, TextContent, ButtonDetails, LinkButton} from "./CardStyle"

export const Card = ({movie, showLink = true}) =>{
    return(
    
        <DivCard>
            <div>
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="img" />
            </div>
            <TextContent>Titulo: {movie.title}</TextContent>
            <TextContent>Nota: {movie.vote_average}</TextContent>
            <ButtonDetails><Link  to={`/detail/${movie.id}`}>Detalhes</Link></ButtonDetails>
        </DivCard>
    );
    
};
