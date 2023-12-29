import { useState } from "react";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import { MainlyBackground } from "../../styles/background";
import styled from "styled-components";
import axios from "axios";


export default function Rsvp() {
    const [name, setName] = useState()
    const [tel, setTel] = useState()
    const [companion, setCompanion] = useState()
    function validateInput(input) {
        if (input) {
            input.value = input.value.replace(/\D/g, '');
        }

        if (input.value.length > 11) {
            input.value = input.value.slice(0, 11);
        }
    }

    const handleForm = async (e) => {
        e.preventDefault()
        try {
            const body = { name, phone: tel, companion: companion === 'Sim' ? true : false }
            await axios.post(`${process.env.REACT_APP_URL_API}/invites`, body)
            alert('Presença confirmada')
            setCompanion('')
            setTel('')
        } catch (err) {
            alert(err.response.data.message)
        }
    }
    return (
        <MainlyBackground>
            <Header />
            <SideBar />
            <h2>Confirmar presença</h2>
            <Form onSubmit={handleForm}>
                <label>Nome:</label>
                <input placeholder="Digite seu nome" type="text" value={name} onChange={(e) => setName(e.target.value)} required={true} />
                <label>Telefone:</label>
                <input placeholder="Ex: 31999999999" type="text" value={tel} maxLength={11} onInput={(e) => validateInput(e.target)} onChange={(e) => setTel(e.target.value)} required={true} />
                <label>Acompanhante:</label>
                <select value={companion} onChange={(e) => setCompanion(e.target.value)}>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select>
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
input, select{
    font-size: 18px;
    height: 40px;
    width: 400px;
    margin: 10px;
    margin-bottom:30px;
    border-radius: 5px;
}
`