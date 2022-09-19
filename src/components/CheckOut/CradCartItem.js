import styled from "styled-components";

export default function CardCartItem({id}) {

    function deleteItem () {
        return;
    };

    return (
        <Card>
            <img src="https://images-americanas.b2w.io/produtos/28625926/imagens/amplificador-guitarra-sheldon-gt-1200-15w-rms-preto/28625925_1_large.jpg" alt="oba"></img>
            <h1>TITULO DO PRODUTOOOO  <h2>X5</h2></h1>
            <div>R$ 100,00</div>
            <span onClick={() => deleteItem(id)}>x</span>
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
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: red;
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 8px;
        position: absolute;
        top: 0px;
        left: 0px;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
    }
    h2 {
        font-weight: 400;
        margin-top: 5px;
    }
`