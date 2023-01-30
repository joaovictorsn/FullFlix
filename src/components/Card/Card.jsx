import {DivCard, TextContent} from "./CardStyle"

export const Card = ({movie}) =>{
    return(
        <DivCard>
            <div>
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="img" />
            </div>
            <TextContent>Titulo: {movie.title}</TextContent>
            <TextContent>Nota: {movie.vote_average}</TextContent>
        </DivCard>
    );
};
