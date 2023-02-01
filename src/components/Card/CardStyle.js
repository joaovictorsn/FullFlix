import styled from "styled-components"

export const DivCard = styled.div`
display: flex;
flex-direction: column;
background-color: #111;
box-sizing: border-box;
width:fit-content;
border: 3px solid #808080;
border-radius: 5px;
:hover{
border: 1px solid #f7d354;
cursor: pointer;
}
`
export const TextContent = styled.p`
font-size: 15px;
box-sizing: border-box;
white-space: normal;
word-wrap: break-word;
margin-top: 1vh;
color: white;
`
export const ButtonDetails = styled.a`
background-color: #f7d354;
border: 2px solid #f7d354;
border-radius: 4px;
color: #000;
padding: 1rem 0.5rem;
align-items: center;
transition: 0.4s;
text-align: center;
text-decoration: none;
:hover{
    background-color: transparent;
    color: #f7d354;
}
`

// export const StyledLink = styled(Link)`
//     text-decoration: none;

//     &:focus, &:hover, &:visited, &:link, &:active {
//         text-decoration: none;
//     }
// `;
