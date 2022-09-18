import styled from "styled-components";
import Header from "../Header/Header";

export default function CheckOut() {
    return (
        <>
            <Header />
            <Wrapper>
                <div></div>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;

    & div {
        height: 120px;
        width: 100%;
        background-color: red;
        border-radius: 15px;
    }
`