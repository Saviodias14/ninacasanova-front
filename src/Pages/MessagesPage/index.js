import { useState } from "react";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import { MainlyBackground } from "../../styles/background";
import styled from "styled-components";
import MessagePopUp from "./MessagePopUp";


export default function Message() {
    const [ocult, setOcult] = useState(true)
    return (
        <MainlyBackground>
            <Header />
            <SideBar />
            <MessagePopUp ocult={ocult} setOcult={setOcult}/>
            <h2>Recadinhos</h2>
            <p>Escreva um recadinho para parabenizar a Nina!Escreva um recadinho para parabenizar a Nina!Escreva um recadinho para parabenizar a Nina!Escreva um recadinho para parabenizar a Nina!</p>
            <button onClick={()=> setOcult(false)}>Enviar recadinho</button>
            <Messages>
                <IndividualMessage>
                    <p>Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!</p>
                    <p>Sávio Dias</p>
                </IndividualMessage>
                <IndividualMessage>
                    <p>Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!</p>
                    <p>Sávio Dias</p>
                </IndividualMessage>
                <IndividualMessage>
                    <p>Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!</p>
                    <p>Sávio Dias</p>
                </IndividualMessage>
                <IndividualMessage>
                    <p>Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!</p>
                    <p>Sávio Dias</p>
                </IndividualMessage>
                <IndividualMessage>
                    <p>Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!Te desejo tudo de bom Ninoka!!</p>
                    <p>Sávio Dias</p>
                </IndividualMessage>
            </Messages>
        </MainlyBackground>
    )
}

const Messages = styled.div`
display:flex;
flex-direction:column;
margin-top:20px;
align-items:center;
`
const IndividualMessage = styled.div`
display:flex;
flex:1;
position:relative;
align-items: center;
justify-content:center;
width:400px;
border-radius:20px;
min-height: 200px;
height: auto;
background-color: white;
padding: 20px 40px 30px 40px;
box-sizing:border-box;
margin-bottom: 30px;
p{
    margin:0 0 0 0;
}
p:last-child{
    position:absolute;
    bottom: 10px;
    right:20px;
}
`


