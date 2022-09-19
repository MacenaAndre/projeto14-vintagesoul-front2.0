import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import WrapperButton from "../styled-components/WrapperButton";
import CardCartItem from "./CradCartItem";

export default function CheckOut() {
    return (
        <>
            <Header />
            <Wrapper>
                <CardCartItem></CardCartItem>
                <Link to="/adress">
                    <WrapperButton value="Ir para endereço de entrega"></WrapperButton>
                </Link>
            </Wrapper>
            <Footer/>
        </>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 90vh;
    padding: 90px 0px 20px 0px;
`
