import styled from "styled-components";
import fullflix from "../../components/Img/background.png"


export const Div = styled.div`
display: flex;
flex-direction: column;
position: fit-content;
background-color: black;
`
export const Header = styled.header`
    display: block;
    background-image: url(${fullflix});
    background-position: center;
    background-size: cover;
    height: 100vh;
`

export const TextFilmes = styled.div`
display: flex;
font-size: 3vh;
color: #fff;
`

export const DivContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: auto;
margin-top: 2vh;
font-size: 2vh;
color: #fff;
height: 100%;
`

export const ContainerGrid = styled.div`
display: grid;
height: min-content;
grid-template-columns: repeat(4,1fr);
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 3vh 2vw;
`
