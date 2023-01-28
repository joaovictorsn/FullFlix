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
    height: 100vh;
`

export const TextFilmes = styled.div`
display: flex;
font-size: 3vh;
color: #fff;
`

export const DivContainer = styled.div`
display: flex;
margin: auto;
margin-top: 2vh;
font-size: 1vh;
color: #fff;
height: 80vh;
`

export const ContainerGrid = styled.div`
display: grid;

`