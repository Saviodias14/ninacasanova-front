import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import { MainlyBackground } from "../../styles/background";
import styled from "styled-components";
import MessagePopUp from "./MessagePopUp";
import axios from "axios";


export default function Message() {
    const [ocult, setOcult] = useState(true)
    const [messageData, setMessageData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_URL_API}/messages`)
                setMessageData(response.data)
            } catch (err) {
                alert('Não foi possivel carregar as mensagens')
            }
        }
        fetchData()
    }, [ocult])
    console.log(messageData)
    if (!messageData || messageData.length === 0) {
        return (
            <MainlyBackground>
                <Header />
                <SideBar />
                <MessagePopUp ocult={ocult} setOcult={setOcult}/>
                <h2>Recadinhos</h2>
                <p>Escreva um recadinho para parabenizar a Nina!Escreva um recadinho para parabenizar a Nina!Escreva um recadinho para parabenizar a Nina!Escreva um recadinho para parabenizar a Nina!</p>
                <button onClick={() => setOcult(false)}>Enviar recadinho</button>
            </MainlyBackground>
        )
    }
    return (
        <MainlyBackground>
            <Header />
            <SideBar />
            <MessagePopUp ocult={ocult} setOcult={setOcult}/>
            <h2>Recadinhos</h2>
            <p>Escreva um recadinho para parabenizar a Nina!Escreva um recadinho para parabenizar a Nina!Escreva um recadinho para parabenizar a Nina!Escreva um recadinho para parabenizar a Nina!</p>
            <button onClick={() => setOcult(false)}>Enviar recadinho</button>
            <Messages>
                {messageData.map((m) => (
                    <IndividualMessage key={m.id}>
                        <p>{m.message}</p>
                        <p>{m.name}</p>
                    </IndividualMessage>
                ))}
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
justify-content:left;
width:400px;
border-radius:20px;
min-height: 100px;
height: auto;
background-color: white;
padding: 20px 40px 30px 40px;
box-sizing:border-box;
margin-bottom: 30px;
flex-wrap: wrap;
p{
    margin:0 0 0 0;
    font-size: 26px;
    word-wrap: break-word;
    overflow-wrap: break-word;
}
p:last-child{
    position:absolute;
    bottom: 10px;
    right:20px;
}
`


