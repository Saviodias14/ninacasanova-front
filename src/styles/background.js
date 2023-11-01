import styled from "styled-components";
import { mainlyColor } from "../constants/colors";

export const MainlyBackground = styled.div`
background-color: rgba(255, 255, 255, 0.4);
height: 100vh;
width: 600px;
min-width:100%;
margin: 0 auto;
padding-top:100px;
align-items: center;
h2{
    color: ${mainlyColor};
    text-align:center;
    font-size: 30px;
    margin: 30px 0;
}
p{
    margin: 0 30px 30px 30px;
}
@media screen and (max-width: 600px) {
    width:100%;
}
`