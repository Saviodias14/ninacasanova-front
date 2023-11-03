import styled from "styled-components";
import { mainlyColor, mainlyColorTranparency } from "../constants/colors";

export const MainlyBackground = styled.div`
background-color: rgba(255, 255, 255, 0.4);
height: 100vh;
width: 600px;
min-width:100%;
margin: 0 auto;
padding-top:100px;
align-items: center;
text-align:center;
h2{
    color: ${mainlyColor};
    text-align:center;
    font-size: 30px;
    margin: 30px 0;
}
p{
    margin: 0 50px 30px 50px;
    text-align:justify;
}
a{
    cursor: pointer ;
    color:${mainlyColorTranparency};
    text-decoration:none;
}
a:hover{
    color:${mainlyColor};
    text-decoration:underline;
}
img{
    width:420px;
    margin:20px 0;
}
@media screen and (max-width: 600px) {
    width:100%;
}
`