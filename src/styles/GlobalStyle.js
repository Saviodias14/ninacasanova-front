import { createGlobalStyle } from "styled-components"
import { mainlyColor } from "../constants/colors"

const GlobalStyle = createGlobalStyle`
body{
    height: 100vh;
    background-image: url('https://img.freepik.com/vetores-gratis/quadro-de-folhas-de-camelia-retangulo-em-branco_53876-100809.jpg'); 
    background-size: cover; 
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    background-attachment: fixed;
}
button{
    min-height:40px;
    padding: 5px 15px;
    color: white;
    background-color:${mainlyColor};
    font-size: 18px;
    border-radius:10px;
}
`

export default GlobalStyle