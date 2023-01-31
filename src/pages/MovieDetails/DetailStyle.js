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
grid-template-columns: 400px 1fr;
text-align: center;
justify-content: center;
align-items: center;
background-color: white;
margin: auto;
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
text-decoration: none;
color: white;
border-radius: 7px;
color: white;
font-size: 1.9vh;
:hover{
    cursor: pointer;
    color: red;
    text-decoration: none;
}
`

