import { useState } from "react"
import styled from "styled-components"
import qrcode from "../../assets/QRCode_Fácil.png"


export default function GiftPopUp({ ocult, setOcult }) {
    const [name, setName] = useState()
    const [tel, setTel] = useState()
    const [message, setMessage] = useState()
    return (
        <>
            <Container ocult={ocult === 1}>
                <Sair onClick={() => setOcult(0)}>Voltar</Sair>
                <h3>Toalha colorida</h3>
                <img alt="Presente" src="data:image/webp;base64,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" />
                <h4>Descrição</h4>
                <p>Preço: R$ 70,00</p>
                <Buttons>
                    <button onClick={() => setOcult(2)}>Entregar pessoalmente</button>
                    <button onClick={() => setOcult(3)}>Pix no valor do presente</button>
                    <button onClick={() => setOcult(4)}>Pix com valor parcial</button>
                </Buttons>
            </Container>

            <Container ocult={ocult === 2}>
                <Sair onClick={() => setOcult(1)}>Voltar</Sair>
                <form>
                    <Datas>
                        <Data>
                            <label>Nome:</label>
                            <input placeholder="Digite seu nome" type="text" value={name} onChange={(e) => setName(e.target.value)} required={true} />
                        </Data>
                        <Data>
                            <label>Telefone:</label>
                            <input placeholder="Example: 31999999999" type="tel" value={tel} onChange={(e) => setTel(e.target.value)} required={true} />
                        </Data>
                    </Datas>
                    <label>Recadinho:</label>
                    <textarea placeholder="Escreva um recadinho" type="text" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                    <button>Reservar presente</button>

                </form>
            </Container>
            <Container ocult={ocult === 3} container={ocult}>
                <Sair onClick={() => setOcult(1)}>Voltar</Sair>
                <Gift>
                    <h1>Preço Toalha colorida: R$70,00</h1>
                    <img alt="Presente" src="data:image/webp;base64,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"/>
                </Gift>
                <Pix>
                    <img alt="qr code" src={qrcode} />
                    <p>00020126330014BR.GOV.BCB.PIX0111092824106845204000053039865802BR5916Savio Dias Viana6009SAO PAULO61080540900062170513CHADECASANOVA6304C8A2</p>
                </Pix>
                <MinForm>
                    <Datas>
                        <Data>
                            <label>Nome:</label>
                            <input placeholder="Digite seu nome" type="text" value={name} onChange={(e) => setName(e.target.value)} required={true} />
                        </Data>
                        <Data>
                            <label>Telefone:</label>
                            <input placeholder="Example: 31999999999" type="tel" value={tel} onChange={(e) => setTel(e.target.value)} required={true} />
                        </Data>
                    </Datas>
                    <label>Recadinho:</label>
                    <textarea placeholder="Escreva um recadinho" type="text" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                    <button>Reservar presente</button>

                </MinForm>
            </Container>
            <Container ocult={ocult === 4} container={ocult}>
                <Sair onClick={() => setOcult(1)}>Voltar</Sair>
                <Pix>
                    <img alt="qr code" src={qrcode} />
                    <p>00020126330014BR.GOV.BCB.PIX0111092824106845204000053039865802BR5916Savio Dias Viana6009SAO PAULO61080540900062170513CHADECASANOVA6304C8A2</p>
                </Pix>
                <MinForm>
                    <Datas>
                        <Data>
                            <label>Nome:</label>
                            <input placeholder="Digite seu nome" type="text" value={name} onChange={(e) => setName(e.target.value)} required={true} />
                        </Data>
                        <Data>
                            <label>Telefone:</label>
                            <input placeholder="Example: 31999999999" type="tel" value={tel} onChange={(e) => setTel(e.target.value)} required={true} />
                        </Data>
                    </Datas>
                    <label>Recadinho:</label>
                    <textarea placeholder="Escreva um recadinho" type="text" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                    <button>Reservar presente</button>

                </MinForm>
            </Container>
        </>
    )
}

const Container = styled.div`
display: ${props => (props.ocult ? 'flex' : 'none')};
flex-direction:column;
border-radius:5vh;
border: 1px black solid;
background-color:white;
height:${props => (props.container === 3 ? '80vh' : '70vh')};
width:530px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
padding: 40px 20px;
box-sizing:border-box;
align-items:center;
h3{
    font-size:28px;
    margin-bottom:10px;
}
p{
    text-align: center;
    font-size:16px;
    margin:0;
    margin-bottom:10px;
}
h4{
    font-size:20px;
    margin-bottom:10px;
}
img{
    width:100px;
    margin-bottom:10px;
}
form{
    position: absolute;
    left:50px;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    text-align:justify;
}
label{
    font-size:20px;
    margin: 10px;
    text-align:left;
}
input {
    font-size: 18px;
    height: 100px;
    width: 400px;
    margin: 10px;
    border-radius: 5px;
  }
textarea{
    font-size: 18px;
    height: 100px;
    width: 400px;
    margin: 10px;
    border-radius: 5px;
    padding: 5px;
    box-sizing:border-box;
}
form:button{
    margin-top: 20px;
}
`

const Buttons = styled.div`
display:flex;
flex-direction:row;
margin-top:20px;
button{
    font-size:12px;
    padding:0 5px;
    margin: 10px;
}
`

const Sair = styled.p`
position:absolute;
right:20px;
top:15px;
font-size:10px;
&:hover{
    cursor: pointer;
    color:red;
    text-decoration:underline;
}
`

const Datas = styled.div`
display:flex;
align-items:center;
flex-direction:row;
`

const Data = styled.div`
display:flex;
align-items:flex-start;
flex-direction:column;
input{
    font-size:18px;
    height: 30px;
    width:190px;
    margin: 10px;
    text-align:left;
    border-radius:5px;
}
`
const Pix = styled.div`
width:430px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:flex-start;
height: auto;
word-break: break-all;
p{
    margin-left:40px;
}
`

const Gift = styled.div`
display:flex;
flex-direction:row;
margin-bottom:20px;
align-items: center;
justify-content: space-between;
width:400px;
h1{
    font-size: 18px;
    margin:0;
}
img{
    height:50px;
    margin:0;
    margin-right:20px;
}
`

const MinForm = styled.form`
bottom:20px;
input{
    margin:5px;
}
label{
    margin:5px;
}
textarea{
    height:80px;
}
`

