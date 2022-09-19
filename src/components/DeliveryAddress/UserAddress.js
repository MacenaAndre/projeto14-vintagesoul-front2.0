import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import WrapperButton from "../styled-components/WrapperButton";

export default function UserAddress({ address }) {
    
    function changePage () {
        console.log("ola")
    };

    return (
        <>
            <Header/>
            <Wrapper>
                <div>
                    <h1>Estado:</h1>
                    <h2>{address.state}</h2>
                </div>
                <div>
                    <h1>Cidade:</h1>
                    <h2>{address.city}</h2>
                </div>
                <div>
                    <h1>Bairro:</h1>
                    <h2>{address.district}</h2>
                </div>
                <div>
                    <h1>Rua:</h1>
                    <h2>{address.street}</h2>
                </div>
                <div>
                    <h1>Número</h1>
                    <h2>{address.number}</h2>
                </div>
                <Last>
                    <h1>Complemento:</h1>
                    <h2>{address.complement}</h2>
                </Last>
                <WrapperButton onClick={() => changePage()} value="Editar endereço"/>
                <WrapperButton value="Finalizar pedido"/>
            </Wrapper>
            <Footer/>
        </>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    width: 100%;
    padding: 90px 20px 0px 20px;
    
    & div {
        display: flex;
        padding: 8px;
    }
    h2 {
        font-weight: 400;
        padding-left: 10px;
    }
`
const Last = styled.div`
    margin-bottom: 30px;
`