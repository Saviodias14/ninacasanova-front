import styled from "styled-components";
import Header from "../../Components/Header";
import { MainlyBackground } from "../../styles/background";

export default function HomePage() {

    return (
        <MainlyBackground>
            <Header />
            <img alt="Nina" />
            <h2>Olá, pessoal! Um beijo da Nina.</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nulla libero. Vestibulum quam lectus, pellentesque sed eleifend sit amet, condimentum id lacus. Mauris id viverra augue. Duis condimentum varius mollis. Sed et accumsan urna, sit amet condimentum nibh. Fusce rutrum mi orci. Suspendisse sed augue lorem.
                Duis posuere, dolor congue pharetra finibus, tellus neque suscipit felis, placerat pellentesque mi eros sed mauris. Aenean auctor arcu ac neque rhoncus pellentesque. Pellentesque mollis leo eget dignissim aliquam. Praesent congue sapien sit amet nisl vehicula, sed faucibus nulla sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis purus et consequat volutpat. Vestibulum vitae orci sed elit vehicula interdum ac at velit. Morbi eget justo in metus lacinia pharetra. Etiam vehicula auctor massa, et ullamcorper velit laoreet ut. Sed vitae neque dignissim, mattis orci vitae, tincidunt erat. Nullam vulputate justo vel nunc ornare, sit amet aliquet quam consequat. Etiam dolor eros, imperdiet a placerat vel, mattis quis enim. In varius imperdiet luctus. Nullam in mollis dolor.
            </p>
            <Buttons>
                <button>Confirmar presença</button>
                <button>Ver lista de presentes</button>
            </Buttons>
        </MainlyBackground>
    )
}

const Buttons = styled.div`
display:flex;
flex-direction:row;
align-items: center;
justify-content: space-between;
padding: 0 60px;
`