import { Link } from "react-router-dom";
import styled from "styled-components";
import checkIcon from "../../assets/img/checkicon.png"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function ConfirmPurchase () {
    return (
        <>
        <Header/>
        <Wrapper>
            <img src={checkIcon} alt="check"></img>
            <h1>Compra feita com Sucesso</h1>            
            <Link to="/">Voltar Para Home</Link>
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
    height: 90vh;
    margin: 100px 20px 20px 20px;

    & img {
        width: 300px;
        height: 300px;
        margin: 30px
    }
    h1 {
        font-size: 25px;
        margin-bottom: 10px;
    }
    h2 {
        font-weight: 400;
        font-size: 23px;
        margin-bottom: 150px;
    }
    a {
        font-size: 20px;
        font-weight: 700;
        text-decoration: underline;
    }
`