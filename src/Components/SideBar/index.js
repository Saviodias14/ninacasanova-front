import { useContext } from "react"
import styled from "styled-components"
import SideBarContext from "../../context/sidebar"
import { mainlyColorTranparency } from "../../constants/colors"
import { useLocation, useNavigate } from "react-router-dom"


export default function SideBar() {
    const { showSideBar, setShowSideBar } = useContext(SideBarContext)
    const navigate = useNavigate()

    const { pathname } = useLocation()
    return (
        <SideBarContainer show={showSideBar}>
            <Menu>
                <ul>
                    <List page={pathname === '/'} onClick={() => navigate('/')}>Home</List>
                    <List page={pathname === '/list'} onClick={() => navigate('/list')}>Lista de Presentes</List>
                    <List page={pathname === '/rsvp'} onClick={() => navigate('/rsvp')}>Confirmar Presença</List>
                    <List page={pathname === '/message'} onClick={() => navigate('/message')}>Mural de Recados</List>
                </ul>
            </Menu>
            <Space onClick={() => showSideBar ? setShowSideBar(false) : setShowSideBar(true)}></Space>
        </SideBarContainer>
    )
}

export const SideBarContainer = styled.div`
display:${(props) => (props.show ? 'flex' : 'none')};
position: fixed;
left: auto;
right:auto;
top:0;
z-index:50;
background-color: rgba(0, 0, 0, 0.6);
height: 100vh;
width: 900px;
margin: 0 auto;
@media screen and (max-width: 600px) {
    width:100%;
}
`
const Space = styled.div`
flex:1;
background-color: rgba(0,0,0,0.1);
height:100vh;
`

const Menu = styled.div`
background-color:white;
height:100%;
width: 260px;
padding-top:70px;
`

const List = styled.li`
cursor: pointer;
width: 80%;
height: 40px;
background-color: ${props => (props.page ? mainlyColorTranparency : 'white')};
margin-bottom:50px;
text-justify:center;
line-height:40px;
padding-left: 30px; 
border-top-right-radius:20px;
border-bottom-right-radius:20px;
opacity: 0.9;
`