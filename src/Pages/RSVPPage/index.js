import { useState } from "react";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import { MainlyBackground } from "../../styles/background";
import styled from "styled-components";


export default function Rsvp() {
    const [name, setName] = useState()
    const [tel, setTel] = useState()
    const [companion, setCompanion] = useState()
    return (
        <MainlyBackground>
            <Header />
            <SideBar />
            <h2>Confirmar presença</h2>
            <Form>
                <label>Nome:</label>
                <input placeholder="Digite seu nome" type="text" value={name} onChange={(e) => setName(e.target.value)} required={true} />
                <label>Telefone:</label>
                <input placeholder="Ex: 31999999999" type="text" value={tel} onChange={(e) => setTel(e.target.value)} required={true} />
                <label>Acompanhantes:</label>
                <input placeholder="Número de acompanhantes" type="number" value={companion} onChange={(e) => setCompanion(e.target.value)} ></input>
                <button>Confirmar presença</button>
            </Form>

        </MainlyBackground>
    )
}

const Form = styled.form`
display:flex;
flex-direction: column;
width: 400px;
margin: 0 auto;
align-items: flex-start;
label{
    font-size:14px;
    margin-left: 10px;
    text-align:left;
}
input{
    font-size: 18px;
    height: 40px;
    width: 400px;
    margin: 10px;
    margin-bottom:30px;
    border-radius: 5px;
}
`