export const Card = ({movie}) =>{
    return(
        <div>
            <div>
                <img src='https://api.themoviedb.org/3/movie/550/images?api_key={api_key}&language=en-US&include_image_language=en,null$' alt="img" />
            </div>
            <h1>{movie.title}</h1>
        </div>
    );
};
