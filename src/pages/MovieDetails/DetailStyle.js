import styled from "styled-components";
import fullflix from "../../components/Img/background.png"


export const Div = styled.div`
background-image: url(${fullflix});
background-position: center;
background-size:contain;
height: 100vh;
`
export const Main = styled.main`
display: flex;
flex-direction: column;
width: 100%;
border: 1px solid black;
border-radius: 5px;
`
export const Header = styled.header`
display: flex;
grid-column: 1/3;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background-color: #808080;
color: white;
border-bottom: 1px solid black;
`
export const DivContainer = styled.div`
display: grid;
width: 70vw;
grid-template-columns: 500px 1fr;
text-align: center;
justify-content: center;
align-items: center;
background-color: white;
margin: auto;
margin-top: 8vh;
`
export const DivContent = styled.div`
 display: flex;
 flex-direction: column;
 height: 100%;
 background-color: #808080;
`

export const DivImg = styled.div`
display: contents;
text-align: center;
box-sizing: content-box;
width:fit-content;
`

export const ButtomHome = styled.a`
color: white;
font-size: 1.9vh;
:hover{
    cursor: pointer;
    color: red;
    text-decoration: none;
}
`

export const ButtomTrailer = styled.a`
color: black;
background-color: #c62823;
border: 2px solid #c62823;
border-radius: 20px;
padding: 1rem 6rem;
margin: 30px auto;

align-items: center;
transition: 0.4s;
text-align: center;
align-content: center;
font-size: 2vh;
:hover{
    background-color: transparent;
    color: black;
    cursor: pointer;
}

`

