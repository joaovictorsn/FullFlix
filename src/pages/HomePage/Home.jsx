// import style from "../../Layouts/HomePage/Home.module.scss"
import { Header, TextFilmes, Div, DivContainer, ContainerGrid } from "./HomeStyle"; 
import { useEffect, useState } from "react";
import { getList, getDetails } from "../../API/api";
import { Card } from "../../components/Card/Card";


export function Home() {

    // estado é para vc ter a info para trabalhar em algum momento necessário.
    const [movies,setMovies] = useState([])
    //ele renderiza na primeira chamada da página.
    useEffect(()=>{
        getList(setMovies)
    },[])
        return(
    <Div>
        <Header/>

        <TextFilmes>
            <p>Filmes Populares</p>
        </TextFilmes>
        <DivContainer>
            <ContainerGrid>
                {movies.map((movie)=>{      
                    return <Card movie={movie}/>;
                })}
            </ContainerGrid>
        </DivContainer>

        <footer>
            <div>
                <h1>BORA LÁ CARAI</h1> 
            </div>
        </footer>
    </Div>
)
}