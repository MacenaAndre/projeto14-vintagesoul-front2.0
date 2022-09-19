import styled from "styled-components";

export default function CardCartItem() {
    return (
        <Card>
            <img src="https://images-americanas.b2w.io/produtos/28625926/imagens/amplificador-guitarra-sheldon-gt-1200-15w-rms-preto/28625925_1_large.jpg" alt="oba"></img>
            <h1>TITULO DO PRODUTO</h1>
            <div>R$ 100,00</div>
        </Card>

    );
}

const Card = styled.div`
    display: flex;
    height: 150px;
    width: 90%;
    background-color: #edede9;
    border-radius: 15px;
    padding: 10px 10px;
    margin-bottom: 20px;
    position: relative;
    
    & img {
        width: 130px;
        height: 130px;
        padding-right: 10px;
    }
    div {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`