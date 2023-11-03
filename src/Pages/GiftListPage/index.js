import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import { MainlyBackground } from "../../styles/background";
import styled from "styled-components";

export default function GiftList() {

    return (
        <MainlyBackground>
            <Header />
            <SideBar />
            <h2>Lista de presentes</h2>
            <p>Escolha um presente para levar no dia, para contribur com um pix ou para fazer uma pequena contribuição! Fique a vontade para enviar um recadinho para Nina na seção de <Link to={'/message'}>Mural de recados.</Link></p>
            <GiftContainer>
                <Gift>
                    <h3>Toalha colorida</h3>
                    <img alt="Presente" />
                    <h4>Descrição</h4>
                    <p>Preço: R$ 70,00</p>
                    <div>
                        <button>Presentear</button>
                    </div>
                </Gift>
                <Gift>
                    <h3>Toalha colorida</h3>
                    <img alt="Presente" />
                    <h4>Descrição</h4>
                    <p>Preço: R$ 70,00</p>
                    <div>
                        <button>Presentear</button>
                    </div>
                </Gift>
                <Gift>
                    <h3>Toalha colorida</h3>
                    <img alt="Presente" />
                    <h4>Descrição</h4>
                    <p>Preço: R$ 70,00</p>
                    <div>
                        <button>Presentear</button>
                    </div>
                </Gift>
                <Gift>
                    <h3>Toalha colorida</h3>
                    <img alt="Presente" />
                    <h4>Descrição</h4>
                    <p>Preço: R$ 70,00</p>
                    <div>
                        <button>Presentear</button>
                    </div>
                </Gift>
                <Gift>
                    <h3>Toalha colorida</h3>
                    <img alt="Presente" />
                    <h4>Descrição</h4>
                    <p>Preço: R$ 70,00</p>
                    <div>
                        <button>Presentear</button>
                    </div>
                </Gift>
                <Gift>
                    <h3>Toalha colorida</h3>
                    <img alt="Presente" />
                    <h4>Descrição</h4>
                    <p>Preço: R$ 70,00</p>
                    <div>
                        <button>Presentear</button>
                    </div>
                </Gift>
                <Gift>
                    <h3>Toalha colorida</h3>
                    <img alt="Presente" />
                    <h4>Descrição</h4>
                    <p>Preço: R$ 70,00</p>
                    <div>
                        <button>Presentear</button>
                    </div>
                </Gift>
            </GiftContainer>
        </MainlyBackground>
    )
}

const Gift = styled.div`
background-color:white;
width: 200px;
height: 250px;
border-radius:20px;
margin: 50px;
box-sizing:border-box;
padding: 20px 10px 10px 10px;
text-align: left;
align-items:center;
h3{
    font-size:20px;
    margin-bottom:10px;
}
p{
    font-size:14px;
    margin:0;
    margin-bottom:10px;
}
h4{
    font-size:18px;
    margin-bottom:10px;
}
img{
    width:150px;
    margin-bottom:10px;
}
div{
    text-align:center;
}
`

const GiftContainer = styled.div`
display: flex;
flex-wrap:wrap;
justify-content:space-between;
`
