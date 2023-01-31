import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import { getDetails } from "../../API/api"
import { DivContainer, 
         DivContent, 
         DivImg, 
         Header, 
         Main, 
         Div, 
         ButtomHome } from "./DetailStyle"





export function Detail(){
    // todos os atributos que estão na url, vão ser mapeados para o useParams e o id recebe eles
const {id} = useParams()
const [movie, setMovie] = useState([])

//ele renderiza na primeira chamada da página.
useEffect(()=>{
    getDetails(id,setMovie)
},[id])
    return(
        <Div>
        <Main>
            <DivContainer>
                <Header>
                    <h1>{movie.title}</h1>
                    <Link to={`/`}><ButtomHome>Home</ButtomHome></Link>
                </Header>
                
                    <DivImg>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    </DivImg>

                    <DivContent>
                    <strong>Título:</strong> <span>{movie.title}</span>
                    <strong>Sinopse:</strong> <span>{movie.overview}</span>
                    <strong>Data de Lançamento:</strong> <span>{movie.release_date}</span>
                    
                    </DivContent>
            </DivContainer>
        </Main>
        </Div>
    )
    
}