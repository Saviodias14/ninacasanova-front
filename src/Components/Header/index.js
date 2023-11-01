import styled from "styled-components"
import { FaBars } from "react-icons/fa"


export default function Header() {
    return (
        <Container>
            <FaBars size={25} style={{background: 'grey', color: 'white', marginLeft: '15px', cursor: 'pointer'}} />
            <h1>Chá de casa nova da Nina</h1>
        </Container>
    )
}

const Container = styled.div`
position:fixed;
left:auto;
right:auto;
width:600px;
top:0;
height:40px;
background-color:grey;
display:flex;
flex-direction:row;
align-items: center;
box-shadow: 0px 5px 10px rgba(128, 128, 128, 0.5);
h1{
    color: black;
    font-size: 30px;
    margin-left: 40px;
}
@media screen and (max-width: 600px) {
    left:0;
    width:100%;
    h1{
        font-size:20px;
    }
}
`