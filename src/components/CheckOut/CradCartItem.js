import styled from "styled-components";

export default function CardCartItem({ id, image, title, quantity, price }) {
    const cardTotalPrice = price*quantity;
    const formatedPrice = (cardTotalPrice/100).toFixed(2).split(".").join(",");
    

    function deleteItem (id) {
        return;
    };

    return (
        <Card>
            <img src={image} alt="imagem"></img>
            <h1>{title}<h2>Quantidade: {quantity}</h2></h1>
            <Price>
                <h1>R$ {formatedPrice}</h1>
            </Price>
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
    box-shadow: 8px 10px 20px 0px #00000040;
    border: 1px solid lightgrey;
    
    & img {
        width: 130px;
        height: 130px;
        padding-right: 10px;
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

const Price = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
`