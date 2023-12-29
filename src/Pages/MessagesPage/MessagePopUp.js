import axios from "axios"
import { useState } from "react"
import styled from "styled-components"


export default function MessagePopUp({ ocult, setOcult }) {
    const [name, setName] = useState()
    const [message, setMessage] = useState()

    const handleForm = async (e) => {
        e.preventDefault()

        try {
            const body = { name, message }
            await axios.post(`${process.env.REACT_APP_URL_API}/messages`, body)
            ocult ? setOcult(false) : setOcult(true)
            setMessage('')
            setName('')
            alert('Mensagem enviada. Obrigada!')
        } catch (err) {
            alert(err.response.data.message)
        }
    }
    return (
        <Container ocult={ocult}>
            <Sair onClick={() => setOcult(true)}>Voltar</Sair>
            <form onSubmit={handleForm}>
                <label>Nome:</label>
                <input placeholder="Digite seu nome" type="text" value={name} onChange={(e) => setName(e.target.value)} required={true} />

                <label>Recadinho:</label>
                <textarea placeholder="Escreva um recadinho" type="text" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                <button>Enviar mensagem</button>

            </form>
        </Container>
    )
}

const Container = styled.div`
z-index:100;
display: ${props => (props.ocult ? `none` : 'flex')};
flex-direction:column;
border-radius:5vh;
border: 1px black solid;
background-color:white;
height: 70vh;
width:530px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
padding: 40px 20px;
box-sizing:border-box;
align-items:center;
form{
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    text-align:justify;
}
label{
    font-size:14px;
    margin-left: 10px;
    text-align:left;
}
input {
    font-size: 18px;
    height: 40px;
    width: 400px;
    margin: 10px;
    margin-bottom:30px;
    border-radius: 5px;
  }
textarea{
    font-size: 18px;
    height: 100px;
    max-width: 400px;
    max-height: 140px;
    width: 400px;
    margin: 10px;
    margin-bottom:30px;
    border-radius: 5px;
    padding: 5px;
}
form:button{
    margin-top: 20px;
}
`

const Sair = styled.p`
position:absolute;
right:15px;
top:15px;
font-size:14px;
&:hover{
    cursor: pointer;
    color:red;
    text-decoration:underline;
}
`